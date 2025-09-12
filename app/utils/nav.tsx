"use client";
import "../globals.css";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftNavLinks = [
    { href: "/", label: "_home" },
    { href: "/aboutme", label: "_about-me" },
    { href: "/projects", label: "_projects" },
  ];
  const rightNavLink = { href: "/contact", label: "_contact-me" };

  const pathname = usePathname();
  return (
    <nav className="h-16 flex relative border-b border-[var(--greyed)]">
      <div className="h-full flex aspect-[2.5] relative min-w-[80px] max-w-[350px] border-r border-[var(--greyed)] w-[25%]">
        <Image
          src="/images/Light_Logo_Full.png"
          alt="Logo"
          fill
          className="flex object-contain object-left"
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
                  : "text-[var(--text-primary)] hover:[var(--text-active)]"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li
          key={rightNavLink.href}
          className="h-full flex items-center justify-center px-6 border-l border-[var(--greyed)] ml-auto"
        >
          <Link
            href={rightNavLink.href}
            className={
              pathname === rightNavLink.href
                ? "text-[var(--text-active)] font-bold text-glow-active"
                : "text-[var(--text-primary)] hover:[var(--text-active)]"
            }
          >
            {rightNavLink.label}
          </Link>
        </li>
      </ul>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden p-2 ml-auto"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className="block w-6 h-0.5 bg-[var(--greyed)] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[var(--greyed)] mb-1"></span>
        <span className="block w-6 h-0.5 bg-[var(--greyed)]"></span>
      </button>
      {/* Dropdown menu for mobile with smooth slide-down */}
      <ul
        className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col md:hidden z-50 transition-all duration-300 overflow-hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          // fallback for browsers that don't support max-h-96
          transitionProperty: "max-height, opacity",
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
                  : "text-[var(--text-primary)] hover:[var(--text-active)]"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li key={rightNavLink.href} className="px-6 py-3">
          <Link
            href={rightNavLink.href}
            onClick={() => setMenuOpen(false)}
            className={
              pathname === rightNavLink.href
                ? "text-blue-500 font-bold"
                : "text-gray-300 hover:text-blue-400"
            }
          >
            {rightNavLink.label}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
