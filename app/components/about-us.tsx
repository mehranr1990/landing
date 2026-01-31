"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-26 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl text-black mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-[#666666]">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>


      {/* Content Section */}
      <section className="bg-[#F8F8F1] py-16 px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left Side - Our Story */}
            <div className="flex-1 space-y-6 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-500">
                {t("ourStory.title")}
              </h2>
              <div className="space-y-6 text-black font-medium text-lg leading-relaxed">
                <p>
                  {t("ourStory.p1")}
                </p>
                <p className="text-[#666666] text-base">
                  {t("ourStory.p2")}
                </p>
                <p className="text-[#666666] text-base">
                  {t("ourStory.p3")}
                </p>
              </div>
            </div>

            {/* Right Side - Statistics Card */}
            <div className="w-full lg:w-auto lg:min-w-[300px]">
              <div className="bg-white rounded-4xl shadow-sm p-8 space-y-8">
                <div className=" flex items-center justify-start px-10 gap-8">
                   
                    <span className="text-[#666666] text-center font-medium">
                      {t("stats.accuracy")}
                    </span>
                </div>
                <div className="flex items-center justify-start px-10 gap-8">
                 
                  <div className="text-[#666666] text-center font-medium">
                    {t("stats.availability")}
                  </div>
                </div>
                <div className="flex items-center justify-start px-10 gap-8">
                 
                  <div className="text-[#666666] text-center font-medium">
                    {t("stats.support")}
                  </div>
                </div>
                <div className="flex items-center justify-start px-10 gap-8">
                 
                  <div className="text-[#666666] text-center font-medium">
                    {t("stats.security")}
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
                {t("mission.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {t("mission.description")}
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
                {t("vision.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {t("vision.description")}
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
                    {t("contact.title")}
                  </h2>
                  <p className="text-[#666666] text-lg">
                    {t("contact.subtitle")}
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
                        {t("contact.email")}
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
                        {t("contact.phone")}
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
                        {t("contact.address")}
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
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full bg-white px-6 py-4 rounded-xl border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-[#FF9D00] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full bg-white px-6 py-4 rounded-xl border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-[#FF9D00] focus:border-transparent"
                />
                <textarea
                  placeholder={t("contact.messagePlaceholder")}
                  rows={5}
                  className="w-full bg-white px-6 py-4 rounded-xl border border-[#CECDC4] focus:outline-none focus:ring-2 focus:ring-[#FF9D00] focus:border-transparent resize-none"
                />
                <button className="w-[200px] h-[50px] bg-[#FF9D00] hover:bg-orange-400 text-white  rounded-4xl px-8 py-4 transition-colors">
                  {t("contact.contactUs")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

