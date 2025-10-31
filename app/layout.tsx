import type { Metadata } from "next";
import { Source_Code_Pro, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrostByte Inc. - Professional IT Services",
  description:
    "FrostByte Inc. provides professional IT services, including web development, custom software solutions, and cyber security consulting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/FrostByte_logo_ABV.png"
        />
      </head>
      <body
        className={`${sourceCodePro.variable} ${pixelifySans.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1 w-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
