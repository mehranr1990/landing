"use client";

import { useTranslations } from "next-intl";

export default function FeatureComparison() {
  const t = useTranslations("pricing.featureComparison");

  const features = [
    {
      feature: t("numberOfUsers"),
      economic: "1",
      popular: "3+",
      superGold: t("unlimited"),
    },
    {
      feature: t("counterparty"),
      economic: "150",
      popular: t("unlimited"),
      superGold: t("unlimited"),
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
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full rounded-2xl mb-4">
              <thead>
                <tr className="bg-[#C2B673]">
                  <th className="px-16 py-7 text-left text-white font-semibold rounded-s-3xl">
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
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-[#F8F8F0]"
                      }`}
                    >
                      <td className="px-6 py-4 text-gray-800 font-medium">
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

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {features.map((row, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 border-[#E9E9E0] overflow-hidden ${
                index % 2 === 0 ? "bg-white" : "bg-[#F8F8F0]"
              }`}
            >
              <div className="bg-[#C2B673] px-4 py-3">
                <h3 className="text-white font-semibold text-base">
                  {row.feature}
                </h3>
              </div>
              <div className="px-4 py-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {t("economic")}:
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {row.economic}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {t("popular")}:
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {row.popular}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {t("superGold")}:
                  </span>
                  <span className="text-gray-800 font-semibold">
                    {row.superGold}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

