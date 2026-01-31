"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SecurityDataPrivacy() {
  const t = useTranslations("securityDataPrivacy");

  return (
    <section className="py-10 px-6 md:px-16 lg:px-24 mb-10">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-[#666666] max-w-md mx-auto">
            {t("description")}
          </p>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* SSL/TLS Encryption Card */}
          <div className="bg-white rounded-4xl border border-gray-200 p-8 flex py-12  items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="flex-2">
              <div className="w-28 h-28 rounded-full bg-[#F8F8F0] flex items-center justify-center">
                <Image
                  src="/icons/card-coin.png"
                  alt="Mission Icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex-2 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-center text-gray-900 mb-2">
                {t("sslEncryption.title")}
              </h3>
              <p className="text-sm text-[#666666] text-center leading-relaxed">
                {t("sslEncryption.description")}
              </p>
            </div>
          </div>
          {/* GDPR Compliant Card */}
          <div className="bg-white rounded-4xl border border-gray-200 p-8 flex py-12  items-center gap-4 hover:shadow-lg transition-shadow">
            <div className="flex-2">
              <div className="w-28 h-28 rounded-full bg-[#F8F8F0] flex items-center justify-center">
                <Image
                  src="/icons/bitcoin-card.png"
                  alt="Mission Icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="flex-2 flex flex-col items-center justify-center">
              <h3 className="text-lg font-bold text-center text-gray-900 mb-2">
                {t("gdprCompliant.title")}
              </h3>
              <p className="text-sm text-[#666666] text-center leading-relaxed">
                {t("gdprCompliant.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

