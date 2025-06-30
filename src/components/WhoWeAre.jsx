"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-2 md:py-4 lg:py-6 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-2">
          Who We Are
        </h2>

        {/* Main Paragraph */}
        <p className="text-2xl md:text-3xl font-bold text-center text-blue-900 leading-snug">
          Humaein is an end-to-end, AI-native platform built to empower healthcare leaders eliminate admin burden – one AI workflow at a time.
        </p>

        {/* Second Paragraph */}
        <p className="text-lg md:text-xl text-center text-gray-700 font-medium leading-relaxed">
          We help hospitals and clinics <span className="font-bold text-blue-900">reduce claims denials, increase cashflows, and ensure bank settlement</span> so that healthcare leaders can focus on matters most—<span className="font-bold text-blue-900">patients, not paperwork!</span>
        </p>

        {/* Founder Card */}
        <div className="mx-auto mt-4 flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl shadow-sm px-6 py-4 w-full max-w-xs">
          <Image
            src="/founder-file.png"
            alt="Founder Dr Nadeem Ahmed"
            width={72}
            height={72}
            className="rounded-full object-cover w-20 h-20 mb-3 border-2 border-blue-200"
          />
          <div className="text-center">
            <div className="font-semibold text-blue-900 text-base">Dr Nadeem Ahmed</div>
            <div className="font-bold text-gray-700 text-sm mb-1">Founder and CEO</div>
            <div className="text-gray-600 text-sm mt-1">
              Emergency-physician-turned-health-tech entrepreneur on a mission to eliminate admin burden in healthcare.
            </div>
            <a
              href="https://www.linkedin.com/in/drnadeemahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-700 font-medium hover:underline hover:text-blue-900 transition-colors duration-200 cursor-pointer"
              title="See LinkedIn Profile"
            >
              See LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 