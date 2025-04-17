import type { Metadata } from "next";
import "./globals.css";
import "./main.scss";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from './providers';
import Loader from './components/Loader';
import CookieConsent from './components/CookieConsent';

export const metadata: Metadata = {
  title: "Devkalm - Software Development Company",
  description: "Devkalm is a software development company that develops websites, web applications, and mobile applications tailored to your business needs.",
  keywords: "software development, web development, mobile app development, Devkalm, business solutions, web applications, web development company, mobile app development company, glasgow, scotland, edinburgh, alloa, stirling, falkirk, scotland, devkalm, custom software, wordpress, shopify, new website, start-up, mobile, international web development, internationally, business solutions",
  authors: [{ name: "Devkalm Ltd" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Devkalm" />
        <meta name="description" content="Devkalm is a software development company that develops websites, web applications, and mobile applications tailored to your business needs." />
        <meta name="keywords" content="software development, web development, mobile app development, Devkalm, business solutions, web applications" />
        <meta name="author" content="Devkalm Ltd" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Devkalm - Software Development Company" />
        <meta property="og:description" content="Devkalm specializes in building websites, web applications, and mobile applications for businesses and individuals." />
        <meta property="og:url" content="https://devkalm.com" />
        <meta property="og:image" content="https://devkalm.com/images/og-image.png" />
        <meta property="og:site_name" content="Devkalm" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Devkalm - Software Development Company" />
        <meta name="twitter:description" content="Devkalm specializes in building websites, web applications, and mobile applications for businesses and individuals." />
        <meta name="twitter:image" content="https://devkalm.com/images/og-image.png" />
        <meta name="twitter:site" content="@devkalm" />
        <meta name="twitter:creator" content="@devkalm" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />

        {/* Additional Metadata */}
        <meta name="theme-color" content="#3273dc" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Devkalm" />
        <meta name="msapplication-TileColor" content="#3273dc" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      </head>
      <body>
        <Loader />
        <Providers>{children}</Providers>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}