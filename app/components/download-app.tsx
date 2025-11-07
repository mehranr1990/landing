import Image from "next/image";
export default function DownloadApp() {
  const socialIcons = [
    {
      name: "Instagram",
      icon: (
        <Image src="/icons/image30.png" alt="instagram" width={27} height={30} />
      ),
    },
    {
      name: "Facebook",
      icon: (

        <Image src="/icons/image29.png" alt="instagram" width={26} height={26} />
      ),
    },
    {
      name: "WhatsApp",
      icon: (

        <Image src="/icons/image28.png" alt="instagram" width={35} height={34} />
      ),
    },
    {
      name: "YouTube",
      icon: (

        <Image src="/icons/image27.png" alt="instagram" width={26} height={29} />
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1   md:grid-cols-2 bg-gradient-download-app bg-[ #FFAF1B]">

        <div className="relative  p-12 md:p-16 flex items-center justify-center overflow-hidden">
          {/*        
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
          
       
          <div className="relative flex items-center justify-center gap-6">
       
            <div className="relative w-48 h-96 bg-white rounded-3xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Mockup</span>
              </div>
            </div>
            
       
            <div className="relative w-48 h-96 bg-white rounded-3xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-semibold">Mockup</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right Side - Download Section */}
        <div className="relative  p-12 md:p-16 flex flex-col mt-10 items-center justify-center text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-balck mb-6">
              Download the App
            </h2>
            <p className="text-white/80 mb-4 max-w-[250px] text-sm">
              Get our app on your favorite device. Works well always on to date.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-14 h-14 rounded-full bg-white/75   flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Download Button */}
            <a
              href="#"
              className="inline-block px-10 py-3 my-10 bg-[#FF9D00] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

