import { lazy, Suspense, useEffect } from "react";
import HeroSection from "./HeroSection";
import CourseOptions from "./CourseOptions";
import CourseModules from "./CourseModules";
import CliniTestimonials from "./CliniTestimonials";
import CallToAction from "./CallToAction";
import ClinicalDataManagementFeature from "./ClinicalDataManagementFeature";
import EnrollForm from "../../EnrollForm";
import CdmCourse from "./CdmCourse";

const MedicalCoding = lazy(() => import("../MedicalCoding/MedicalCoding"));
// const ClinicalResearch = lazy(() => import("./ClinicalResearch"));



function Courses() {
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
    <Suspense fallback={<div>Loading...</div>}>
      {/* Background Gradient */}
      <div className="relative font-sans bg-white text-gray-700 overflow-hidden">
        <div className="absolute inset-0  z-0"></div>
        
        {/* Floating Bubble Animation */}
       
        <div className="absolute inset-0 overflow-hidden z-0 ">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10 "
              style={{
                width: `${Math.random() * 15 + 5}px`,
                height: `${Math.random() * 15 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>


        <div className="relative z-10">
        <HeroSection />
        <CdmCourse />
        <div id="enroll-form-section">
            <EnrollForm/>
          </div>
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



