import throttle from "lodash.throttle"
import { useEffect, useState } from "react"

/**
 * The type containing all available breakpoints.
 */
type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "> xl"

/**
 * Get the device configuration based on the width.
 * @param width The width of the device.
 * @returns The device configuration.
 */
function getDeviceConfig(width: number): Breakpoint {
	if (width < 640) return "xs"
	if (width >= 640 && width < 768) return "sm"
	if (width >= 768 && width < 1024) return "md"
	if (width >= 1024 && width < 1280) return "lg"
	if (width >= 1280 && width < 1536) return "xl"
	return "> xl"
}

/**
 * Custom hook for getting the current breakpoint of the device.
 * @returns The current breakpoint of the device.
 */
export default function useBreakpoint() {
	let innerWidth = 0

	if (typeof window !== "undefined") {
		innerWidth = window.innerWidth
	}

	const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(innerWidth))

	useEffect(() => {
		const calcInnerWidth = throttle(() => {
			let innerWidth = 0

			if (typeof window !== "undefined") {
				innerWidth = window.innerWidth
			}

			setBrkPnt(getDeviceConfig(innerWidth))
		}, 200)

		window.addEventListener("resize", calcInnerWidth)
		return () => window.removeEventListener("resize", calcInnerWidth)
	}, [])

	return brkPnt
}
