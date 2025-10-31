import type { Metadata } from "next";
import Nav from "./utils/nav";

export const metadata: Metadata = {
  title: "FrostByte Dev",

  description: "Portfolio for FrostByte Web Development",
};

export default function DevLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
}
