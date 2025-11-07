"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
            Home
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition ${
              isActive("/pricing")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/services"
            className={`font-medium transition ${
              isActive("/services")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`font-medium transition ${
              isActive("/about")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            About us
          </Link>
          <Link
            href="/faq"
            className={`font-medium transition ${
              isActive("/faq")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className={`font-medium transition ${
              isActive("/blog")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/licensing"
            className={`font-medium transition ${
              isActive("/licensing")
                ? "text-[#0EAA9A] font-semibold"
                : "text-black hover:text-teal-500"
            }`}
          >
            Licensing
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full text-center bg-[#0EAA9A] hover:bg-teal-500 text-white   w-[150px] h-[50px] flex items-center justify-center"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#FF9D00] hover:bg-orange-400 text-white   w-[150px] h-[50px] flex items-center justify-center "
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

