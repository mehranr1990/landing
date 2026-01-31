"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ownloadApp() {
  const t = useTranslations("downloadApp");
  const socialIcons = [
    {
      name: "Instagram",
      icon: (
        <Image src="/icons/image30.png" alt="instagram" width={27} height={30} />
      ),
    },
    {
      name: "Facebook",
      icon: (

        <Image src="/icons/image29.png" alt="instagram" width={26} height={26} />
      ),
    },
    {
      name: "WhatsApp",
      icon: (

        <Image src="/icons/image28.png" alt="instagram" width={35} height={34} />
      ),
    },
    {
      name: "YouTube",
      icon: (

        <Image src="/icons/image27.png" alt="instagram" width={26} height={29} />
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1   md:grid-cols-2 bg-gradient-download-app bg-[ #FFAF1B]">

        <div className="relative md:ms-30 p-12 md:p-16 flex items-center justify-center overflow-hidden">
          <Image src="/background/mockup.png" alt="download-app" width={400} height={400} />
        </div>

        {/* Right Side - Download Section */}
        <div className="relative md:me-30 p-12 md:p-16 flex flex-col mt-10 items-center justify-center text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl  mx-14 text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-white/80 mb-12 max-w-[280px] text-sm">
              {t("description")}
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 ">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-14 h-14 rounded-full bg-white/75   flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Download Button */}
            <a
              href="#"
              className="inline-block px-10 py-3 my-10 bg-[#FF9D00] text-white  rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              {t("downloadApp")}
            </a>
          </div>
        </div>
      </div>
    </section >
  );
}

