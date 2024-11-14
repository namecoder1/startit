import type { Metadata } from "next";
import "@/assets/globals.css";
import Navbar from "@/components/navbar";
import 'easymde/dist/easymde.min.css'


export const metadata: Metadata = {
  title: "Database | StartIt",
  description: "Sanity database to manage server contents.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
