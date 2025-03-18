import type { Metadata } from "next";
import "./globals.css";
import "./main.scss";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers';



export const metadata: Metadata = {
  title: "Devkalm",
  description: "Devkalm is a software development company that can develop websites, web applications, and mobile applications for your business.",
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
       <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className=""
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
