"use client";

import { useState } from "react";
import ContactSupport from "./contact-support";

type FAQItem = {
  question: string;
  answer: string;
};

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>();

  const faqs: FAQItem[] = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, debit cards, bank transfers, and popular cryptocurrencies. All transactions are processed securely through our encrypted payment gateway.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period for new users. During the trial, you can explore all features and get a feel for the platform. The trial period typically lasts for 14 days.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer refunds within 30 days of purchase if you're not satisfied with our service. Please contact our support team for assistance with refund requests.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing FAQs
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

