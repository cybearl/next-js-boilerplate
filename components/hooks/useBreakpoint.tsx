import throttle from "lodash.throttle"
import { useEffect, useState } from "react"

/**
 * An enum containing all available breakpoints with their corresponding pixel values.
 */
export enum Breakpoint {
	xs = 0,
	sm = 640,
	md = 768,
	lg = 1024,
	xl = 1280,
	"2xl" = 1536,
	"3xl" = 1920,
	"4xl" = 2560,
	"5xl" = 3840,
	"6xl" = 5120,
	"7xl" = 7680,
	"8xl" = 10240,
}

/**
 * Get the breakpoint based on the width.
 * @param width The width to get the breakpoint for.
 * @returns The breakpoint.
 */
export function getBreakpoint(width: number): Breakpoint {
	if (width < Breakpoint.sm) return Breakpoint.xs
	if (width >= Breakpoint.sm && width < Breakpoint.md) return Breakpoint.sm
	if (width >= Breakpoint.md && width < Breakpoint.lg) return Breakpoint.md
	if (width >= Breakpoint.lg && width < Breakpoint.xl) return Breakpoint.lg
	if (width >= Breakpoint.xl && width < Breakpoint["2xl"]) return Breakpoint.xl
	if (width >= Breakpoint["2xl"] && width < Breakpoint["3xl"]) return Breakpoint["2xl"]
	if (width >= Breakpoint["3xl"] && width < Breakpoint["4xl"]) return Breakpoint["3xl"]
	if (width >= Breakpoint["4xl"] && width < Breakpoint["5xl"]) return Breakpoint["4xl"]
	if (width >= Breakpoint["5xl"] && width < Breakpoint["6xl"]) return Breakpoint["5xl"]
	if (width >= Breakpoint["6xl"] && width < Breakpoint["7xl"]) return Breakpoint["6xl"]
	if (width >= Breakpoint["7xl"] && width < Breakpoint["8xl"]) return Breakpoint["7xl"]

	return Breakpoint["8xl"]
}

/**
 * Custom hook for getting the current breakpoint of a device based on its width.
 * @returns The current breakpoint of the device.
 */
export default function useBreakpoint() {
	const [breakpoint, setBreakpoint] = useState(() =>
		getBreakpoint(typeof window !== "undefined" ? window.innerWidth : 0),
	)

	useEffect(() => {
		const calcInnerWidth = throttle(() => {
			let innerWidth = 0

			if (typeof window !== "undefined") {
				innerWidth = window.innerWidth
			}

			setBreakpoint(getBreakpoint(innerWidth))
		}, 200)

		window.addEventListener("resize", calcInnerWidth)
		return () => window.removeEventListener("resize", calcInnerWidth)
	}, [])

	return breakpoint
}
