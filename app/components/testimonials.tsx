type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "John Doe",
      title: "CEO",
      company: "Company A",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      name: "Jane Smith",
      title: "CTO",
      company: "Company B",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl transition-shadow"
            >
              {/* Quote */}
              <p className="text-[#2D7A7A] text-base leading-relaxed mb-10">
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

