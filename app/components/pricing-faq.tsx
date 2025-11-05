"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

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
    <section className="bg-[#FFF9F0] py-16 px-6 md:px-16 lg:px-24">
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
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">Contact our support team</p>

          <div className="max-w-2xl mx-auto space-y-4">
            <textarea
              placeholder="Write your message..."
              className="w-full bg-white h-32 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
              rows={5}
            />
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full px-8 py-3 transition-colors w-full md:w-auto min-w-[150px]">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

