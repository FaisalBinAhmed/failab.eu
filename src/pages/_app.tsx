import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics />
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
