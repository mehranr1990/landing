import Image from "next/image";
export default function KeyFeatures() {
  const features = [
    {
      title: "Secure Trading",
      description: "Advanced security features for safe trading",
      icon: (
        <Image src="/icons/card-coin.png" alt="support" width={50} height={50} />
      ),
    },
    {
      title: "Fast Processing",
      description: "Lightning-fast transaction processing",
      icon: (
        <Image src="/icons/bitcoin-card.png" alt="support" width={50} height={50} />
      ),
    },
    {
      title: "Scalable System",
      description: "Grows with your business needs",
      icon: (
        <Image src="/icons/bitcoin-refresh.png" alt="support" width={50} height={50} />
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support",
      icon: (
        <Image src="/icons/bitcoin-convert.png" alt="support" width={50} height={50} />
      ),
    },
  ];

  return (
    <section className=" py-16 px-6 md:px-16 lg:px-24">
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
              className="bg-white rounded-4xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-200 group"
            >
              {/* Icon */}
              <div className="inline-flex items-center bg-[#F8F8F0] rounded-full p-6 justify-center mb-6 text-orange-400 group-hover:text-orange-500 transition-colors">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mx-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

