import type { AppContext as NextAppContext, AppProps as NextAppProps } from "next/app"
import NextApp from "next/app"
import "@/styles/globals.css"

import NonceProvider from "@/components/contexts/Nonce"
import { RobotoMono } from "@/lib/fonts"
import { cn } from "@/lib/utils/styling"

type AppProps = NextAppProps & { nonce?: string }

export default function App({ Component, pageProps, nonce }: AppProps) {
	return (
		<NonceProvider nonce={nonce}>
			<div className={cn(RobotoMono.variable, "font-roboto-mono h-full")}>
				<Component {...pageProps} />
			</div>
		</NonceProvider>
	)
}

App.getInitialProps = async (appContext: NextAppContext) => {
	const appProps = await NextApp.getInitialProps(appContext)
	const nonce = appContext.ctx.req?.headers?.["x-nonce"] as string | undefined

	return {
		...appProps,
		nonce,
	}
}
