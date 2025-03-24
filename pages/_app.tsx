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

	// Auto-redirect to home page if the requested page is not found
	// while also letting the crawler know that the page is not found
	// and that it is a 302 redirect
	if (appContext.ctx.res?.statusCode === 404) {
		appContext.ctx.res.writeHead(302, { location: "/" })
		appContext.ctx.res.end()
	}

	return {
		...appProps,
		nonce,
	}
}
