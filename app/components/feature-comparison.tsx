"use client";

import { useTranslations } from "next-intl";

export default function FeatureComparison() {
  const t = useTranslations("pricing.featureComparison");

  const features = [
    {
      feature: t("numberOfUsers"),
      economic: "1",
      popular: "3+",
      superGold: t("available"),
    },
    {
      feature: t("counterparty"),
      economic: "150",
      popular: t("available"),
      superGold: t("available"),
    },
    {
      feature: t("basicReports"),
      economic: t("available"),
      popular: t("available"),
      superGold: t("available"),
    },
    {
      feature: t("advancedReports"),
      economic: "-",
      popular: "-",
      superGold: t("available"),
    },
    {
      feature: t("financialAnalytics"),
      economic: "-",
      popular: "-",
      superGold: t("available"),
    },
    {
      feature: t("support"),
      economic: t("ticket"),
      popular: t("ticketCall"),
      superGold: t("exclusive"),
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
        </div>

        
          <div className="overflow-x-auto">

            <table className="w-full rounded-2xl mb-4">
              <thead>
                <tr className="bg-[#C2B673]">
                  <th className="px-14 py-7 text-left  text-white font-semibold rounded-s-3xl">
                    {t("feature")}
                  </th>
                  <th className="px-6 py-7 text-center text-white font-semibold">
                    {t("economic")}
                  </th>
                  <th className="px-6 py-7 text-center text-white font-semibold">
                    {t("popular")}
                  </th>
                  <th className="px-6 py-7 text-center text-white font-semibold rounded-e-3xl">
                    {t("superGold")}
                  </th>
                </tr>
              </thead>
            </table>
            <div className="rounded-3xl border-3 border-[#E9E9E0] overflow-hidden">
            <table className="w-full">

              <tbody>
                {features.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-[#F8F8F0]"
                      }`}
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium ">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.economic}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.popular}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.superGold}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        
        </div>
      </div>
    </section>
  );
}

