export default function FeatureComparison() {
  const features = [
    {
      feature: "Number of Users",
      economic: "1",
      popular: "3+",
      superGold: "Unlimited",
    },
    {
      feature: "Counterparty",
      economic: "150",
      popular: "Unlimited",
      superGold: "Unlimited",
    },
    {
      feature: "Basic Reports",
      economic: "Available",
      popular: "Available",
      superGold: "Available",
    },
    {
      feature: "Advanced Reports",
      economic: "-",
      popular: "-",
      superGold: "Available",
    },
    {
      feature: "Financial Analytics",
      economic: "-",
      popular: "-",
      superGold: "Available",
    },
    {
      feature: "Support",
      economic: "Ticket",
      popular: "Ticket/Call",
      superGold: "Exclusive",
    },
  ];

  return (
    <section className="bg-[#FFF9F0] py-16 px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Feature Comparison
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-yellow-600 to-yellow-500">
                  <th className="px-6 py-4 text-left text-white font-semibold rounded-tl-2xl">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Economic
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Popular
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold rounded-tr-2xl">
                    Super Gold
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-[#FFF9F0]"
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-800 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.economic}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.popular}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">
                      {row.superGold}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

