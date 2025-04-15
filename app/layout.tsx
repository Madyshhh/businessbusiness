
import type { Metadata } from "next";
import "./globals.css";
import "./main.scss";
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers';
import Loader from './components/Loader';



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
      <meta name="apple-mobile-web-app-title" content="Devkalm" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>


      </head>
      <body
        className=""
      >
        <Loader />
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
