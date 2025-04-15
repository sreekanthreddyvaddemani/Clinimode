import React, { useEffect, useState } from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Globe, 
  BookOpen,
  Database,
  Award
} from 'lucide-react';
import img from '../../assets/Gemini_Generated_Image_j85ugfj85ugfj85u.jpeg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden z-20 items-center transition-all duration-1000 ease-in-out ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-11/12 mx-auto relative z-10 py-5 mt-40">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column - Image (20%) */}
          <div 
            className={`w-full md:w-3/12 mb-8 md:mb-0 transition-all duration-1000 delay-300 ${
              isLoaded 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="relative w-full h-[600px] rounded-2xl bg-gray-100 overflow-hidden shadow-xl">
                <img 
                  src={img}
                  alt="Clinical Data Management" 
                  className="w-full h-full object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-200 rounded-full blur-xl opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-40"></div>

                {/* Floating Badges */}
                <div className="absolute top-[15%] inset-x-0 flex justify-end px-4">
                  <div className="bg-white backdrop-blur px-3 py-2 rounded-full shadow-md flex items-center border border-gray-200">
                    <Database className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-800 font-bold text-sm">Clinical Trials</span>
                  </div>
                </div>

                <div className="absolute top-[50%] inset-x-0 flex justify-start px-4">
                  <div className="bg-white backdrop-blur px-3 py-2 rounded-full shadow-md flex items-center border border-gray-200">
                    <Award className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-800 font-bold text-sm">30+ Years Experience</span>
                  </div>
                </div>

                <div className="absolute bottom-[10%] inset-x-0 flex justify-end px-4">
                  <div className="bg-white backdrop-blur px-3 py-2 rounded-full shadow-md flex items-center border border-gray-200">
                    <Briefcase className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-gray-800 font-bold text-sm">Industry Experts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content (70%) */}
          <div 
            className={`w-full md:w-8/12 pl-0 md:pl-8 transition-all duration-1000 delay-500 ${
              isLoaded 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="text-left">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
                Clinical Data Management
              </h1>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                Empowering healthcare innovation through advanced data management, research expertise, and transformative technological solutions.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                Join the rapidly growing field of Clinical Data Management with our expert-led training program designed to prepare you for roles in pharmaceutical, biotech, and healthcare industries worldwide.
              </p>
              
              {/* Key benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">15,000+ Career Opportunities</h3>
                    <p className="text-sm text-gray-600">Diverse roles from Entry-Level to Executive positions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Rapid Industry Growth</h3>
                    <p className="text-sm text-gray-600">Expanding pharmaceutical and healthcare sectors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Global Opportunities</h3>
                    <p className="text-sm text-gray-600">International positions with GCCs in India year-on-year</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert-Led Training</h3>
                    <p className="text-sm text-gray-600">Mentors with 30+ years of combined experience</p>
                  </div>
                </div>
              </div>
              
              {/* Why CDM */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Why Choose Clinical Data Management?</h2>
                <p className="text-gray-700">
                  The job outlook is highly promising, driven by growing demand for efficient data handling in clinical research and healthcare, technological advancements in AI and machine learning, and increasing regulatory compliance requirements.
                </p>
              </div>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="/career" className="w-full sm:w-auto">
                  <button 
                    className="bg-white border-2 border-blue-600 text-blue-600 
                             px-8 py-3 rounded-md hover:bg-blue-50 
                             transition-colors duration-300 
                             font-semibold w-full sm:w-auto text-lg"
                  >
                    View Career Paths
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;