"use client";

import React, { useState, useRef, useEffect } from "react";

const countryOptions = [
  { code: "+1", name: "USA", flag: "https://flagcdn.com/us.svg" },
  { code: "+971", name: "UAE", flag: "https://flagcdn.com/ae.svg" },
  { code: "+966", name: "Kingdom of Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { code: "+974", name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
  { code: "+968", name: "Oman", flag: "https://flagcdn.com/om.svg" },
  { code: "+973", name: "Bahrain", flag: "https://flagcdn.com/bh.svg" },
  { code: "+65", name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  { code: "+91", name: "India", flag: "https://flagcdn.com/in.svg" },
];

const cityOptions = {
  "USA": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"],
  "UAE": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"],
  "Kingdom of Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Khobar", "Tabuk", "Buraidah", "Khamis Mushait", "Hail"],
  "Qatar": ["Doha", "Al Rayyan", "Umm Salal", "Al Khor", "Al Wakrah", "Dukhan", "Lusail", "Mesaieed"],
  "Oman": ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Rustaq", "Buraimi", "Ibri"],
  "Bahrain": ["Manama", "Riffa", "Muharraq", "Hamad Town", "A'ali", "Isa Town", "Sitra", "Budaiya"],
  "Singapore": ["Singapore City", "Jurong West", "Woodlands", "Tampines", "Sengkang", "Hougang", "Yishun", "Bedok"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow"]
};

export default function QueryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    contactNumber: "",
    countryCode: countryOptions[0].code,
    countryFlag: countryOptions[0].flag,
    organizationName: "",
    roleTitle: "",
    country: countryOptions[0].name,
    city: cityOptions[countryOptions[0].name][0],
    interestedServices: [],
    comments: "",
  });
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Available services for multi-select
  const services = [
    "Patient scheduling & reminders",
    "Insurance eligibility & medical billing",
    "Prior authorization management",
    "Medical coding & claims scrubbing",
    "Electronic claims submission",
    "Denial management & resubmission",
    "Payor denial reconciliation",
    "Remittance processing & bank settlement",
    "Real-time end-to-end cashflow reporting",
    "Payor-Provider negotiation"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: undefined });
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      interestedServices: prev.interestedServices.includes(service)
        ? prev.interestedServices.filter(s => s !== service)
        : [...prev.interestedServices, service]
    }));
    setErrors({ ...errors, interestedServices: undefined });
  };

  const handleCountrySelect = (country) => {
    setFormData({
      ...formData,
      countryCode: country.code,
      countryFlag: country.flag,
      country: country.name,
      city: cityOptions[country.name][0] // Reset city to first city of selected country
    });
    setDropdownOpen(false);
    setErrors({ ...errors, countryCode: undefined });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      city: cityOptions[selectedCountry][0] // Reset city to first city of selected country
    });
    setErrors({ ...errors, country: undefined, city: undefined });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d{7,15}$/.test(phone.replace(/\D/g, ""));
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required.";
      if (!formData.workEmail) newErrors.workEmail = "Email is required.";
      else if (!validateEmail(formData.workEmail)) newErrors.workEmail = "Enter a valid email address.";
      if (!formData.contactNumber) newErrors.contactNumber = "Contact Number is required.";
      else if (!validatePhone(formData.contactNumber)) newErrors.contactNumber = "Enter a valid phone number.";
    }
    if (step === 2) {
      if (!formData.organizationName) newErrors.organizationName = "Organization Name is required.";
      if (!formData.roleTitle) newErrors.roleTitle = "Role/Title is required.";
      if (!formData.country) newErrors.country = "Country is required.";
      if (!formData.city) newErrors.city = "City is required.";
    }
    if (step === 3) {
      if (!formData.interestedServices.length) newErrors.interestedServices = "Select at least one service.";
    }
    // Step 4 has no required validation (comments are optional)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    if (step !== 4) return; // Only allow submission on step 4
    
    const emailBody = `
New Demo Request from ${formData.fullName}

Contact Information:
- Full Name: ${formData.fullName}
- Work Email: ${formData.workEmail}
- Contact Number: ${formData.countryCode} ${formData.contactNumber}
- Organization: ${formData.organizationName}
- Role/Title: ${formData.roleTitle}
- Country: ${formData.country}
- City: ${formData.city}

Interested Services:
${formData.interestedServices.map(service => `- ${service}`).join('\n')}

Comments:
${formData.comments || 'No additional comments'}
    `;
    const mailtoLink = `mailto:contact@humaein.com?subject=Demo Request - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
    
    // Reset form after submission
    setFormData({
      fullName: "",
      workEmail: "",
      contactNumber: "",
      countryCode: countryOptions[0].code,
      countryFlag: countryOptions[0].flag,
      organizationName: "",
      roleTitle: "",
      country: countryOptions[0].name,
      city: cityOptions[countryOptions[0].name][0],
      interestedServices: [],
      comments: "",
    });
    setStep(1);
    setErrors({});
  };

  // Progress bar width
  const progressPercent = (step / totalSteps) * 100;

  // Add click outside handler for dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <section id="request-demo" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Request a Demo
          </h2>
          <p className="text-lg text-gray-600">Step {step} of {totalSteps}</p>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-2xl shadow-lg">
          <div className="space-y-8">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="workEmail" className="block text-sm font-medium text-black mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg"
                    placeholder="Enter your work email"
                  />
                  {errors.workEmail && <p className="text-red-600 text-xs mt-1">{errors.workEmail}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-black mb-2">
                    Phone/Mobile <span className="text-red-500">*</span>
                  </label>
                  <div className="flex w-full max-w-md">
                    {/* Custom country flag dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        className="flex items-center px-3 py-3 bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg focus:outline-none cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault();
                          setDropdownOpen(!dropdownOpen);
                        }}
                      >
                        <img src={formData.countryFlag} alt="flag" className="w-6 h-4 object-cover rounded mr-1" />
                        <span className="text-sm font-medium text-gray-700 mr-1">{formData.countryCode}</span>
                        <svg 
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {dropdownOpen && (
                        <div className="absolute left-0 top-full z-[1000] bg-white border border-gray-200 rounded-lg shadow-xl w-64 max-h-60 overflow-auto mt-1">
                          {countryOptions.map((country) => (
                            <div
                              key={country.code}
                              className="flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                              onClick={(e) => {
                                e.preventDefault();
                                handleCountrySelect(country);
                              }}
                            >
                              <img src={country.flag} alt={country.name} className="w-6 h-4 object-cover rounded mr-3" />
                              <span className="text-sm text-gray-800 mr-2">{country.name}</span>
                              <span className="text-sm text-gray-500 ml-auto">{country.code}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Phone input */}
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:border-blue-600 focus:outline-none text-base bg-white"
                      placeholder="Mobile Number"
                    />
                  </div>
                  {errors.contactNumber && <p className="text-red-600 text-xs mt-1">{errors.contactNumber}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Organization Info */}
            {step === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-black mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg"
                    placeholder="Enter your organization name"
                  />
                  {errors.organizationName && <p className="text-red-600 text-xs mt-1">{errors.organizationName}</p>}
                </div>
                <div>
                  <label htmlFor="roleTitle" className="block text-sm font-medium text-black mb-2">
                    Role / Title *
                  </label>
                  <input
                    type="text"
                    id="roleTitle"
                    name="roleTitle"
                    value={formData.roleTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg"
                    placeholder="Enter your role or title"
                  />
                  {errors.roleTitle && <p className="text-red-600 text-xs mt-1">{errors.roleTitle}</p>}
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-black mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg cursor-pointer"
                  >
                    {countryOptions.map((country) => (
                      <option key={country.code} value={country.name}>{country.name}</option>
                    ))}
                  </select>
                  {errors.country && <p className="text-red-600 text-xs mt-1">{errors.country}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-black mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg cursor-pointer"
                  >
                    {cityOptions[formData.country]?.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p className="text-red-600 text-xs mt-1">{errors.city}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {step === 3 && (
              <div>
                <label className="block text-sm font-medium text-black mb-4">
                  Interested Services (Multi-select) *
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={formData.interestedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 accent-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
                {errors.interestedServices && <p className="text-red-600 text-xs mt-1">{errors.interestedServices}</p>}
              </div>
            )}

            {/* Step 4: Comments/Submit */}
            {step === 4 && (
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-black mb-2">
                  Comments (Optional)
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-blue-600 focus:outline-none transition-colors duration-200 rounded-lg resize-none"
                  placeholder="Tell us about your specific needs or any questions you have..."
                ></textarea>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Review Your Information:</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Name:</strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.workEmail}</p>
                    <p><strong>Phone:</strong> {formData.countryCode} {formData.contactNumber}</p>
                    <p><strong>Organization:</strong> {formData.organizationName}</p>
                    <p><strong>Role:</strong> {formData.roleTitle}</p>
                    <p><strong>Location:</strong> {formData.city}, {formData.country}</p>
                    <p><strong>Services:</strong> {formData.interestedServices.length} selected</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-600 mb-4">
                    Form submissions will be sent to: <strong>contact@humaein.com</strong>
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
                >
                  Back
                </button>
              ) : <span />}
              
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-black text-white px-4 py-4 text-lg font-medium hover:bg-gray-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Request Demo
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}