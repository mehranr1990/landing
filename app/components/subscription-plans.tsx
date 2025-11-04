"use client";

import { useState } from "react";

type PlanPeriod = "1month" | "3month" | "1year";

export default function SubscriptionPlans() {
  const [selectedPeriod, setSelectedPeriod] = useState<PlanPeriod>("1month");

  const plans = [
    {
      name: "ECONOMIC",
      price: "$79",
      period: "per month",
      features: [
        "1 user (economist)",
        "100 counterparty account",
        "Basic reports",
        "Ticket support",
        "+$50 per additional user",
      ],
      isHighlighted: false,
    },
    {
      name: "SUPER GOLD",
      price: "$499",
      period: "per month",
      features: [
        "Unlimited users",
        "Unlimited counterparty",
        "All reports + Analysis tools",
        "Phone + Ticket support",
        "+$50 per additional user",
      ],
      isHighlighted: true,
    },
    {
      name: "PROFESSIONAL",
      price: "$199",
      period: "per month",
      features: [
        "3 user (economist)",
        "Unlimited counterparty",
        "Basic + Advanced reports",
        "Ticket support",
        "+$30 per additional user",
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
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedPeriod("1month")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedPeriod === "1month"
                ? "bg-teal-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            1 Month
          </button>
          <button
            onClick={() => setSelectedPeriod("3month")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedPeriod === "3month"
                ? "bg-teal-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            3 Month
          </button>
          <button
            onClick={() => setSelectedPeriod("1year")}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              selectedPeriod === "1year"
                ? "bg-teal-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            1 Year
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col">
              <div
                className={`rounded-3xl overflow-hidden mb-6 ${
                  plan.isHighlighted
                    ? "shadow-2xl transform md:scale-105"
                    : "shadow-lg hover:shadow-xl transition-shadow"
                }`}
              >
                <div
                  className={`p-8 ${
                    plan.isHighlighted
                      ? "bg-gradient-to-br from-orange-300 via-pink-300 to-purple-400 text-white"
                      : "bg-white text-gray-900"
                  }`}
                >
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3
                      className={`text-xs font-bold tracking-wider mb-3 uppercase ${
                        plan.isHighlighted ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold">{plan.price}</span>
                    </div>
                    <p
                      className={`text-sm ${
                        plan.isHighlighted ? "text-white/90" : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <span
                          className={`mt-1 flex-shrink-0 ${
                            plan.isHighlighted ? "text-white" : "text-gray-400"
                          }`}
                        >
                          •
                        </span>
                        <span
                          className={
                            plan.isHighlighted ? "text-white/95" : "text-gray-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Bottom Border for Highlighted Plan */}
                {plan.isHighlighted && (
                  <div className="h-3 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500" />
                )}
              </div>

              {/* Select Button - Outside the card */}
              <button
                className="w-full py-3 rounded-full font-semibold transition-all bg-gradient-to-r from-yellow-400 to-orange-400 text-white hover:from-yellow-500 hover:to-orange-500 shadow-lg"
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

