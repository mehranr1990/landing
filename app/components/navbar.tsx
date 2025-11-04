import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 md:px-16 lg:px-24 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Arzfy</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-teal-500 font-medium transition">
            Home
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-teal-500 font-medium transition">
            Pricing
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-teal-500 font-medium transition">
            Services
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-500 font-medium transition">
            About us
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-teal-500 font-medium transition">
            FAQ
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-teal-500 font-medium transition">
            Blog
          </Link>
          <Link href="/licensing" className="text-gray-700 hover:text-teal-500 font-medium transition">
            Licensing
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold px-6 py-2 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

