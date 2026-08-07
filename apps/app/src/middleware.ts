import { defineMiddleware, sequence } from "astro:middleware";
import { isPublicPath } from "@modfolio/connect-sdk";
import { auth } from "./lib/connect";

/**
 * 익명 방문자를 로그인으로 보낸다 — 단, **공개여야 하는 경로는 빼고**.
 *
 * ⚠ 이 가드는 `/auth/` 로 시작하지 않는 **모든** 경로를 리다이렉트했다. 그래서
 * `/.well-known/modfolio-brand.json` 도 로그인으로 302 됐다(실측 2026-08-08:
 * `life.modfolio.io/.well-known/modfolio-brand.json` → 302 `/auth/login`).
 *
 * 그게 왜 문제인가: Connect 는 이 앱의 로그인 페이지를 **이 앱의 색으로** 칠하려고
 * 그 문서를 가져간다. 302 가 오면 브랜드가 없는 것으로 취급되고, 이 앱의 로그인
 * 화면은 Connect 의 중립 톤으로 렌더된다 — 아직 발행하지 않아서 오늘은 무해하지만,
 * 발행하는 순간 **문서를 만들어도 도달하지 않는** 상태가 된다.
 *
 * 목록을 여기서 새로 쓰지 않고 SDK 의 `isPublicPath` 를 쓴다. 그게 함대 공통 어휘이고
 * (`/api/webhooks/`, `/.well-known/`), 새 공개 접두어가 생기면 SDK 한 곳만 바뀐다 —
 * 「빠뜨릴 수 있는 것을 인자로 두지 않는다」의 같은 축이다.
 */
const authGuard = defineMiddleware(async (context, next) => {
	const response = await next();

	const { pathname } = context.url;
	if (
		!context.locals.user &&
		!pathname.startsWith("/auth/") &&
		!isPublicPath(pathname)
	) {
		return context.redirect("/auth/login");
	}

	return response;
});

export const onRequest = sequence(auth.middleware, authGuard);
