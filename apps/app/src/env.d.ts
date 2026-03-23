/// <reference types="astro/client" />

declare namespace App {
	interface Locals extends Record<string, unknown> {
		user: import("@modfolio/connect-sdk/astro").ConnectUser | null;
	}
}
