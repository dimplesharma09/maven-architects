"use client";
import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainMenu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  const socialLinks = {
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-[#272727] border-b border-gray-200 shadow-sm">
      {/* ===== TOP SECTION ===== */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img src="./assets/Image/mp-logo-dark.svg" className="w-24" />
          </a>
        </div>

        {/* CENTER: Desktop Nav */}
        <div className="flex flex-col items-center text-center">
          <nav className="hidden md:flex items-center gap-6 text-[15px] font-medium text-white relative">
            {mainMenu.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-[#DEBB70] transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT: Socials */}
        <div className="hidden md:flex items-center gap-3 text-[#DEBB70]">
          <a href={socialLinks.facebook} target="_blank">
            <Facebook className="w-5 h-5" />
          </a>
          <a href={socialLinks.twitter} target="_blank">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={socialLinks.instagram} target="_blank">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={socialLinks.youtube} target="_blank">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden border border-gray-300 rounded-md p-2 text-white"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 text-[15px] font-medium text-gray-800 transition-all duration-300 ${
          mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {mainMenu.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="block hover:text-[#6BA642]"
          >
            {item.name}
          </a>
        ))}

        {/* Mobile Socials */}
        <div className="flex items-center gap-3 mt-4 text-[#6BA642]">
          <a href={socialLinks.facebook} target="_blank">
            <Facebook className="w-5 h-5" />
          </a>
          <a href={socialLinks.twitter} target="_blank">
            <Twitter className="w-5 h-5" />
          </a>
          <a href={socialLinks.instagram} target="_blank">
            <Instagram className="w-5 h-5" />
          </a>
          <a href={socialLinks.youtube} target="_blank">
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
