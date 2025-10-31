import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrostByte Inc. - Professional Web Development Services",
  description:
    "FrostByte Inc. provides professional web development services, custom software solutions, and digital transformation consulting.",
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
        className={`${sourceCodePro.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
