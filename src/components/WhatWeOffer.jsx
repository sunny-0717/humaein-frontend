"use client";

import { useEffect, useRef, useState } from "react";

export default function WhatWeOffer() {
  // State to track which card is currently active/visible
  const [activeCard, setActiveCard] = useState(0);
  
  // Reference to the section element for scroll detection
  const sectionRef = useRef(null);

  // Array of healthcare services with their details
  // Each service contains an ID, title, icon, and list of features
  const services = [
    {
      id: "A",
      title: "Patient scheduling & reminders",
      icon: "📅",
      features: [
        "Real-time sync with doctor and clinic calendars (EMR, Google, Outlook)",
        "Automatic capture of patient related data",
        "WhatsApp/SMS/email reminders driven by AI",
        "Personalized follow-up prompts for missed",
        "Auto rescheduling for last-minute changes or cancellations",
      ],
    },
    {
      id: "B",
      title: "Insurance eligibility & medical billing",
      icon: "🏥",
      features: [
        "Instant e-eligibility and benefits checks",
        "Flags policy limits, exclusions, and network coverage",
        "Real-time estimate of patient share (co-pay, deductible, co-insurance)",
        "Automated payment posting and invoicing",
        "Smart reminders for outstanding balances",
      ],
    },
    {
      id: "C",
      title: "Prior authorization management",
      icon: "✅",
      features: [
        "Auto-detection of services needing prior auth",
        "One-click e-submission with auto-attachment",
        "Auto-filling of Payor forms using copilot",
        "Live approval status and triggers for scope expansion",
        "Auto escalation and resubmission on delays or denials",
      ],
    },
    {
      id: "D",
      title: "Medical coding & claims scrubbing",
      icon: "🔍",
      features: [
        "Coding validation as per UAE & AIPC / AHIMA guidelines",
        "AI-powered coding suggestion",
        "Auto triggers to treating doctors",
        "Pre-submission checks for common errors",
        "Coding audit with improvement plan",
      ],
    },
    {
      id: "E",
      title: "Electronic claims submission",
      icon: "📤",
      features: [
        "One-click eClaims and DHPO submission",
        "Gateway validation prevents data or format errors",
        "Auto-attachment of required documents",
        "Unified view for initial claims status, and resubmissions",
      ],
    },
    {
      id: "F",
      title: "Denial management & resubmission",
      icon: "🔄",
      features: [
        "Auto-review of denial codes and root causes",
        "Auto-drafts medical justifications from EMR/HIS notes",
        "Auto-triggers to treating physician for needed input",
        "Auto-prioritization of high value denial",
        "Resubmission automation with attachments and comments",
      ],
    },
    {
      id: "G",
      title: "Payor denial reconciliation",
      icon: "📊",
      features: [
        "Denial‐by‐payor reporting with actionable insights",
        "Auto-drafts for reconciliation based on payor-contracts",
        "Performance scorecards to support data-driven negotiations",
        "Trend dashboard by payor, clinic, and specialty",
        "Expert-suggestions for workflow fixes to cut future denials",
      ],
    },
    {
      id: "H",
      title: "Remittance processing & bank settlement",
      icon: "🏦",
      features: [
        "Auto-detection of Remittance gap between DHPO and bank statements",
        "Flags unpaid, under-paid, or unmatched claims for follow-up",
        "Negotiation assist to release held / under-paid remittances",
        "Cash-flow tracker links claim status to settlement date",
        "Bulk download of payor remittance for audit compliance",
      ],
    },
    {
      id: "I",
      title: "Real-time end-to-end cashflow reporting",
      icon: "📈",
      features: [
        "Doctor-wise, insurance-wise, and specialty-wise revenue analytics",
        "TAT analytics to show bottlenecks pre- and post-submission",
        "Doctor-wise revenue share reports (as per % in agreement)",
        "Root-cause analyses of revenue leakage (SOP and coding gaps)",
        "Live dashboard of pending claims, payments, and delay in resubmission",
      ],
    },
    {
      id: "J",
      title: "Payor-Provider negotiation",
      icon: "🤝",
      features: [
        "KPI dashboard with benchmarks on denial rate, TAT & payor compliance",
        "AI-drafts for negotiation on tariff and write-offs",
        "Performance alerts flagging variance vs. agreed metrics",
        "Secure document vault and e-signature for contracts",
        "Timely compliance and quality reports for both payors and providers",
      ],
    },
  ];

  // Array of light background colors for each card
  const cardBackgrounds = [
    "bg-blue-50",    // Card A - Light blue
    "bg-green-50",   // Card B - Light green
    "bg-yellow-50",  // Card C - Light yellow
    "bg-purple-50",  // Card D - Light purple
    "bg-pink-50",    // Card E - Light pink
    "bg-indigo-50",  // Card F - Light indigo
    "bg-orange-50",  // Card G - Light orange
    "bg-teal-50",    // Card H - Light teal
    "bg-red-50",     // Card I - Light red
    "bg-cyan-50",    // Card J - Light cyan
  ];

  // Scroll event handler to manage card reveal based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Get the section's position relative to the page
      const sectionTop = sectionRef.current.offsetTop;
      const scrollTop = window.scrollY;
      const scrollProgress = scrollTop - sectionTop;

      // Define how much scroll distance is needed to reveal each card
      const cardScrollThreshold = 300;
      
      // Calculate which card should be active based on scroll progress
      const index = Math.floor(scrollProgress / cardScrollThreshold);

      // Update active card state, ensuring it doesn't exceed the total number of cards
      if (scrollProgress > 0) {
        setActiveCard(Math.min(index, services.length - 1));
      } else {
        setActiveCard(0);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  return (
    // Main section container with dynamic height based on number of services
    // Height calculation: (number of services × 300px) + 800px for header space
    <section
      ref={sectionRef}
      id="what-we-offer"
      className="relative bg-gradient-to-br from-gray-50 to-white"
      style={{ height: `${services.length * 300 + 800}px` }}
    >
      {/* Sticky container that stays in view while scrolling */}
      {/* top-24 provides some offset from the top of the viewport */}
      <div className="sticky top-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with title and description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            What We Offer
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive healthcare solutions designed to streamline your operations and maximize revenue
          </p> */}
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2">
            {services.map((_, idx) => (
              <span
                key={idx}
                className={`block rounded-full transition-all duration-300 ${
                  idx === activeCard
                    ? 'bg-blue-600 w-6 h-2'
                    : 'bg-gray-300 w-2 h-2'
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Stacked cards container - all cards are positioned absolutely within this container */}
        <div className="relative h-auto md:h-[400px] lg:h-[350px] flex items-center justify-center min-h-[400px]">
          {/* Map through each service to create individual cards */}
          {services.map((service, index) => {
            // Determine if this card should be visible based on active card state
            const isVisible = index <= activeCard;
            
            // Remove stacking offset - cards will completely cover each other
            // Only the most recent card will be visible at full opacity

            return (
              // Individual card container with absolute positioning
              <div
                key={service.id}
                className={`absolute w-full transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  // Transform: position all cards at the same position (no stacking)
                  // Only the active card will be fully visible, others will be hidden
                  transform: isVisible
                    ? "translateY(0) scale(1)"
                    : "translateY(100px) scale(0.95)",
                  // Z-index: higher index = higher z-index (newer cards appear on top)
                  zIndex: 1000 + index,
                  // Pointer events: only visible cards are interactive
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                {/* Card content with styling and hover effects */}
                <div className={`${cardBackgrounds[index]} rounded-2xl p-4 md:p-8 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-200 hover:border-gray-300 max-w-full md:max-w-4xl mx-auto`}>
                  {/* Card layout: icon on left, content on right */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4 md:gap-6">
                    {/* Service icon container with only the icon, no background */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      <span className="text-3xl md:text-4xl">
                        {service.icon}
                      </span>
                    </div>
                    
                    {/* Card content area */}
                    <div className="flex-1">
                      {/* Service ID and title */}
                      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                        <span className="text-lg md:text-2xl font-bold text-blue-600">
                          {service.id}.
                        </span>
                        <h3 className="text-lg md:text-2xl font-bold text-black">
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* List of service features */}
                      <ul className="space-y-2 md:space-y-3">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 md:gap-3 text-gray-700"
                          >
                            {/* Feature bullet point */}
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <p className="leading-relaxed text-sm md:text-base">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
