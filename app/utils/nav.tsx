"use client";
import "../globals.css";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="border-1 border-gray-700 h-16 flex items-center relative">
      <div className="h-full flex items-center aspect-[2.5] relative min-w-[80px] max-w-[250px] border-r border-gray-700">
        <Image
          src="/images/Light_Logo_Full_400.png"
          alt="Logo"
          fill
          className="border-1 border-gray-700 object-contain"
          sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 250px"
          priority
        />
      </div>
      {/* Nav links for desktop */}
      <ul className="hidden md:flex h-full w-full divide-x divide-gray-700">
        {navLinks.map((link, idx) => (
          <li
            key={link.href}
            className={`h-full flex items-center justify-center px-6${
              idx === navLinks.length - 1 ? " border-r border-gray-700" : ""
            }`}
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden p-2 ml-auto"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation menu"
      >
        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-700"></span>
      </button>
      {/* Dropdown menu for mobile */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col md:hidden z-50">
          {navLinks.map((link) => (
            <li key={link.href} className="px-6 py-3">
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
