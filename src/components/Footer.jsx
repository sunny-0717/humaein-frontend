"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white border-t-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 items-start gap-8 md:gap-4">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/HI-LOGO-2.png"
                alt="Humaein Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/drnadeemahmed/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#who-we-are" className="text-gray-200 hover:text-white transition-colors duration-200">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#where-we-operate" className="text-gray-200 hover:text-white transition-colors duration-200">
                  Where We Operate
                </a>
              </li>
              <li>
                <a href="#what-we-offer" className="text-gray-200 hover:text-white transition-colors duration-200">
                  What We Offer
                </a>
              </li>
              <li>
                <a href="#how-we-differ" className="text-gray-200 hover:text-white transition-colors duration-200">
                  How We Differ
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-200 hover:text-white transition-colors duration-200">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-200">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@humaein.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-200">
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-200">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>DSO-IFZA, IFZA Properties, Dubai Silicon Oasis, Dubai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-300 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-2 md:mb-0">
              © 2025 Humaein. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Notice
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 