import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Licensing", href: "/licensing" },
    { name: "Support", href: "/support" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: <Image src="/icons/Social.png" alt="Facebook" width={20} height={20} />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <Image src="/icons/Social1.png" alt="Instagram" width={20} height={20} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <Image src="/icons/Social2.png" alt="LinkedIn" width={20} height={20} />,

    },
    {
      name: "WhatsApp",
      href: "#",
      icon: <Image src="/icons/Social3.png" alt="WhatsApp" width={20} height={20} />,
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 py-10 ">
          {/* Brand Column */}
          <div className="space-y-4" >
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo/logo.png"
                alt="Arzfy Logo"
                width={194}
                height={66}
                className="object-contain"
              />

            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 md:mt-6 flex flex-col items-center justify-center">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 ">
              {quickLinks.map((link) => (
                <li key={link.name} className="ml-[-45px]">
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4 md:mt-6 flex flex-col items-center justify-center">
            <h3 className="text-white font-bold text-lg">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name} className="ml-[-30px]">
                  <Link
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4 md:mt-6">
            <h3 className="text-white font-bold text-lg">Follow Us</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center hover:bg-gray-600 hover:border-gray-500 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-2 text-gray-400">
              <Link
                href="/learn-more"
                className="hover:text-white transition-colors"
              >
                Learn More
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </div>
            <p className="text-gray-400">
              © 2025 Arzfy. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

