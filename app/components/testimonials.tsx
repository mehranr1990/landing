"use client";

import { useTranslations } from "next-intl";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials: Testimonial[] = [
    {
      quote: t("testimonial1.quote"),
      name: t("testimonial1.name"),
      title: t("testimonial1.title"),
      company: t("testimonial1.company"),
    },
    {
      quote: t("testimonial2.quote"),
      name: t("testimonial2.name"),
      title: t("testimonial2.title"),
      company: t("testimonial2.company"),
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t("title")}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl   p-8 border-2 border-[#E9E9E0] hover:shadow-xl transition-shadow"
            >
              {/* Quote */}
              <p className="text-[#06444C] text-base leading-relaxed mb-10">
                {testimonial.quote}
              </p>

              {/* Client Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

