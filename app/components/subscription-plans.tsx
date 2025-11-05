"use client";

import { useState } from "react";

type PlanPeriod = "1month" | "3month" | "1year";

export default function SubscriptionPlans() {
  const [selectedPeriod, setSelectedPeriod] = useState<PlanPeriod>("1month");

  const plans = [
    {
      name: "ECONIMIC",
      price: "$79",
      period: "per month",
      features: [
        "1 user (expandable)",
        "150 counterparty account",
        "Basic reports",
        "Ticket support",
        "+$59 per additional user",
      ],
      isHighlighted: false,
    },
    {
      name: "SUPER GOLD",
      price: "$499",
      period: "per month",
      features: [
        "Unlimited user",
        "Unlimited counterparty",
        "All reports + Analysis tools",
        "Phone + Ticket support",
        "+$59 per additional user",
      ],
      isHighlighted: true,
    },
    {
      name: "PROFESSIONAL",
      price: "$199",
      period: "per month",
      features: [
        "3 user (expandable)",
        "Unlimited counterparty",
        "Basic + Advanced reports",
        "Ticket support",
        "+$59 per additional user",
      ],
      isHighlighted: false,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#FFF9F0] to-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Subscription Plans
          </h2>
          <p className="text-gray-600">Choose your best plan</p>
        </div>

        {/* Period Tabs */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={() => setSelectedPeriod("1month")}
            className={`px-8 py-3 rounded-lg w-[189px] h-[60px] text-center font-semibold transition-all ${selectedPeriod === "1month"
              ? "bg-teal-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            1 Month
          </button>
          <button
            onClick={() => setSelectedPeriod("3month")}
            className={`px-8 py-3 rounded-lg w-[189px] h-[60px] text-center font-semibold transition-all ${selectedPeriod === "3month"
              ? "bg-teal-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            3 Month
          </button>
          <button
            onClick={() => setSelectedPeriod("1year")}
            className={`px-8 py-3 rounded-lg w-[189px] h-[60px] text-center font-semibold transition-all ${selectedPeriod === "1year"
              ? "bg-teal-500 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
          >
            1 Year
          </button>
        </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`rounded-3xl shadow-lg w-full max-w-sm p-8 ${
                      plan.isHighlighted
                        ? "bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400 text-white"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <h3
                        className={`text-2xl font-bold mb-4 ${
                          plan.isHighlighted ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span
                          className={`text-5xl font-bold ${
                            plan.isHighlighted ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {plan.price}
                        </span>
                      </div>
                      <p
                        className={`mb-6 text-sm ${
                          plan.isHighlighted
                            ? "text-white/90"
                            : "text-gray-600"
                        }`}
                      >
                        {plan.period}
                      </p>
                    </div>
                    <div
                      className={`rounded-xl p-6 mb-6 ${
                        plan.isHighlighted
                          ? "bg-white/20"
                          : "bg-[#F5F3ED]"
                      }`}
                    >
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className={`flex items-start text-sm ${
                              plan.isHighlighted
                                ? "text-white"
                                : "text-gray-800"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                                plan.isHighlighted
                                  ? "bg-white"
                                  : "bg-gray-800"
                              }`}
                            ></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="mt-6 bg-orange-400 hover:bg-orange-500 text-white rounded-full transition-colors w-[150px] h-[50px] mx-auto">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}

