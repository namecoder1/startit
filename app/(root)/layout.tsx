import Navbar from "@/components/navbar"
import { Montserrat } from "next/font/google"
import 'easymde/dist/easymde.min.css'

const montserrat = Montserrat({
  subsets: ["latin"],
});

const RootLayout = ({ children } : Readonly<{children: React.ReactNode}>) => {
	return (
		<main className={montserrat.className}>
			<Navbar />
			{children}
		</main>
	)
}

export default RootLayout