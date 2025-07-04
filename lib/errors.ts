import type { ErrorObj } from "@cybearl/cypack"
import { BaseErrors } from "@cybearl/cypack"

/**
 * Contains all the available errors for the application.
 */
export const AppErrors = {
	...BaseErrors,
} as const satisfies Record<string, ErrorObj>
