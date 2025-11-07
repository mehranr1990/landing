import Image from "next/image";

export default function Licensing() {
  return (
    <section className="py-10  min-h-screen">
      <div className="mx-auto ">
        {/* Header Section */}
        <div className="text-center my-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Licenses & Certificates
          </h1>
          <p className="text-lg md:text-xl text-[#666666]">
            Verify our credentials and business authenticity
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#F8F8F1] w-full  py-12 px-6 md:px-22 lg:px-26 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo Section */}
            <div className="flex justify-center h-full items-center lg:justify-center">
              <div className="rounded-lg p-8 flex items-center justify-center w-[345px] h-[120px]">
                <Image
                  src="/logo/logobig.png"
                  alt="Arzfy Logo"
                  width={345}
                  height={120}
                  className="object-contain"
                />
              </div>
            </div>

          {/* Company Information Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Company Information
            </h2>
            <p className="text-[#666666] leading-relaxed">
              Arzfy is a subsidiary of "Economic NOVA Group" Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-[#666666] ">
                  Company Registration ID:
                </span>
                <span className="text-black px-20">14010474001</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span className="text-[#666666] ">
                  Established:
                </span>
                <span className="text-black px-20">2021</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

