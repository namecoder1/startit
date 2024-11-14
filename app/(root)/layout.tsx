import Navbar from "@/components/navbar"
import { Metadata } from "next";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "StartIt",
  description: "StartIt è una community di appassionti startuppers.",
}

const RootLayout = ({ children } : Readonly<{children: React.ReactNode}>) => {
	return (
		<main className={`${montserrat.className} max-w-6xl mx-auto px-10`}>
			<Navbar />
			{children}
		</main>
	)
}

export default RootLayout