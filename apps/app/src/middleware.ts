import { defineMiddleware, sequence } from "astro:middleware";
import { auth } from "./lib/connect";

const authGuard = defineMiddleware(async (context, next) => {
	const response = await next();

	if (!context.locals.user && !context.url.pathname.startsWith("/auth/")) {
		return context.redirect("/auth/login");
	}

	return response;
});

export const onRequest = sequence(auth.middleware, authGuard);
