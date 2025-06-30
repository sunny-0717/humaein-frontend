"use client";

export default function WhereWeOperate() {
  const markets = [
    { name: "UAE", flag: "https://flagcdn.com/ae.svg" },
    { name: "Kingdom of Saudi Arabic", flag: "https://flagcdn.com/sa.svg" },
    { name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
    { name: "Oman", flag: "https://flagcdn.com/om.svg" },
    { name: "Bahrain", flag: "https://flagcdn.com/bh.svg" },
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
    { name: "India", flag: "https://flagcdn.com/in.svg" }
  ];

  const clients = [
    { name: "Hospitals", icon: "🏥" },
    { name: "Medical centres", icon: "🏢" },
    { name: "Day care surgery centres", icon: "⚕️" },
    { name: "Polyclinics", icon: "🏥" },
    { name: "Speciality clinics", icon: "🩺" },
    { name: "Diagnostic / radiology labs", icon: "🔬" },
    { name: "Pharmacies", icon: "💊" },
    { name: "Payors", icon: "💳" }
  ];

  const specialties = [
    { name: "Primary care", icon: "👨‍⚕️" },
    { name: "Family Medicine", icon: "👨‍👩‍👧‍👦" },
    { name: "Paediatrics", icon: "👶" },
    { name: "Obstetrics & Gynaecology", icon: "🤱" },
    { name: "Dentistry", icon: "🦷" },
    { name: "Orthopaedics", icon: "🦴" },
    { name: "Physiotherapy", icon: "💪" },
    { name: "ENT (Ear, Nose, Throat)", icon: "👂" },
    { name: "Ophthalmology", icon: "👁️" },
    { name: "Home care", icon: "🏠" }
  ];

  return (
    <section id="where-we-operate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Where We Operate
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive healthcare solutions span across multiple markets, serving diverse client types and covering all clinical specialties.
          </p>
        </div>

        {/* Markets Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">Markets</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {markets.map((market, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center text-black transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-200 shadow-md"
                style={{ boxShadow: '0 4px 24px 0 rgba(180, 180, 200, 0.10), 0 1.5px 4px 0 rgba(180, 180, 200, 0.10)' }}
              >
                <div className="flex justify-center mb-3">
                  <img 
                    src={market.flag} 
                    alt={`${market.name} flag`}
                    className="w-12 h-8 object-cover rounded shadow-sm"
                  />
                </div>
                <p className="text-sm md:text-base font-medium">
                  {market.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clients Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">Clients</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client, index) => {
              const clientColors = [
                'bg-blue-50 text-blue-900 border-blue-100',
                'bg-green-50 text-green-900 border-green-100',
                'bg-yellow-50 text-yellow-900 border-yellow-100',
                'bg-purple-50 text-purple-900 border-purple-100',
                'bg-pink-50 text-pink-900 border-pink-100',
                'bg-cyan-50 text-cyan-900 border-cyan-100',
                'bg-orange-50 text-orange-900 border-orange-100',
                'bg-teal-50 text-teal-900 border-teal-100',
              ];
              return (
                <div
                  key={index}
                  className={`${clientColors[index % clientColors.length]} p-6 rounded-2xl text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border shadow`}
                >
                  <div className="text-4xl mb-3">{client.icon}</div>
                  <p className="text-sm md:text-base font-medium">
                    {client.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Specialties Section */}
        <div>
          <h3 className="text-3xl font-bold text-black mb-4 text-center">Specialties Covered</h3>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            All clinical and allied health specialties including but not limited to following
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {specialties.map((specialty, index) => {
              const specialtyColors = [
                'bg-indigo-50 text-indigo-900 border-indigo-100',
                'bg-emerald-50 text-emerald-900 border-emerald-100',
                'bg-amber-50 text-amber-900 border-amber-100',
                'bg-rose-50 text-rose-900 border-rose-100',
                'bg-sky-50 text-sky-900 border-sky-100',
                'bg-lime-50 text-lime-900 border-lime-100',
                'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-100',
                'bg-violet-50 text-violet-900 border-violet-100',
                'bg-red-50 text-red-900 border-red-100',
                'bg-slate-50 text-slate-900 border-slate-100',
              ];
              return (
                <div
                  key={index}
                  className={`${specialtyColors[index % specialtyColors.length]} p-6 rounded-2xl text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer border shadow`}
                >
                  <div className="text-4xl mb-3">{specialty.icon}</div>
                  <p className="text-sm md:text-base font-medium">
                    {specialty.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 