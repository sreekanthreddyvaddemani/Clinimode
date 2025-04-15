import { useEffect, lazy, Suspense } from "react";
import MissionAndVision from "./MissionAndVision";
import People from "./People";
import Content from "./Content";
import EnrollForm from "../EnrollForm";

const HeroSection = lazy(() => import("./HeroSection"));
const AboutSection = lazy(() => import("./AboutSection"));
const VendorCarousel = lazy(() => import("./VendorCarousel"));

function About() {
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
        {/* Subtle white gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 z-0"></div>
        
        {/* Floating Bubble Animation - adjusted for light theme */}
        <div 
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 60%)',
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-gray-200/30" // Lighter bubbles
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

        {/* Page Content */}
        <div className="relative z-10">
          <HeroSection />
          <Content />
          <People />
          <AboutSection />
          <MissionAndVision />
          <div id="enroll-form-section">
            <EnrollForm/>
          </div>
          <VendorCarousel />
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </Suspense>
  );
}

export default About;