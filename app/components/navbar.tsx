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
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium transition ${
              isActive("/")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition ${
              isActive("/pricing")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/services"
            className={`font-medium transition ${
              isActive("/services")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`font-medium transition ${
              isActive("/about")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            About us
          </Link>
          <Link
            href="/faq"
            className={`font-medium transition ${
              isActive("/faq")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className={`font-medium transition ${
              isActive("/blog")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/licensing"
            className={`font-medium transition ${
              isActive("/licensing")
                ? "text-teal-500 font-semibold"
                : "text-gray-700 hover:text-teal-500"
            }`}
          >
            Licensing
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full text-center bg-teal-500 hover:bg-teal-600 text-white   w-[150px] h-[50px] flex items-center justify-center"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-orange-400 hover:bg-orange-500 text-white   w-[150px] h-[50px] flex items-center justify-center "
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

