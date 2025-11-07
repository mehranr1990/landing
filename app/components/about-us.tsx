import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl text-black mb-4">
            About Arzfy
          </h1>
          <p className="text-lg md:text-xl text-[#666666]">
            Empowering Finance Exchanges with professional management solutions
            since 2021
          </p>
        </div>
      </section>


      {/* Content Section */}
      <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Our Story */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-500">
                Our Story
              </h2>
              <div className="space-y-6 text-black font-medium text-lg leading-relaxed">
                <p>
                  Arzfy was founded in 2021 as a subsidiary of "Economic Group
                  Amin Etemad Farda" with a mission to revolutionize crypto
                  exchange management.
                </p>
                <p className="text-[#666666] text-base">
                  Our journey began when we recognized the growing need for
                  comprehensive, secure, and user-friendly management solutions
                  in the cryptocurrency industry. We set out to create a
                  platform that would empower exchange operators with the tools
                  they need to succeed in this rapidly evolving market.
                </p>
                <p className="text-[#666666] text-base">
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
                <div className=" flex items-center justify-start px-10 gap-8">
                    <div className="text-2xl  md:text-2xl font-bold text-[#FF9D00] mb-2">
                      470+
                    </div>
                    <span className="text-[#666666] text-center font-medium">
                      Businesses
                    </span>
                </div>
                <div className="flex items-center justify-start px-10 gap-8">
                  <div className="text-2xl md:text-2xl font-bold text-[#FF9D00] mb-2">
                    99.9%
                  </div>
                  <div className="text-[#666666] text-center font-medium">
                    Uptime
                  </div>
                </div>
                <div className="flex items-center justify-start px-10 gap-8">
                  <div className="text-2xl md:text-2xl font-bold text-[#FF9D00] mb-2">
                    24/7
                  </div>
                  <div className="text-[#666666] text-center font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24 ">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission Card */}
            <div className="bg-white rounded-4xl  p-18 border-2 border-[#E9E9E0]">
              <div className="flex items-center justify-center mb-6">
                <div className="w-28 h-28 rounded-full bg-[#F8F8F0] flex items-center justify-center">
                  <Image
                    src="/icons/bitcoin-refresh-green.png"
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
            <div className="bg-white rounded-4xl  p-18 border-2 border-[#E9E9E0]">
              <div className="flex items-center justify-center mb-6">
                <div className="w-28 h-28 rounded-full bg-[#F8F8F0] flex items-center justify-center">
                  <Image
                    src="/icons/bitcoin-convert-green.png"
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
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="bg-[#F8F8F0] rounded-4xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-[#666666] text-lg">
                    Have questions? We'd love to hear from you.
                  </p>
                </div>
                <div className="border-b-2 border-white"></div>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    
                      <Image
                        src="/icons/sms.png"
                        alt="Email Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <span className="text-[#FF9D00] font-semibold  mb-1 mr-10">
                        Email:
                      </span>
                      <span className="text-black">contact@arzfy.com</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/mobile.svg"
                        alt="Phone Icon"
                        width={20}
                        height={26}
                      />
                    </div>
                    <div>
                      <span className="text-[#FF9D00] font-semibold  mb-1 mr-8">
                        Phone:
                      </span>
                      <span className="text-black">+1 (555) 123-4567</span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/icons/location.png"
                        alt="Location Icon"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <span className="text-[#FF9D00] font-semibold  mb-1 mr-5">
                        Address:
                      </span>
                      <span className="text-black">
                        123 Crypto Street, Tech City, TC 12345
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-6 flex flex-col items-center justify-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-[#FF9D00] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-[#FF9D00] focus:border-transparent"
                />
                <textarea
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full bg-white px-6 py-4 rounded-xl border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-[#FF9D00] focus:border-transparent resize-none"
                />
                <button className="w-[200px] h-[50px] bg-[#FF9D00] hover:bg-orange-400 text-white  rounded-4xl px-8 py-4 transition-colors">
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

