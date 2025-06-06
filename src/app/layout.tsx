import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-main-sans",
  subsets: ["latin"],
});

const nyghtSerif = localFont({
  src: [
    {
      path: "../../public/font/NyghtSerif-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/font/NyghtSerif-Medium.woff",
      weight: "500",
      style: "medium",
    },
  ],
  display: "swap",
  variable: "--font-nyght-serif",
});

export const metadata: Metadata = {
  title: "SadhuG - Frontend Developer Portfolio",
  description:
    "Portfolio of Sudhansh Singh, a frontend developer specializing in creating accessible and user-friendly web experiences",
  applicationName: "SadhuG Portfolio",
  authors: [{ name: "Sudhansh Singh" }],
  creator: "Sudhansh Singh",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={`${outfitSans.variable} ${nyghtSerif.variable} font-main antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
