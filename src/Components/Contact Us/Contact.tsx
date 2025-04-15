import { useEffect, lazy, Suspense } from "react";
import EnrollForm from "../EnrollForm";

const HeroSection = lazy(() => import("./HeroSection"));
const ContactSection = lazy(() => import("./ContactSection"));
const VendorCarousel = lazy(() => import("../About/VendorCarousel"));

function Contact() {
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
        <div className="absolute inset-0 z-0"></div>
        
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

        {/* Page Content */}
        <div className="relative z-10">
        <HeroSection />
        <ContactSection />
        <VendorCarousel />
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

export default Contact;




