"use client";

export default function HowWeDiffer() {
  const innovations = [
    {
      icon: "🤖",
      title: "AI-native RCM platform",
      description: "Built ground-up for automation using AI tools and agentic workflow"
    },
    {
      icon: "🏗️",
      title: "Modular architecture",
      description: "Standalone module or end to end RCM integration as per client need"
    },
    {
      icon: "👨‍⚕️",
      title: "Expert-in-the-loop",
      description: "AI reviewed by in-house RCM experts with 20+ years UAE experience"
    },
    {
      icon: "🔌",
      title: "Embedded workflow tools",
      description: "Plug-and-play APIs for EMR, HIS, insurance and claims portals"
    },
    {
      icon: "🔍",
      title: "Claims scrubbing copilot",
      description: "Live suggestions for coding and supporting file attachments"
    }
  ];

  return (
    <section id="how-we-differ" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How We Differ
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Humaein <strong className="text-indigo-600">leverages cutting-edge AI-powered innovation</strong> through a fully compliant end-to-end RCM platform to deliver best-in-class outcomes for UAE healthcare system.
          </p>
        </div>

        {/* Innovations Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-50 border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-8 text-center">
              INNOVATIONS
            </h3>
            
            <div className="space-y-6">
              {innovations.map((innovation, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg 
                      className="w-6 h-6 text-indigo-500" 
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
                      {innovation.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-indigo-600 text-lg mb-1">
                        {innovation.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {innovation.description}
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