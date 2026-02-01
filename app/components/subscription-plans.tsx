"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

type PlanPeriod = "1month" | "3month" | "1year";

type PlanType = "economic" | "professional" | "superGold";

interface PricingStructure {
  [key: string]: {
    [key in PlanPeriod]: { price: string; period: string };
  };
}

export default function SubscriptionPlans() {
  const [selectedPeriod, setSelectedPeriod] = useState<PlanPeriod>("1month");
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("professional");
  const t = useTranslations("subscriptionPlans");

  const pricing: PricingStructure = {
    economic: {
      "1month": { price: "$79", period: t("perMonth") },
      "3month": { price: "$213", period: t("perThreeMonths") },
      "1year": { price: "$758", period: t("perYear") },
    },
    professional: {
      "1month": { price: "$199", period: t("perMonth") },
      "3month": { price: "$537", period: t("perThreeMonths") },
      "1year": { price: "$1910", period: t("perYear") },
    },
    superGold: {
      "1month": { price: "$499", period: t("perMonth") },
      "3month": { price: "$1347", period: t("perThreeMonths") },
      "1year": { price: "$4788", period: t("perYear") },
    },
  };

  const plans = [
    {
      name: t("economic.name"),
      planType: "economic" as PlanType,
      features: t.raw("economic.features") as string[],
      isHighlighted: false,
    },
    {
      name: t("professional.name"),
      planType: "professional" as PlanType,
      features: t.raw("professional.features") as string[],
      isHighlighted: true,
    },
    {
      name: t("superGold.name"),
      planType: "superGold" as PlanType,
      features: t.raw("superGold.features") as string[],
      isHighlighted: false,
    },
  ];
  

  return (
    <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t("title")}
          </h2>
          <p className="text-gray-600">{t("subtitle")}</p>
        </div>

        {/* Period Tabs */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={() => setSelectedPeriod("1month")}
            className={`px-8 py-3 rounded-lg w-[189px] h-[60px] text-center font-semibold transition-all ${selectedPeriod === "1month"
              ? "bg-[#0EAA9A] text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            {t("oneMonth")}
          </button>
          <button
            onClick={() => setSelectedPeriod("3month")}
            className={`px-8 py-3 rounded-lg w-[189px] h-[60px] text-center font-semibold transition-all ${selectedPeriod === "3month"
              ? "bg-[#0EAA9A] text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            {t("threeMonth")}
          </button>
          <button
            onClick={() => setSelectedPeriod("1year")}
            className={`px-8 py-3 rounded-lg w-[189px] h-[60px] text-center font-semibold transition-all ${selectedPeriod === "1year"
              ? "bg-[#0EAA9A] text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            {t("oneYear")}
          </button>
        </div>

          <div className="max-w-7xl mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setSelectedPlan(plan.planType)}
                >
                  <div
                    className={`rounded-4xl shadow-lg w-full max-w-sm p-4 pt-14 transition-all ${
                      selectedPlan === plan.planType
                        ? "bg-gradient-to-bl from-[#D180F9] to-[#FF9D00]"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          selectedPlan === plan.planType
                            ? "text-white"
                            : "text-[#3D3D3D]"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span
                          className={`text-5xl font-bold ${
                            selectedPlan === plan.planType
                              ? "text-white"
                              : "text-[#3D3D3D]"
                          }`}
                        >
                          {pricing[plan.planType][selectedPeriod].price}
                        </span>
                      </div>
                      <p
                        className={`mb-6 text-sm ${
                          selectedPlan === plan.planType
                            ? "text-white/90"
                            : "text-[#3D3D3D]"
                        }`}
                      >
                        {pricing[plan.planType][selectedPeriod].period}
                      </p>
                    </div>
                    <div
                      className={`rounded-2xl px-10 py-6  ${
                        selectedPlan === plan.planType
                          ? "bg-white/40"
                          : "bg-[#F8F8F0]"
                      }`}
                    >
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className={`flex items-start text-sm ${
                              selectedPlan === plan.planType
                                ? "text-black"
                                : "text-[#807F7A]"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full me-3 mt-2 flex-shrink-0 ${
                                selectedPlan === plan.planType
                                  ? "bg-black"
                                  : "bg-[#807F7A]"
                              }`}
                            ></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* <button className={` bg-orange-400 hover:bg-orange-500 text-white rounded-full transition-colors w-[150px] h-[50px] mx-auto
                    ${plan.isHighlighted ? "mt-20" : "mt-10"}`}>
                    {t("selectPlan")}
                  </button> */}
                </div>
              ))}
          
        
            </div>
        <div className="flex  items-center justify-center">
        <button
            onClick={() => {
              const url = `https://customer.arzfy.com/auth/login?plan=${selectedPlan}&period=${selectedPeriod}`;
              window.location.href = url;
            }}
            className="px-8 py-3 rounded-full w-[150px] mt-10 h-[50px] text-center text-sm transition-all text-white shadow-lg bg-[#FF9D00] hover:opacity-90 cursor-pointer"
          >
          {t("selectPlan")}
          </button>          
        </div>
        </div>
      </div>
    </section>
  );
}

