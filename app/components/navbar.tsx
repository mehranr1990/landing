"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const isActive = (path: string): boolean => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#F8F8F0] border-b border-gray-100 px-6 md:px-16 lg:px-24 py-4">
      <div className="mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
         <Image src="/logo/logo.png" alt="logo" width={155} height={50} />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center xl:gap-16 gap-6">
          <Link
            href="/"
            className={`font-medium transition ${
              isActive("/")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("home")}
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition ${
              isActive("/pricing")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("pricing")}
          </Link>
          <Link
            href="/services"
            className={`font-medium transition ${
              isActive("/services")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("services")}
          </Link>
          <Link
            href="/about"
            className={`font-medium transition ${
              isActive("/about")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/faq"
            className={`font-medium transition ${
              isActive("/faq")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("faq")}
          </Link>
          <Link
            href="/blog"
            className={`font-medium transition ${
              isActive("/blog")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("blog")}
          </Link>
          <Link
            href="/licensing"
            className={`font-medium transition ${
              isActive("/licensing")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            {t("licensing")}
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/login"
            className="rounded-full text-center bg-[#0EAA9A] hover:bg-teal-500 text-white   w-[150px] h-[50px] flex items-center justify-center"
          >
            {t("login")}
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#FF9D00] hover:bg-orange-400 text-white   w-[150px] h-[50px] flex items-center justify-center "
          >
            {t("signUp")}
          </Link>
        </div>
      </div>
    </nav>
  );
}

