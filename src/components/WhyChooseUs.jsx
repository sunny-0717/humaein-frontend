"use client";

export default function WhyChooseUs() {
  const outcomes = [
    {
      icon: "📉",
      title: "Reduction in denial rate",
      description: "From industry average to best-in-class category performance"
    },
    {
      icon: "✅",
      title: "Clean claim rate",
      description: "Fewer rejections, detailed claims scrubbing, faster remittance"
    },
    {
      icon: "⚡",
      title: "Reduction in claim turnaround",
      description: "Automation for submission, claim validation and resubmission"
    },
    {
      icon: "🛡️",
      title: "100% Regulatory Compliance",
      description: "DHA/MOH/ADH rule alignment and adherence to AHIMA guidelines"
    },
    {
      icon: "💰",
      title: "Improvement in cash collection",
      description: "Average cashflow cycle optimized through workflow automation"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Humaein leverages cutting-edge AI-powered innovation through a fully compliant end-to-end RCM platform to <strong className="text-green-600">deliver best-in-class outcomes</strong> for UAE healthcare system.
          </p>
        </div>

        {/* Outcomes Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-green-600 mb-8 text-center">
              OUTCOMES
            </h3>
            
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg 
                      className="w-6 h-6 text-green-500" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="text-2xl flex-shrink-0">
                      {outcome.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-600 text-lg mb-1">
                        {outcome.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 