"use client";

import { useState } from "react";
import ContactSupport from "./contact-support";
import { useTranslations } from "next-intl";

type Category = {
  id: string;
  name: string;
};

type FAQItem = {
  question: string;
  answer: string;
  category: string;
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("General");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const t = useTranslations("faqPage");
  const tCommon = useTranslations("common");

  const categories: Category[] = [
    { id: "General", name: t("categories.general") },
    { id: "Pricing", name: t("categories.pricing") },
    { id: "Technical", name: t("categories.technical") },
    { id: "Account", name: t("categories.account") },
    { id: "Security", name: t("categories.security") },
    { id: "Support", name: t("categories.support") },
  ];

  const faqs: FAQItem[] = (t.raw("items") as FAQItem[]) || [];

  const toggleFAQ = (question: string): void => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "General" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-[#666666]">
              {t("subtitle")}
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder={tCommon("search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 my-16 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestion(null);
                }}
                className={`px-6 py-3 text-black rounded-2xl font-medium transition-colors w-[150px] h-[50px] ${
                  activeCategory === category.id
                    ? "bg-[#F8F8F1] "
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {t("noResults")}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[50px] shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.question)}
                    className="w-full flex items-center justify-between py-5 px-10 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="text-2xl font-light text-gray-700 flex-shrink-0">
                      {openQuestion === faq.question ? "−" : "+"}
                    </span>
                  </button>
                  {openQuestion === faq.question && (
                    <div className="px-6 pb-6">
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Contact Support Section */}
          <div className="mt-16">
            <ContactSupport />
          </div>
        </div>
      </section>
    </>
  );
}

