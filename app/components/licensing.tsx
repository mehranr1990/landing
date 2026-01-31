"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Licensing() {
  const t = useTranslations("licensing");

  return (
    <section className="py-10 ">
      <div className="mx-auto ">
        {/* Header Section */}
        <div className="text-center my-20 ">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-[#666666]">
            {t("subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#F8F8F1] w-full  py-12 px-6 md:px-22 lg:px-26 rounded-lg ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo Section */}
            <div className="flex justify-center h-full items-center lg:justify-center">
              <div className="rounded-lg p-8 flex items-center justify-center w-[400px] h-[150px]">
                <Image
                  src="/logo/logobig.png"
                  alt="Arzfy Logo"
                  width={400}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Company Information Section */}
            <div className="space-y-6 max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {t("companyInfo.title")}
              </h2>
              <p className="text-[#666666] leading-relaxed">
                {t("companyInfo.description")}
              </p>
              <div className=" pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[#666666] ">
                    {t("companyInfo.companyname")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[#666666] ">
                    {t("companyInfo.registration")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[#666666] ">
                    {t("companyInfo.headquarters")}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[#666666] ">
                    {t("companyInfo.established")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

