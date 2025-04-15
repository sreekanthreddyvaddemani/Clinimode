import { useEffect, useRef, useState } from "react";
import { 
  Briefcase,
  ArrowRight,
  Building2,
  Upload
} from 'lucide-react';
// Vendor Logo Imports
import IQVIA from "../../assets/download-removebg-preview.png";
import PPD from "../../assets/images-removebg-preview.png";
import Accenture from "../../assets/Accenture.png";
import AstraZeneca from "../../assets/AstraZeneca.jpeg";
import Bioclinica from "../../assets/Bioclinica.png";
import Cipla from "../../assets/Cipla.png";
import Cognizant from "../../assets/Cognizant.jpeg";
import OPTUM from "../../assets/OPTUM.png";
import OmegaHealthcare from "../../assets/Omega Healthcare.jpeg";
import ClinChoice from "../../assets/clinchoice_logo.svg";
import HealthMinds from "../../assets/HealthMinds.png";
import Medipharm from "../../assets/Medipharm.png";
import NovoNordisk from "../../assets/Novo Nordisk.png";
import PALMIST from "../../assets/PALMIST.png";
import Parexel from "../../assets/Parexel.png";
import PharmOlam from "../../assets/Pharm Olam.png";
import SIEMENS from "../../assets/SIEMENS.png";
import SMO from "../../assets/SMO.png";
import SymphonyAI from "../../assets/Symphony AI.png";
import SyneosHealth from "../../assets/Syneos Health.jpeg";
import LIFEVISION from "../../assets/LIFEVISION-LOGO.png";
import radientReserch from "../../assets/radient Reserch.jpeg";
import clinimed from "../../assets/clinimed.png";
import Medopharm from "../../assets/Logos-medo-1.png";


const VendorCarousel = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);

  // Vendor logos configuration
  const vendorLogos = [
    { image: IQVIA, name: "IQVIA Holdings Inc." },
    { image: PPD, name: "PPD (Pharmaceutical Product Development)" },
    { image: Accenture, name: "Accenture plc" },
    { image: AstraZeneca, name: "AstraZeneca PLC" },
    { image: Bioclinica, name: "BioClinica (A Clario Company)" },
    { image: Cipla, name: "Cipla Limited" },
    { image: Cognizant, name: "Cognizant Technology Solutions" },
    { image: OPTUM, name: "Optum (UnitedHealth Group)" },
    { image: OmegaHealthcare, name: "Omega Healthcare Investors" },
    { image: ClinChoice, name: "ClinChoice" },
    { image: HealthMinds, name: "HealthMinds Clinical Research" },
    { image: Medipharm, name: "MediPharm Solutions" },
    { image: NovoNordisk, name: "Novo Nordisk A/S" },
    { image: PALMIST, name: "Palmist Analytics" },
    { image: Parexel, name: "Parexel International" },
    { image: PharmOlam, name: "Pharm-Olam International" },
    { image: SIEMENS, name: "Siemens Healthineers" },
    { image: SMO, name: "SMO Clinical Research" },
    { image: SymphonyAI, name: "SymphonyAI Life Sciences" },
    { image: SyneosHealth, name: "Syneos Health" },
    { image: LIFEVISION, name: "LifeVision Healthcare Research" },
    { image: radientReserch, name: "Radiant Research Inc." },
    { image: clinimed, name: "CliniMed LifeSciences Pvt. Ltd." },
    { image: Medopharm, name: "Medopharm Pvt. Ltd." }
];

  // Rest of your component code...
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div 
    ref={carouselRef}
    className={`relative w-full text-white py-12 md:py-16 lg:py-20 overflow-hidden transition-all duration-1000 ease-in-out ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}
  >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Header Section */}
        <div 
          className={`mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full">
              <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-bold mb-3 md:mb-4">
            Career Opportunities with Top Employers
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
            Empowering Your Path: Connecting You with Future Employers for a Bright Career!
          </p>
        </div>

        {/* Sliding Carousel */}
        <div 
          className={`relative w-full overflow-hidden transition-all duration-1000 delay-700 ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex gap-6 md:gap-10 animate-slide">
            {vendorLogos.concat(vendorLogos).map((vendor, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center space-y-2 flex-shrink-0"
              >
                <div
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 
                              bg-white rounded-lg overflow-hidden 
                              border border-gray-200 shadow-md
                              flex items-center justify-center
                              transition-transform duration-300 hover:scale-105"
                >
                  <img 
                    src={vendor.image} 
                    alt={vendor.name}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-3 py-1 mt-2 shadow-sm">
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {vendor.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>


       
        <div 
          className={`mt-20 md:mb-12 transition-all duration-1000 delay-300 ${
            isLoaded 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full">
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-bold mb-3 md:mb-4">
            Our Vendors
          </h2>
          <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
            Showcasing Our Trusted Vendor Network
          </p>
        </div>
        <div 
  className={`mt-8 md:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 
              transition-all duration-1000 delay-1000 ${
                isLoaded 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
>

  
  {vendorLogos.map((vendor, index) => (
    <VendorCard key={index} vendor={vendor} />
  ))}
</div>


        {/* Call to Action */}
        <div 
          className={`mt-8 md:mt-12 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 
                      transition-all duration-1000 delay-1300 ${
                        isLoaded 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-10 opacity-0'
                      }`}
        >
          <a href="/career" className="w-full sm:w-auto">
            <button 
              className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full 
                         hover:bg-blue-700 transition-colors duration-300 
                         font-semibold shadow-lg w-full flex items-center justify-center"
            >
              Explore Careers <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </a>
          {/* <a href="/upload-resume" className="w-full sm:w-auto">
            <button 
              className="bg-transparent border-2 border-blue-600 text-blue-600 
                         px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-600 
                         hover:text-white transition-colors duration-300 
                         font-semibold w-full flex items-center justify-center"
            >
              <Upload className="mr-2 w-4 h-4" /> Upload Resume
            </button>
          </a> */}
        </div>
      </div>

      {/* Styles for Smooth Slide Animation */}
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-slide {
            display: flex;
            width: max-content;
            animation: slide 20s linear infinite;
          }

          @media (max-width: 640px) {
            .animate-slide {
              animation-duration: 15s;
            }
          }
        `}
      </style>
    </div>
  );
};

export default VendorCarousel;

const VendorCard = ({ vendor }) => {
  return (
    <div className="relative group">
      {/* Background blur effect on hover */}
      <div className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 
                      group-hover:opacity-10 blur-md transition-all duration-300 -z-10" />
      
      {/* Card container */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm
                     transition-all duration-300 group-hover:shadow-md
                     group-hover:border-blue-200 group-hover:-translate-y-1
                     h-full flex flex-col">
        {/* Logo container with subtle blue accent on hover */}
        <div className="bg-gray-50 group-hover:bg-blue-50 rounded-lg p-3 mb-3
                       transition-colors duration-300 flex items-center justify-center
                       h-24">
          <img 
            src={vendor.image} 
            alt={vendor.name} 
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        {/* Vendor name with blue accent on hover */}
        <p className="text-center text-gray-800 group-hover:text-blue-600 
                     font-medium text-sm mt-auto transition-colors duration-300">
          {vendor.name}
        </p>
      </div>
    </div>
  );
};
