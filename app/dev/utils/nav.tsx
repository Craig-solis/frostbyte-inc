"use client";
import "../../globals.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftNavLinks = [
    { href: "/dev", label: "_home" },
    { href: "/dev/aboutme", label: "_about-me" },
    { href: "/dev/projects", label: "_projects" },
  ];
  const rightNavLinks = [
    { href: "/dev/contact", label: "_contact-me" },
    { href: "/", label: "_return-main" },
  ];

  const pathname = usePathname();
  return (
    <nav className="h-16 flex relative border-b border-[var(--greyed)]">
      <div className="h-full flex aspect-[2.5] relative min-w-[80px] max-w-[350px] border-r border-[var(--greyed)] w-full p-2">
        <Image
          src="/images/Light_Logo_Full.png"
          alt="Logo"
          fill
          className="flex object-contain object-center"
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 350px"
          priority
        />
      </div>
      {/* Nav links for desktop */}
      <ul className="hidden md:flex h-full w-full items-center">
        {leftNavLinks.map((link) => (
          <li
            key={link.href}
            className="h-full flex items-center justify-center px-6 border-r border-[var(--greyed)]"
          >
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[var(--text-active)] font-bold text-glow-active"
                  : "text-[var(--text-primary)] hover:text-[var(--text-active)] transition-colors"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
        {rightNavLinks.map((link, index) => (
          <li
            key={link.href}
            className={`h-full flex items-center justify-center px-6 ${
              index === 0
                ? "border-l border-[var(--greyed)] ml-auto"
                : "border-l border-[var(--greyed)]"
            }`}
          >
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? "text-[var(--text-active)] font-bold text-glow-active"
                  : "text-[var(--text-primary)] hover:text-[var(--text-active)] transition-colors"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden p-2 ml-auto relative h-[90%] w-[10%] flex flex-col justify-center items-center"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`absolute w-[80%] h-0.5 bg-[var(--greyed)] transition-all duration-300 ${
            menuOpen ? "rotate-45 top-6" : "top-5"
          }`}
          style={{ right: "1.15rem" }}
        ></span>
        <span
          className={`absolute w-[80%] h-0.5 bg-[var(--greyed)] transition-all duration-300 ${
            menuOpen ? "opacity-0 left-6" : "top-7"
          }`}
          style={{ right: "1.15rem" }}
        ></span>
        <span
          className={`absolute w-[80%] h-0.5 bg-[var(--greyed)] transition-all duration-300 ${
            menuOpen ? "-rotate-45 top-6" : "top-9"
          }`}
          style={{ right: "1.15rem" }}
        ></span>
      </button>
      {/* Dropdown menu for mobile with smooth slide-down */}
      <ul
        className={`absolute top-full left-0 w-full h-screen bg-[var(--dark-bkgd)] shadow-md flex flex-col md:hidden z-50 transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
          width: "100vw",
        }}
      >
        {leftNavLinks.map((link) => (
          <li key={link.href} className="px-6 py-3">
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? "text-[var(--text-active)] font-bold text-glow-active"
                  : "text-[var(--text-primary)] hover:text-[var(--text-active)] transition-colors"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
        {rightNavLinks.map((link) => (
          <li key={link.href} className="px-6 py-3">
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === link.href
                  ? "text-[var(--text-active)] font-bold text-glow-active"
                  : "text-[var(--text-primary)] hover:text-[var(--text-active)] transition-colors"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
