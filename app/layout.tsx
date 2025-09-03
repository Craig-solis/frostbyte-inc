import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Nav from "./utils/nav";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrostByte Dev",

  description: "Portfolio for FrostByte Web Development",
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
        className={`${sourceCodePro.variable} antialiased border-1 border-gray-700 min-h-screen flex flex-col`}
      >
        <Nav />
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-gray-700 py-4">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} FrostByte Dev. All rights
              reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
