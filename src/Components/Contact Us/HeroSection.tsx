import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import EnrollForm from '../EnrollForm'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

 
  const scrollToEnrollForm = () => {
    const enrollFormElement = document.getElementById('enroll-form-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const stats = [
    { value: "100%", label: "Placement Support", icon: <div className="text-[#d50a2f] text-2xl">🏆</div> },
    { value: "2", label: "Specializations", icon: <div className="text-[#d50a2f] text-2xl">🎓</div> },
    { value: "50+", label: "Top Employers", icon: <div className="text-[#d50a2f] text-2xl">🌐</div> }
  ];

  return (
    <div className="relative overflow-hidden min-h-[10vh] flex items-center w-full">
    

      <div className={`container mx-auto mt-10 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 py-12 md:py-16 lg:py-20 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#d50a2f]/20 px-4 py-2 rounded-full inline-flex items-center">
              <span className="text-[#d50a2f] font-semibold text-sm sm:text-base">Industry Oriented Training!</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight">
              <span className="text-[#d50a2f]">Advanced Program in</span><br />
              Clinical Data Management <span className="text-[#d50a2f]">+</span> Medical Coding
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
              Learn to transform clinical trial data with quality assurance, regulatory compliance, and accurate medical coding for healthcare documentation.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 my-6 md:my-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-100 p-3 sm:p-4 rounded-lg border border-gray-200 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3">
                    <div className="mb-1 sm:mb-0 flex-shrink-0">
                      {stat.icon}
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-700 whitespace-normal">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Modified the Enroll Now button to open the modal */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToEnrollForm} 
                className="bg-[#d50a2f] hover:bg-[#b30825] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <span>Enroll Now</span>
                <span>→</span>
              </button>

              <button
                className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-300"
                onClick={() => navigate("/clinicaldatamanagement")}
              >
                Program Details
              </button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4 md:space-y-6 mt-8 lg:mt-0">
            {[
              { 
                icon: <div className="text-[#d50a2f] text-2xl">🗄️</div>,
                title: "Clinical Data Management",
                description: "Master data collection, processing, and quality control for clinical trials"
              },
              { 
                icon: <div className="text-[#d50a2f] text-2xl">📝</div>,
                title: "Medical Coding (ICD-10)",
                description: "Translate diagnoses, procedures, and medical services into standardized codes"
              },
              { 
                icon: <div className="text-[#d50a2f] text-2xl">🏥</div>,
                title: "Practical Training",
                description: "Hands-on experience with ClinOptima platform and real-world case studies"
              },
              { 
                icon: <div className="text-[#d50a2f] text-2xl">🛡️</div>,
                title: "Expert Faculty & Mentors",
                description: "Learn from professionals with over three decades of combined experience"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gray-100 p-4 rounded-xl border border-gray-200 backdrop-blur-sm hover:border-[#d50a2f] transition-all duration-300 delay-${index + 1} ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#d50a2f]/20 p-2 sm:p-3 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities Section */}
        <div className={`mt-12 sm:mt-16 md:mt-20 text-center transition-all duration-700 delay-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-600 mb-4 sm:mb-6">Career opportunities at leading organizations</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {['IQVIA', 'AstraZeneca', 'Novo Nordisk', 'Parexel', 'Syneos Health', 'Cipla', 'Accenture'].map((company, i) => (
              <div key={i} className="text-gray-800 text-base sm:text-lg md:text-xl font-medium opacity-80 hover:opacity-100 transition-opacity">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;