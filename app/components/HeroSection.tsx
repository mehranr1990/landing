"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden  text-white">
      {/* Decorative background elements */}


      {/* Main Hero Content */}
      <div dir="ltr" className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-30" style={{ backgroundImage: 'url(/background/hero.jpg)', backgroundSize: 'cover', }}>

        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-start gap-12">
          <div className="max-w-3xl ">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                <span className="text-yellow-300">{t("title")}</span>
              </h1>

              <p className="mt-6 text-gray-100 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
                {t("subtitle")}
              </p>

              <div className="mt-8 flex flex-col flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#get-started"
                  className="rounded-full bg-[#0EAA9A] hover:bg-teal-500 text-white text-sm  w-[150px] h-[50px] flex items-center justify-center"
                >
                  {t("getStarted")}
                </a>
                <a
                  href="#demo"
                  className="rounded-full border-2 border-white hover:bg-white/10 text-white text-sm  w-[160px] h-[50px] flex items-center justify-center"
                >
                  {t("watchDemo")}
                </a>
              </div>
            </div>

            {/* Illustration Section */}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-[#FFFBF0] text-black py-6">
        <div className="px-6 md:px-16 lg:px-24 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <p className="text-gray-700  md:text-base font-medium">
                {t("uptimeTitle")}
              </p>
              <p className="text-gray-600  md:text-base">
                {t("importTime")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto ">
              {/* Card 1 */}
              <div className="bg-[#F8F8F0] rounded-3xl border-gradient p-8  hover:shadow-xl transition-shadow">
                <div className="flex items-center ">
                  <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FEAD08] to-[#D180F9] bg-clip-text text-transparent mb-2">
                    {t("hundred")}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{t("years")}</p>
                <p className="text-gray-500 text-sm">{t("uptime")}</p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F8F8F0]  rounded-3xl border-gradient p-8  hover:shadow-xl transition-shadow">
                <div className="flex items-center ">
                  <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FEAD08] to-[#D180F9] bg-clip-text text-transparent mb-2">
                    {t("zero")}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{t("realUsers")}</p>
                <p className="text-gray-500 text-sm">{t("trustUs")}</p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#F8F8F0] rounded-3xl border-gradient p-8  hover:shadow-xl transition-shadow">
                <div className="flex items-center ">
                  <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FEAD08] to-[#D180F9] bg-clip-text text-transparent mb-2">
                    {t("min")}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{t("days")}</p>
                <p className="text-gray-500 text-sm">{t("noIncidents")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
