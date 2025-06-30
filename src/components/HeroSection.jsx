"use client";
import Image from "next/image";

export default function HeroSection() {
  const scrollToQueryForm = () => {
    const element = document.getElementById("request-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Banner with Neural Network Image Background */}
        <div className="relative overflow-hidden rounded-3xl p-4 md:p-12 lg:p-16" style={{
          backgroundImage: "url('/banner2-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-[#0a1833]/80 z-0" />
          {/* Content Grid - Left Right Approach */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Top Line - Prominent */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Eliminating Healthcare Admin Burden
              </h1>
              {/* Sub Line - Subtle */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-blue-100 leading-relaxed">
                One AI workflow at a time
              </h2>
              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={scrollToQueryForm}
                  className="bg-white text-blue-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 rounded-lg cursor-pointer shadow-lg"
                >
                  Request a Demo
                </button>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl pt-0.2 pr-4 pb-0.2 pl-4 md:p-6 lg:p-6 border border-white/30">
                <Image
                  src="/banner-image.png"
                  alt="Banner Visual"
                  width={500}
                  height={400}
                  className="w-full h-64 md:h-80 object-contain md:object-cover rounded-xl bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 