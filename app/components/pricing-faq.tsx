"use client";

import { useState } from "react";
import ContactSupport from "./contact-support";
import { useTranslations } from "next-intl";

type FAQItem = {
  question: string;
  answer: string;
};

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>();
  const t = useTranslations("pricing.faq");

  const faqs: FAQItem[] = t.raw("items") as FAQItem[];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
        </div>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[50px] shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-gray-700 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
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

        {/* Contact Section */}
        <ContactSupport />
      </div>
    </section>
  );
}

