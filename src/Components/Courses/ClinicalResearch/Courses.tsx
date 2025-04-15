import { lazy, Suspense, useEffect } from "react";
import HeroSection from "./HeroSection";
import CourseOptions from "./CourseOptions";
import CourseModules from "./CourseModules";
import CliniTestimonials from "./CliniTestimonials";
import CallToAction from "./CallToAction";
import ClinicalDataManagementFeature from "./ClinicalDataManagementFeature";
import EnrollForm from "../../EnrollForm";
import PresentationSlides from "../PresentatioSLides";

// const MedicalCoding = lazy(() => import("../MedicalCoding"));
// const ClinicalResearch = lazy(() => import("./ClinicalResearch"));



function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when page loads
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Background Gradient */}
      <div className="relative font-sans bg-white text-gray-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 z-0"></div>
        
        {/* Floating Bubble Animation */}
        <div 
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(50)].map((_, i) => ( // Increased to 50 bubbles
            <div 
              key={i}
              className="absolute rounded-full bg-white/10" // Increased opacity for better visibility
              style={{
                width: `${Math.random() * 15 + 5}px`,  // Bigger bubbles
                height: `${Math.random() * 15 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`, // Adjusted timing for variation
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
        <HeroSection />
      <CourseOptions />
        <ClinicalDataManagementFeature/>
      <CourseModules />
      <CliniTestimonials />
      <CallToAction />
      <EnrollForm/>
      <PresentationSlides/>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); } // More movement
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </Suspense>
  );
}

export default Courses;



