"use client";

import { useState } from "react";
import ContactSupport from "./contact-support";

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

  const categories: Category[] = [
    { id: "General", name: "General" },
    { id: "Pricing", name: "Pricing" },
    { id: "Technical", name: "Technical" },
    { id: "Account", name: "Account" },
    { id: "Security", name: "Security" },
    { id: "Support", name: "Support" },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How do I get started with Arzfy?",
      answer:
        "Getting started with Arzfy is simple. First, create an account by signing up with your email address. Then, complete the verification process to ensure your account security. Once verified, you can start exploring our features and begin trading on the platform.",
      category: "General",
    },
    {
      question: "What are the system requirements?",
      answer:
        "Arzfy works on most modern devices. For desktop, you need Windows 10 or later, macOS 10.14 or later, or a modern Linux distribution. For mobile, iOS 12 or later and Android 8.0 or later are supported. A stable internet connection is recommended for the best experience.",
      category: "Technical",
    },
    {
      question: "Can I migrate from another exchange platform?",
      answer:
        "Yes, you can migrate from other exchange platforms. We provide migration tools and support to help you transfer your trading history and account data. Contact our support team for assistance with the migration process.",
      category: "Account",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit cards, debit cards, bank transfers, and popular cryptocurrencies. All transactions are processed securely through our encrypted payment gateway. For specific payment options available in your region, please check our payment methods page.",
      category: "Pricing",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a free trial period for new users. During the trial, you can explore all features and get a feel for the platform. The trial period typically lasts for 14 days, giving you plenty of time to evaluate our services.",
      category: "Pricing",
    },
    {
      question: "How secure is Arzfy?",
      answer:
        "Security is our top priority. We use industry-leading encryption, two-factor authentication, and regular security audits to protect your data and funds. All transactions are monitored 24/7, and we follow strict compliance standards to ensure your information remains safe.",
      category: "Security",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely! You can upgrade or downgrade your subscription plan at any time. Changes to your plan will be reflected in your next billing cycle. If you upgrade, you'll get immediate access to the new features. If you downgrade, the changes will take effect at the start of the next billing period.",
      category: "Pricing",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support through multiple channels. Our support team is available 24/7 via live chat, email, and phone. We also provide extensive documentation, video tutorials, and a knowledge base to help you find answers to common questions quickly.",
      category: "Support",
    },
    {
      question: "How do I reset my password?",
      answer:
        "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password. Make sure to use a strong, unique password for better security.",
      category: "Account",
    },
    {
      question: "What is two-factor authentication?",
      answer:
        "Two-factor authentication (2FA) adds an extra layer of security to your account. When enabled, you'll need to provide both your password and a verification code from your mobile device to log in. We strongly recommend enabling 2FA to protect your account from unauthorized access.",
      category: "Security",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team through multiple channels: live chat (available 24/7 on our website), email at support@arzfy.com, or phone at +1 (555) 123-4567. Our support team typically responds within 24 hours via email and immediately via live chat.",
      category: "Support",
    },
    {
      question: "What are the transaction fees?",
      answer:
        "Transaction fees vary depending on your subscription plan and the type of transaction. Generally, fees range from 0.1% to 0.5% per transaction. Premium plans offer reduced fees. For detailed fee information, please check our pricing page or contact our support team.",
      category: "Pricing",
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Find answers to common questions about Arzfy
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12"
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
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setOpenQuestion(null);
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-[#FFF9F0] text-gray-900"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="bg-[#FFF9F0] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No questions found matching your search.
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
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
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

