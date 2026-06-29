import type { APIContext } from "astro";
import {
	isValidFeedId,
	normalizeSavedIds,
	savedItems,
} from "../../../lib/feed";

// POST /api/feed/save — toggle a feed item in the authenticated user's
// read-later set. Two callers, one handler:
//   • progressive enhancement (JS): fetch() with JSON body, expects JSON back.
//   • no-JS fallback: a real <form> POST (form-encoded) → 303 redirect back to
//     the feed so the SSR re-render shows the new state.
//
// State lives in Astro.session ("savedFeedIds"), which is KV-backed and keyed to
// the browser session. Auth is already enforced by middleware (unauthenticated
// requests are redirected before reaching here); the explicit 401 below is
// defense-in-depth so the endpoint is safe even if the middleware order changes.

const SESSION_KEY = "savedFeedIds";
const FEED_ANCHOR = "/#feed";

type SaveAction = "save" | "unsave";

const isSaveAction = (value: unknown): value is SaveAction =>
	value === "save" || value === "unsave";

const json = (body: unknown, status = 200): Response =>
	new Response(JSON.stringify(body), {
		status,
		headers: { "content-type": "application/json; charset=utf-8" },
	});

/** Pull { id, action } from either a JSON body or a form-encoded body. */
async function readInput(
	request: Request,
): Promise<{ id: unknown; action: unknown; wantsJson: boolean }> {
	const contentType = request.headers.get("content-type") ?? "";

	if (contentType.includes("application/json")) {
		try {
			const data = (await request.json()) as Record<string, unknown>;
			return { id: data.id, action: data.action, wantsJson: true };
		} catch {
			return { id: undefined, action: undefined, wantsJson: true };
		}
	}

	const form = await request.formData();
	return {
		id: form.get("id"),
		action: form.get("action"),
		wantsJson: false,
	};
}

export async function POST(context: APIContext): Promise<Response> {
	const { locals, session, request, redirect } = context;

	// Defense-in-depth: never mutate per-user state for an unauthenticated caller.
	if (!locals.user) {
		return json({ error: "unauthorized" }, 401);
	}

	// Astro Sessions are enabled via the SESSION KV binding; in a correctly
	// configured runtime `session` is always present. Treat its absence as a
	// server misconfiguration rather than silently no-op'ing the user's intent.
	if (!session) {
		return json({ error: "session_unavailable" }, 500);
	}

	const { id, action, wantsJson } = await readInput(request);

	if (!isValidFeedId(id) || !isSaveAction(action)) {
		if (wantsJson) {
			return json({ error: "invalid_request" }, 400);
		}
		// No-JS path: bounce back without mutating; the SSR state is the source.
		return redirect(FEED_ANCHOR, 303);
	}

	// Read → normalize (drops stale/forged ids) → toggle → write back.
	const current = normalizeSavedIds(await session.get(SESSION_KEY));
	const set = new Set(current);
	if (action === "save") {
		set.add(id);
	} else {
		set.delete(id);
	}
	const next = normalizeSavedIds([...set]);
	session.set(SESSION_KEY, next);

	if (!wantsJson) {
		// No-JS: redirect back; the session is persisted on this response, so the
		// re-rendered feed reflects the toggle.
		return redirect(FEED_ANCHOR, 303);
	}

	return json({
		saved: next,
		savedCount: next.length,
		isSaved: set.has(id),
		// Saved ids in feed order — lets the client rebuild the "saved" panel
		// without re-deriving ordering rules on its side.
		savedIds: savedItems(next).map((item) => item.id),
	});
}

// A bare GET (e.g. a crawler or accidental navigation) is not a valid mutation.
export function GET(): Response {
	return json({ error: "method_not_allowed" }, 405);
}
