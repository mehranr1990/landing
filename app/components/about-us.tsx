import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Arzfy
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Empowering Finance Exchanges with professional management solutions
            since 2021
          </p>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-full border-t border-cyan-300"></div>

      {/* Content Section */}
      <section className="bg-[#FFF9F0] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Our Story */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-500">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Arzfy was founded in 2021 as a subsidiary of "Economic Group
                  Amin Etemad Farda" with a mission to revolutionize crypto
                  exchange management.
                </p>
                <p>
                  Our journey began when we recognized the growing need for
                  comprehensive, secure, and user-friendly management solutions
                  in the cryptocurrency industry. We set out to create a
                  platform that would empower exchange operators with the tools
                  they need to succeed in this rapidly evolving market.
                </p>
                <p>
                  Today, Arzfy serves numerous crypto exchanges worldwide,
                  providing them with cutting-edge accounting systems, user
                  management, analytics, and reporting capabilities. Our
                  commitment to innovation and customer success drives
                  everything we do.
                </p>
              </div>
            </div>

            {/* Right Side - Statistics Card */}
            <div className="w-full lg:w-auto lg:min-w-[350px]">
              <div className="bg-white rounded-4xl shadow-sm p-8 space-y-8">
                <div className=" flex items-center justify-center gap-8">
                  <div className="text-2xl  md:text-2xl font-bold text-orange-400 mb-2">
                    470+
                  </div>
                  <span className="text-gray-700 text-center font-medium">
                    Businesses
                  </span>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-2xl md:text-2xl font-bold text-orange-400 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-700 text-center font-medium">
                    Uptime
                  </div>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-2xl md:text-2xl font-bold text-orange-400 mb-2">
                    24/7
                  </div>
                  <div className="text-gray-700 text-center font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center">
                  <Image
                    src="/icons/bitcoin-refresh.png"
                    alt="Mission Icon"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To provide the most reliable and comprehensive crypto exchange
                management platform, empowering businesses to operate efficiently
                and securely in the digital economy.
              </p>
            </div>

            {/* Our Vision Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center">
                  <Image
                    src="/icons/card-coin.png"
                    alt="Vision Icon"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                To become the global standard for crypto exchange management,
                recognized for innovation, reliability, and exceptional customer
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="bg-[#FFF9F0] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="bg-[#FFF9F0] rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Have questions? We'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-orange-400 font-semibold block mb-1">
                        Email:
                      </span>
                      <span className="text-gray-700">contact@arzfy.com</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 border-2 border-orange-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-orange-400 font-semibold block mb-1">
                        Phone:
                      </span>
                      <span className="text-gray-700">+1 (555) 123-4567</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 border-2 border-teal-400 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-orange-400 font-semibold block mb-1">
                        Address:
                      </span>
                      <span className="text-gray-700">
                        123 Crypto Street, Tech City, TC 12345
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full bg-white px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                />
                <button className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg px-8 py-4 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

