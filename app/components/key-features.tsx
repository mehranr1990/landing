"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function KeyFeatures() {
  const t = useTranslations("keyFeatures");

  const features = [
    {
      title: t("secureTrading"),
      description: t("secureTradingDesc"),
      icon: (
        <Image src="/icons/card-coin.png" alt="support" width={50} height={50} />
      ),
    },
    {
      title: t("fastProcessing"),
      description: t("fastProcessingDesc"),
      icon: (
        <Image src="/icons/bitcoin-card.png" alt="support" width={50} height={50} />
      ),
    },
    {
      title: t("scalableSystem"),
      description: t("scalableSystemDesc"),
      icon: (
        <Image src="/icons/bitcoin-refresh.png" alt="support" width={50} height={50} />
      ),
    },
    {
      title: t("support24"),
      description: t("support24Desc"),
      icon: (
        <Image src="/icons/bitcoin-convert.png" alt="support" width={50} height={50} />
      ),
    },
  ];

  return (
    <section className=" py-8 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t("title")}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-4xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 group"
            >
              {/* Icon */}
              <div className="inline-flex items-center bg-[#F8F8F0] rounded-full p-6 justify-center mb-6 text-orange-400 group-hover:text-orange-500 transition-colors">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] text-gray-600 leading-relaxed ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

