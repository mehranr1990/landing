import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3B2AE0] via-[#5637F2] to-[#8450FF] text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        
        {/* Decorative dots patterns */}
        <div className="absolute top-12 left-1/4">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white/30 rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-32 right-1/4">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white/30 rounded-full" />
            ))}
          </div>
        </div>
        
        {/* Curved lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-20" viewBox="0 0 400 600">
          <path d="M 300 0 Q 200 100 300 200 T 300 400 T 300 600" stroke="white" strokeWidth="2" fill="none" />
          <path d="M 350 0 Q 250 150 350 300 T 350 600" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <FadeIn className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-yellow-300">All-in-One Accounting</span>
              <br />
              <span className="text-white">for Digital Finance</span>
            </h1>

            <p className="mt-6 text-gray-100 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Arzfy helps crypto and fiat exchange automate accounting, eliminate
              errors, and gain real-time financial insights — all in one secure and
              intelligent platform.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#get-started"
                className="rounded-full bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#demo"
                className="rounded-full border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 transition-all"
              >
                Watch Demo
              </a>
            </div>
          </FadeIn>

          {/* Illustration Section */}
          <FadeIn className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main coin bag illustration */}
              <div className="relative z-10">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
                  {/* Main money bag */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform -rotate-12">
                    <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-6xl md:text-7xl text-white font-bold">$</span>
                    </div>
                  </div>
                  
                  {/* Floating coins */}
                  <div className="absolute -top-8 right-8 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                    <span className="text-2xl font-bold text-white">$</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-xl font-bold text-white">$</span>
                  </div>
                  <div className="absolute bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl font-bold text-white">$</span>
                  </div>
                  
                  {/* Arrow indicators */}
                  <div className="absolute top-1/2 -right-16 w-24">
                    <svg viewBox="0 0 100 50" className="w-full text-teal-400">
                      <path d="M 0 25 Q 50 10 80 25" stroke="currentColor" strokeWidth="3" fill="none" />
                      <path d="M 80 25 L 70 20 M 80 25 L 70 30" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 bg-[#FFFBF0] text-black">
        <div className="px-6 md:px-16 lg:px-24 py-12">
          <FadeIn className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <p className="text-gray-700 text-sm md:text-base font-medium">
                Up to 99.99 Percent Up-Time
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Import Accounting Data Lower than 3 minutes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-3xl border-2 border-orange-300 p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  2+
                </h3>
                <p className="text-gray-600 text-sm">Years</p>
                <p className="text-gray-500 text-sm">Uptime</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-3xl border-2 border-orange-300 p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  470+
                </h3>
                <p className="text-gray-600 text-sm">Real Users</p>
                <p className="text-gray-500 text-sm">Trust Us</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-3xl border-2 border-orange-300 p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  237
                </h3>
                <p className="text-gray-600 text-sm">Days</p>
                <p className="text-gray-500 text-sm">No Incidents</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ✅ Lightweight fade-in animation (Client-only inside) */
function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  // Trick: dynamic import avoids making HeroSection a client component
  const Component = DynamicFadeIn as any;
  return <Component className={className}>{children}</Component>;
}

/* Dynamic client component (smallest possible scope) */
import dynamic from "next/dynamic";
const DynamicFadeIn = dynamic(() => import("./_FadeIn"));