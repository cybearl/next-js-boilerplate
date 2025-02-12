import "next"

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			/**
			 * The version of the application, note that it is automatically injected via the
			 * `package.json` file, and should not be modified manually via the `.env` file.
			 */
			VERSION: string

			/**
			 * The port of the application, used by the server to listen to incoming requests.
			 */
			PORT: string

			/**
			 * The environment of the application.
			 */
			NODE_ENV: "development" | "preview" | "production"

			/**
			 * The domain of the application, used for the middleware in production, and other
			 * domain-related operations.
			 */
			NEXT_PUBLIC_DOMAIN: string

			/**
			 * Status of the application (allows to enable/disable the application),
			 * It can either be:
			 * - `enabled`: The application is enabled and available to the public.
			 * - `disabled`: The application is disabled and not available to the public.
			 * - `in-maintenance`: The application is in maintenance mode and not available to the public.
			 * - `in-development`: The application is in development mode and not available to the public.
			 */
			NEXT_PUBLIC_APP_STATUS: "enabled" | "disabled" | "in-maintenance" | "in-development"
		}
	}
}
