"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  const quickLinks = [
    { name: tCommon("home"), href: "/" },
    { name: tCommon("pricing"), href: "/pricing" },
    { name: tCommon("features"), href: "/services" },
    { name: tCommon("about"), href: "/about" },
  ];

  const resources = [
    { name: tCommon("blog"), href: "/blog" },
    { name: tCommon("faq"), href: "/faq" },
    { name: tCommon("licensing"), href: "/licensing" },
    { name: tCommon("services"), href: "/support" },
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
    <footer className="bg-[#2D2D2C] text-[#807F7A">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-16 py-16">
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
            <p className="text-[#807F7A] text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4 md:mt-6 flex flex-col items-center justify-center">
            <h3 className="text-white font-bold text-lg">{t("quickLinks")}</h3>
            <ul className="space-y-2 ">
              {quickLinks.map((link) => (
                <li key={link.name} className="ml-[-45px]">
                  <Link
                    href={link.href}
                    className="text-[#807F7A] hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4 md:mt-6 flex flex-col items-center justify-center">
            <h3 className="text-white font-bold text-lg">{t("resources")}</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name} className="ml-[-30px]">
                  <Link
                    href={resource.href}
                    className="text-[#807F7A] hover:text-white transition-colors text-sm"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Column */}
          <div className="space-y-4 md:mt-6">
            <h3 className="text-white font-bold text-lg">{t("followUs")}</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-[#3B3B38]  flex items-center justify-center hover:bg-gray-600 hover:border-gray-500 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-16">
          <div className="flex flex-col justify-between items-center gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-2 text-[#807F7A]">
              <Link
                href="/learn-more"
                className="hover:text-white transition-colors"
              >
                {tCommon("learnMore")}
              </Link>
              <span className="text-[#807F7A]">|</span>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                {tCommon("privacyPolicy")}
              </Link>
              <span className="text-[#807F7A]">|</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                {tCommon("termsOfUse")}
              </Link>
            </div>
            <p className="text-[#807F7A]">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

