export default function KeyFeatures() {
  const features = [
    {
      title: "Secure Trading",
      description: "Advanced security features for safe trading",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="28" height="24" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <circle cx="24" cy="26" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M24 30v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="18" y="8" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
        </svg>
      ),
    },
    {
      title: "Fast Processing",
      description: "Lightning-fast transaction processing",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="32" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M8 23h32" stroke="currentColor" strokeWidth="2.5" />
          <rect x="13" y="28" width="10" height="4" rx="1" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <path d="M16 12V16M24 8V16M32 12V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Scalable System",
      description: "Grows with your business needs",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M24 14v20M14 24h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
          <path d="M30 18l6-6M18 30l-6 6M30 30l6 6M18 18l-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <path d="M24 12v12l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
          <path d="M24 8v2M24 38v2M38 24h2M8 24h2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Key Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center mb-6 text-orange-400 group-hover:text-orange-500 transition-colors">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

