import { useEffect, useState } from "react"

/**
 * Custom hook for a canvas 2D context.
 * @param canvasRef The reference to the canvas element.
 * @returns The canvas 2D context.
 */
export default function useCanvas(canvasRef: HTMLCanvasElement | null) {
	const [canvas, setCanvas] = useState<CanvasRenderingContext2D | null>(null)

	useEffect(() => {
		if (canvasRef) {
			const canvas2DContext = canvasRef.getContext("2d")
			setCanvas(canvas2DContext)

			const resizeCanvas = () => {
				canvasRef.width = window.innerWidth
				canvasRef.height = window.innerHeight
			}

			resizeCanvas()
			window.addEventListener("resize", resizeCanvas)
			return () => window.removeEventListener("resize", resizeCanvas)
		}
	}, [canvasRef])

	return {
		canvas,
	}
}
