import React, { useState, useEffect, useRef } from 'react';
import img1 from '../../assets/Gemini_Generated_Image_90qn3b90qn3b90qn.jpg';
import img2 from '../../assets/Gemini_Generated_Image_dijvp3dijvp3dijv.jpg';
import img3 from '../../assets/Gemini_Generated_Image_5nx4jd5nx4jd5nx4.jpg';
import img4 from '../../assets/Gemini_Generated_Image_dkrsjdkrsjdkrsjd.jpg';

import { 
  Database,  
  TrendingUp, 
  UserCheck, 
  BookOpen, 
  Globe,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Award,
  ThumbsUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CarouselSlides = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = 4;
  const intervalRef = useRef(null);
  const animationDuration = 800; // ms
  const navigate = useNavigate();


  const slides = [
    {
      icon: <Database className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: "Clinical Data Management",
      description: "Master essential techniques in clinical data collection, validation, and analysis for pharmaceutical and biotechnology research.",
      highlights: [
        "Electronic Data Capture (EDC) Systems",
        "Good Clinical Data Management Practices",
        "Data Quality and Validation"
      ],
      bgClass: "from-gray-800 to-gray-600",
      textColor: "text-gray-100",
      accentColor: "text-gray-200",
      backgroundImage: img1,
      path:"/clinicaldatamanagement"
    },
    {
      icon: <TrendingUp className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: "Career Acceleration Pathways",
      description: "Unlock diverse and lucrative career opportunities in pharmaceutical, biotechnology, and research organizations.",
      highlights: [
        "100% Placement Support",
        "Industry Expert Mentorship",
        "Practical Training with ClinOptima"
      ],
      bgClass: "from-gray-800 to-gray-600",
      textColor: "text-gray-100",
      accentColor: "text-gray-200",
      backgroundImage: img2,
      path:"/career"
    },
    {
      icon: <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: "Medical Coding Training",
      description: "Comprehensive ICD-10 medical coding training for healthcare diagnosis, procedures, and billing.",
      highlights: [
        "ICD-10-CM Coding Expertise",
        "Medical Terminology Mastery",
        "Healthcare Billing Integration"
      ],
      bgClass: "from-gray-800 to-gray-600",
      textColor: "text-gray-100",
      accentColor: "text-gray-200",
      backgroundImage: img3,
      path:"/medicalcoding"
    },
    {
      icon: <Globe className="w-16 h-16 md:w-20 md:h-20 text-white" />,
      title: "Industry-Oriented Training",
      description: "Virtual classrooms, practical assessments, and personalized learning designed by experts with decades of experience.",
      highlights: [
        "Interactive Classes",
        "LMS Support",
        "Value for Time"
      ],
      bgClass: "from-gray-800 to-gray-600",
      textColor: "text-gray-100",
      accentColor: "text-gray-200",
      backgroundImage: img4,
      path:"/contact"
    }
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeSlide) return;
    
    setIsAnimating(true);
    setActiveSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, animationDuration);
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(nextSlide, 7000);
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <div className="relative w-full h-auto min-h-[900px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden pt-24 md:pt-32">
      {/* Full-screen Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={`bg-${index}`}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out
                      ${activeSlide === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgClass} opacity-80`} />
          
          {/* Enhanced Overlay Pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 8%, transparent 8%)',
              backgroundSize: '25px 25px'
            }}
          />
        </div>
      ))}

      {/* Slides Content */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center mt-5
                      ${activeSlide === index ? 'z-10' : 'z-0'}`}
        >
          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 relative max-w-6xl">
            <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
              {/* Content Section - Now First (3 columns) */}
              <div className={`md:col-span-3 space-y-6 md:space-y-8 ${slide.textColor}
                             transition-all duration-1000 ease-in-out transform
                             ${activeSlide === index 
                               ? 'opacity-100 translate-y-0' 
                               : 'opacity-0 translate-y-10'}`}
              >
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fadeIn drop-shadow-lg 
                           mt-[100px] md:mt-0"
                  style={{
                    animationDelay: activeSlide === index ? '200ms' : '0ms',
                    animationDuration: '800ms',
                    animationFillMode: 'both'
                  }}
                >
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl lg:text-2xl font-medium opacity-90 animate-fadeIn drop-shadow-md"
                   style={{
                     animationDelay: activeSlide === index ? '400ms' : '0ms',
                     animationDuration: '800ms',
                     animationFillMode: 'both'
                   }}>
                  {slide.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 animate-fadeIn"
                     style={{
                       animationDelay: activeSlide === index ? '600ms' : '0ms',
                       animationDuration: '800ms',
                       animationFillMode: 'both'
                     }}>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-5 ${slide.accentColor} drop-shadow-md`}>
                      Key Highlights
                    </h3>
                    <ul className="space-y-3 md:space-y-4">
                      {slide.highlights.map((highlight, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center"
                          style={{
                            animationDelay: activeSlide === index ? `${800 + (idx * 150)}ms` : '0ms',
                            animationDuration: '500ms',
                            animationFillMode: 'both'
                          }}
                        >
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 flex-shrink-0" />
                          <span className="text-base md:text-lg font-medium">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="animate-fadeIn"
                         style={{
                           animationDelay: activeSlide === index ? '1000ms' : '0ms',
                           animationDuration: '800ms',
                           animationFillMode: 'both'
                         }}>
                      <button
                        onClick={() => navigate(slide.path)}
                        className="flex items-center group text-white bg-white/20 hover:bg-white/30 
                        px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium
                        transition-all duration-300 text-base md:text-lg shadow-lg">
                        Explore More
                        <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                    <div>
                      <p className={`text-sm md:text-base font-medium opacity-75 mt-6 md:mt-8 ${slide.accentColor}`}>
                        Enhancing Clinical Minds - Training Accelerator
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual/Icon Section - Now Second (2 columns) */}
              <div className={`md:col-span-2 relative 
                              transition-all duration-1000 ease-in-out transform
                              ${activeSlide === index 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-10'}`}
                   style={{
                     animationDelay: activeSlide === index ? '700ms' : '0ms',
                   }}>
                {/* Enhanced Icon Container with Float Animation */}
                <div className="relative h-48 md:h-72 flex items-center justify-center">
                  <div className={`flex items-center justify-center bg-white/15 backdrop-blur-sm
                                 rounded-full p-8 md:p-10 shadow-2xl animate-float transition-all duration-1000
                                 border border-white/20
                                 ${activeSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                    {slide.icon}
                    {/* Add a glow effect */}
                    <div className="absolute inset-0 rounded-full bg-white/5 blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Controls */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center z-30 space-x-3">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 md:h-4 rounded-full transition-all duration-300 shadow-md
                      ${activeSlide === slideIndex 
                        ? 'bg-white w-8 md:w-10' 
                        : 'bg-white/40 hover:bg-white/60 w-3 md:w-4'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Arrow Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 
                 bg-white/15 hover:bg-white/25 backdrop-blur-sm
                 rounded-full p-3 md:p-4 text-white z-30 
                 transition-all duration-300 shadow-lg border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 
                 bg-white/15 hover:bg-white/25 backdrop-blur-sm
                 rounded-full p-3 md:p-4 text-white z-30 
                 transition-all duration-300 shadow-lg border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CarouselSlides;