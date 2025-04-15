import img from '../../../assets/Gemini_Generated_Image_kcnmu2kcnmu2kcnm.jpg'
import React from "react";
import { 
  Award, 
  Users, 
  Download, 
  Phone,  
  Database,
  TrendingUp,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const navigate=useNavigate();
  
  const features = [
    { icon: <Database className="w-5 h-5 text-blue-500" />, text: "Data Management Expertise", id: "data-management" },
    { icon: <Award className="w-5 h-5 text-green-500" />, text: "Industry-Recognized Certification", id: "certification" },
    { icon: <Users className="w-5 h-5 text-purple-500" />, text: "Expert Faculty", id: "faculty" },
    { icon: <TrendingUp className="w-5 h-5 text-red-500" />, text: "100% Placement Assistance", id: "placement" }
  ];

  const handleDownload = () => {
    const brochureUrl = "/brochures/Clinimode.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.setAttribute("download", "Clinimode_Brochure.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative text-gray-800 overflow-hidden z-20 bg-white">
      {/* Background Elements - Removed dark gradient */}
      
      {/* Floating Bubbles - Adjusted for white background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gray-200/50"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Content Container */}
      <div className="container mx-auto w-11/12 px-3 py-8 relative z-10 mt-[150px]">
        <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
          {/* Left Content - Text Section */}
          <div className="md:w-7/12 pr-4">
            {/* Status Badge - Adjusted colors */}
            <div className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3 animate-pulse">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Admissions Open Now!</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">
              Clinical Data Management <span className="text-blue-600">Training Program</span>
            </h1>
            
            {/* Location - Adjusted colors */}
            <div className="inline-block bg-blue-100 px-3 py-1 rounded-md mb-3">
              <span className="font-medium text-blue-800">Bengaluru</span>
            </div>

            {/* Compact Description */}
            <p className="text-base mb-4 text-gray-600">
              Master industry-standard tools and techniques for clinical data collection, 
              validation, and database management for a thriving career in pharmaceutical 
              and biotechnology companies.
            </p>

            {/* Key Benefits in Compact Layout */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">100% Placement Assistance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Industry-Recognized Certification</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Hands-on Real-world Projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Expert Faculty Members</span>
              </div>
            </div>

            {/* Market Stats in a Compact Card - Adjusted colors */}
            <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-400">
              <h3 className="text-lg font-medium mb-2 text-gray-900">Industry Outlook</h3>
              <p className="text-sm mb-2 text-gray-700">
                The global clinical trials market is projected to grow from <span className="font-bold text-blue-600">USD 60.76 billion</span> (2024)
                to <span className="font-bold text-blue-600">USD 69.3 billion</span> by 2028.
              </p>
              <p className="text-sm text-gray-700">
                Most Pharma and Biotech companies are establishing GCCs in India creating 
                <span className="font-bold text-blue-600"> ~15,000+ jobs</span> year-on-year.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-5 justify-center md:justify-start">
              <button 
                className="bg-red-600 text-white px-6 py-3 rounded-sm hover:bg-red-700 hover:shadow-lg transition flex items-center group text-sm md:text-base w-full sm:w-auto min-w-[180px] h-12 justify-center"
                onClick={handleDownload}
              >
                <Download className="w-5 h-5 mr-2 group-hover:rotate-12 transition" /> 
                Download Brochure
              </button>

              <button 
                className="bg-blue-600 text-white px-6 py-3 rounded-sm hover:bg-blue-700 hover:shadow-lg transition flex items-center group text-sm md:text-base w-full sm:w-auto min-w-[180px] h-12 justify-center"
                onClick={() => navigate("/contact")}
              >
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition" /> 
                Contact Us
              </button>
            </div>

            <div className="flex mb-5">
              <div className="grid grid-cols-4 gap-10 text-center">
                <div>
                  <div className="text-xl font-bold text-blue-600">12,000+</div>
                  <div className="text-xs text-gray-600">Annual Job Openings</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600">₹4-8 LPA</div>
                  <div className="text-xs text-gray-600">Starting Salary</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600">3 Months</div>
                  <div className="text-xs text-gray-600">Course Duration</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-600">Placement Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="md:w-[500px] mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <img 
                src={img}
                alt="Clinical Data Management Training" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Features - Compact - Adjusted colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 w-full mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-blue-50 cursor-pointer border border-gray-200"
              onClick={() => scrollToSection(feature.id)}
            >
              <div className="p-2 rounded-full bg-blue-100 mb-2">
                {feature.icon}
              </div>
              <span className="text-xs font-medium text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;