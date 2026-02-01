"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const navigationLinks = [
    { href: "/", label: t("home") },
    { href: "/pricing", label: t("pricing") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/faq", label: t("faq") },
    { href: "/blog", label: t("blog") },
    { href: "/licensing", label: t("licensing") },
  ];

  return (
    <nav className="bg-[#F8F8F0] border-b border-gray-100 px-6 md:px-16 lg:px-24 py-1 relative z-50">
      <div className="mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
          <Image src="/logo/logo.png" alt="logo" width={155} height={50} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center text-sm  xl:gap-16 gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                isActive(link.href)
                  ? "text-[#0EAA9A] font-semibold"
                  : "text-black hover:text-teal-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="https://customer.arzfy.com/auth/login"
            className="rounded-full text-center bg-[#0EAA9A] hover:bg-teal-500 text-white w-[120px] h-[36px] flex items-center justify-center"
          >
            {t("login")}
          </Link>
          {/* <Link
            href="/signup"
            className="rounded-full bg-[#FF9D00] hover:bg-orange-400 text-white w-[120px] h-[36px] flex items-center justify-center"
          >
            {t("signUp")}
          </Link> */}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#F8F8F0] border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {/* Mobile Navigation Links */}
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className={`block font-medium transition py-2 ${
                isActive(link.href)
                  ? "text-[#0EAA9A] font-semibold"
                  : "text-black hover:text-teal-500"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Action Buttons */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="block rounded-full text-center bg-[#0EAA9A] hover:bg-teal-500 text-white w-full h-[50px] flex items-center justify-center"
            >
              {t("login")}
            </Link>
            <Link
              href="/signup"
              onClick={closeMobileMenu}
              className="block rounded-full bg-[#FF9D00] hover:bg-orange-400 text-white w-full h-[50px] flex items-center justify-center"
            >
              {t("signUp")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

