"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(3);

  const faqs: FAQItem[] = [
    {
      question: "How do I get started with Arzfy?",
      answer:
        "Getting started with Arzfy is simple. First, create an account by signing up with your email address. Then, complete the verification process to ensure your account security. Once verified, you can start exploring our features and begin trading on the platform.",
    },
    {
      question: "What are the system requirement?",
      answer:
        "Arzfy works on most modern devices. For desktop, you need Windows 10 or later, macOS 10.14 or later, or a modern Linux distribution. For mobile, iOS 12 or later and Android 8.0 or later are supported. A stable internet connection is recommended for the best experience.",
    },
    {
      question: "Can I migrate from another exchange platform?",
      answer:
        "Yes, you can migrate from other exchange platforms. We provide migration tools and support to help you transfer your trading history and account data. Contact our support team for assistance with the migration process.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, debit cards, bank transfers, and popular cryptocurrencies. All transactions are processed securely through our encrypted payment gateway. For specific payment options available in your region, please check our payment methods page.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period for new users. During the trial, you can explore all features and get a feel for the platform. The trial period typically lasts for 14 days, giving you plenty of time to evaluate our services.",
    },
    {
      question: "How secure is Arzfy?",
      answer:
        "Security is our top priority. We use industry-leading encryption, two-factor authentication, and regular security audits to protect your data and funds. All transactions are monitored 24/7, and we follow strict compliance standards to ensure your information remains safe.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely! You can upgrade or downgrade your subscription plan at any time. Changes to your plan will be reflected in your next billing cycle. If you upgrade, you'll get immediate access to the new features. If you downgrade, the changes will take effect at the start of the next billing period.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support through multiple channels. Our support team is available 24/7 via live chat, email, and phone. We also provide extensive documentation, video tutorials, and a knowledge base to help you find answers to common questions quickly.",
    },
  ];

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gradient-to-br from-[#FFF9F0] to-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[50px] shadow-sm border border-gray-100 overflow-hidden "
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
      </div>
    </section>
  );
}

