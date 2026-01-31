"use client";

import { useTranslations } from "next-intl";

type Testimonial = {
  quote: string;
  name: string;
};

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials: Testimonial[] = [
    {
      quote: t("testimonial1.quote"),
      name: t("testimonial1.name"),
    },
    {
      quote: t("testimonial2.quote"),
      name: t("testimonial2.name"),
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
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
              className="bg-white rounded-3xl   p-8 border-2 border-[#E9E9E0] hover:shadow-xl transition-shadow"
              >
              <div>
                <h3 className=" font-bold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
              </div>
              {/* Quote */}
              <p className="text-[#06444C] text-base leading-relaxed mt-10">
                {testimonial.quote}
              </p>

              {/* Client Info */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

