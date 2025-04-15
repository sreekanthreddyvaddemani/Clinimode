import React, { useEffect } from "react";
import { 
  Award, 
  Users, 
  Download, 
  Phone,  
  InfoIcon,
  TrendingUp,
  Calendar,
  MessageCircle,
  CheckCircle
} from "lucide-react";

import img from '../../../assets/Gemini_Generated_Image_cl4htycl4htycl4h.jpeg'
import EnrollForm from "../../EnrollForm";
import MedicalCodingCourse from "./MedicalCodingCourse";
import { useNavigate } from "react-router-dom";

const MedicalCoding = () => {

  const navigate=useNavigate();
  const features = [
    { 
      icon: <InfoIcon className="w-5 h-5 text-blue-600" />, 
      text: "Comprehensive Curriculum",
      id: "overview" 
    },
    { 
      icon: <Download className="w-5 h-5 text-green-600" />, 
      text: "Course Curriculum",
      id: "curriculum" 
    },
    { 
      icon: <MessageCircle className="w-5 h-5 text-purple-600" />, 
      text: "Student Testimonials",
      id: "testimonials" 
    },
    { 
      icon: <Phone className="w-5 h-5 text-red-600" />, 
      text: "FAQs & Support",
      id: "faqs" 
    }
  ];

  const handleDownload = () => {
    const brochureUrl = "/brochures/MedicalCoding.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.setAttribute("download", "MedicalCoding_Brochure.pdf");
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

  useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top when page loads
      
      // Check if URL has a hash and scroll to that element after page load
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 500); // Short delay to ensure all components are loaded
        }
      }
    }, []);

  return (
    <div className="relative text-gray-800 overflow-hidden z-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div className="absolute inset-0 opacity-5 z-0" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 60%)',
        backgroundSize: '20px 20px'
      }}/>
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-100"
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
      
      {/* Main Content Container - Start from 150px top margin */}
      <div className="container mx-auto w-11/12 px-3 py-8 relative z-10 mt-[150px]">
        <div className="flex flex-col md:flex-row items-start justify-between mx-auto">
          {/* Left Content - Text Section */}
          <div className="md:w-7/12 pr-4">
            {/* Status Badge */}
            <div className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-3 animate-pulse">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>Admissions Open Now!</span>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-3 text-gray-900">
              Medical Coding <span className="text-blue-600">Training Program</span>
            </h1>
            
            {/* Location */}
            <div className="inline-block bg-gray-100 border border-gray-200 px-3 py-1 rounded-md mb-3">
              <span className="font-medium text-gray-700">Bengaluru</span>
            </div>

            {/* Compact Description */}
            <p className="text-base mb-4 text-gray-600">
              Jump-start your career in healthcare with our comprehensive medical coding program.
              Master industry-standard coding systems like ICD-10, CPT, and HCPCS for hospitals,
              insurance companies, and healthcare organizations.
            </p>

            {/* Key Benefits in Compact Layout */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">100% Placement Assistance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Certified Professional Trainers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Hands-on Practical Training</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">Industry-Recognized Certification</span>
              </div>
            </div>

            {/* Market Stats in a Compact Card */}
            <div className="bg-blue-50 p-4 rounded-lg mb-4 border-l-4 border-blue-400">
              <h3 className="text-lg font-medium mb-2 text-gray-800">Healthcare Industry Outlook</h3>
              <p className="text-sm mb-2 text-gray-600">
                The global medical coding market size was valued at <span className="font-bold text-blue-700">USD 16.9 billion</span> in 2023
                and is projected to reach <span className="font-bold text-blue-700">USD 30.4 billion</span> by 2030.
              </p>
              <p className="text-sm text-gray-600">
                Healthcare organizations in India are creating <span className="font-bold text-blue-700">12,000+ jobs</span> annually for skilled medical coders.
              </p>
            </div>

            {/* Call to Action Buttons - Improved width and height */}
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
          </div>

          {/* Right Content - Image */}
          <div className="md:w-[500px] mt-4 md:mt-0">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <img 
                src={img}
                alt="Medical Coding Training" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Navigation Features - Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 w-full mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-3 rounded-lg flex flex-col items-center text-center transition-transform hover:bg-gray-200 cursor-pointer"
              onClick={() => scrollToSection(feature.id)}
            >
              <div className="p-2 rounded-full bg-white shadow-sm mb-2">
                {feature.icon}
              </div>
              <span className="text-xs font-medium text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-0">
        <MedicalCodingCourse />
        <div id="enroll-form-section">
            <EnrollForm/>
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

export default MedicalCoding;