/// <reference types="astro/client" />

declare namespace App {
	interface Locals extends Record<string, unknown> {
		user: import("@modfolio/connect-sdk/astro").ConnectUser | null;
	}

	/**
	 * Astro Session payload (KV-backed via the SESSION binding). Typing this here
	 * makes `Astro.session.get("savedFeedIds")` / `.set(...)` strongly typed —
	 * the generic on AstroSession.get/set resolves against App.SessionData, so no
	 * `any` leaks into the feed-save path.
	 */
	interface SessionData {
		/** Feed item ids the authenticated user has saved (read-later). */
		savedFeedIds: string[];
	}
}
