"use client";

import { useTranslations } from "next-intl";

export default function PricingHero() {
  const t = useTranslations("pricing.hero");

  return (
    <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl md:text-5xl  text-gray-900 mb-4">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-[#666666]">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}

