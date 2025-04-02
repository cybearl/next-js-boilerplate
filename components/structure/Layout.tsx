import type { AppHeadProps } from "@/components/structure/AppHead"
import AppHead from "@/components/structure/AppHead"
import Footer from "@/components/structure/Footer"
import { cn } from "@/lib/utils/styling"
import type { ReactNode } from "react"

type LayoutProps = {
	minimalMode?: boolean
	enableMaxWidth?: boolean

	children: ReactNode
}

export default function Layout({
	customTitle,
	customDescription,
	doNotIndex,
	minimalMode,
	enableMaxWidth = true,

	children,
}: AppHeadProps & LayoutProps) {
	return (
		<>
			<AppHead customTitle={customTitle} customDescription={customDescription} doNotIndex={doNotIndex} />

			<div className="flex flex-col items-center justify-center w-full overflow-x-hidden min-h-svh">
				{minimalMode ? (
					<main
						className={cn(
							"flex items-center justify-center flex-grow w-full h-full gap-16",
							enableMaxWidth ? "max-w-6xl" : "",
						)}
					>
						{children}
					</main>
				) : (
					<>
						<main className={cn("flex-grow w-full gap-16", enableMaxWidth ? "max-w-6xl" : "")}>
							{children}
						</main>
						<Footer />
					</>
				)}
			</div>
		</>
	)
}
