import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CourseType = {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
  modules: {
    title: string;
    topics: string[];
  }[];
  testimonials?: {
    name: string;
    position: string;
    content: string;
    avatar: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
};

const MedicalCodingCourse: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    // Replace with the actual path to your PDF file
    console.log("Ready To Download");
    
    const brochureUrl = "/brochures/Clinimode.pdf"; 
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Medical_Coding_Brochure.pdf"; // File name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToEnrollForm = () => {
    const enrollFormElement = document.getElementById('enroll-form-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const course: CourseType = {
    title: "MEDICAL CODING TRAINING",
    duration: "3 MONTHS",
    description: "Medical coding is the process of translating healthcare diagnosis, procedures, medical services, and equipment into standardized codes for billing, insurance claims, and medical records. Clinimode is a premier Medical Coding Training Institute offering comprehensive training programs designed to train students with the skills required to excel in the healthcare industry.",
    highlights: ["Industry recognized certification", "Placement assistance", "Expert instructors", "Hands-on training", "Career mentorship", "Access to industry networks"],
    modules: [
      {
        title: "Non Technical Modules",
        topics: ["Soft Skills", "Corporate Etiquette", "Interview Preparation", "LinkedIn Session"]
      },
      {
        title: "Technical Modules",
        topics: [
          "Introduction to Medical coding",
          "Medical terminologies",
          "ICD-10-CM Coding",
          "CPT Coding",
          "Medical Billing",
          "Certification Exam Preparation"
        ]
      }
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        position: "Medical Coding Specialist at Apollo Hospitals",
        content: "The Medical Coding program transformed my career trajectory. The comprehensive curriculum and hands-on training prepared me for real-world challenges in medical coding.",
        avatar: "PS"
      },
      {
        name: "Rajesh Kumar",
        position: "Healthcare Data Analyst",
        content: "The instructors bring years of industry experience to the classroom. Their mentorship was invaluable in helping me secure a position immediately after completion.",
        avatar: "RK"
      },
      {
        name: "Ananya Patel",
        position: "Senior Coder at Manipal Hospitals",
        content: "This program's industry connections and placement assistance helped me transition from a non-medical background to a specialized role in healthcare.",
        avatar: "AP"
      }
    ],
    faqs: [
      {
        question: "Is prior medical knowledge required for this program?",
        answer: "No prior medical knowledge is required. Our curriculum is designed to build your medical terminology and anatomy knowledge from the ground up."
      },
      {
        question: "What certification options are available?",
        answer: "Students can prepare for and take the Certified Professional Coder (CPC) exam, which is internationally recognized in the medical coding industry."
      },
      {
        question: "What is the placement rate for graduates?",
        answer: "Over 85% of our graduates secure relevant positions within 3 months of program completion."
      }
    ]
  };
  
  // Handle sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsSticky(window.scrollY > headerRef.current.offsetHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };
  
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-transparent min-h-screen font-sans flex justify-center">
      {/* Main container with 90% width */}
      <div className="w-[90%] max-w-screen-2xl">
        <div className="flex justify-center mt-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full">
            <div 
              className="px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center space-x-2 bg-[#f63735] shadow-lg"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 3.96 1.696a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM5.82 10.477l-1.144.489 6.964 2.984a1 1 0 00.788 0l7-3-1.147-.491-6.623 2.839a1 1 0 01-.788 0l-5.05-2.164z" />
                <path d="M3.5 11.909v3.182c0 .379.214.725.554.894l6.304 3.145c.336.168.726.168 1.062 0l3.58-1.79v-3.731l-7 3-4.5-1.929z" />
              </svg>
              <span className="text-xs md:text-base">Medical Coding Training</span>
            </div>
          </div>
        </div>     

        {/* Main Content */}
        <div className="w-full pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Overview Section */}
              <section id="overview" className="mb-12 md:mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center mr-3 md:mr-4 bg-white text-[#f63735]">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black">Course Overview</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col">
                      <div>
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-800 mb-3 md:mb-4">
                          DURATION: {course.duration}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{course.title}</h3>
                        <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                          {course.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-6">
                          <div className="bg-red-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-red-800 mb-2 md:mb-3 text-sm md:text-base">Program Benefits</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {course.highlights.slice(0, 3).map((highlight, i) => (
                                <li key={i} className="flex items-start">
                                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm md:text-base text-gray-700">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-red-50 rounded-lg p-3 md:p-4">
                            <h4 className="font-semibold text-red-800 mb-2 md:mb-3 text-sm md:text-base">Career Outcomes</h4>
                            <ul className="space-y-1 md:space-y-2">
                              {course.highlights.slice(3, 6).map((highlight, i) => (
                                <li key={i} className="flex items-start">
                                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm md:text-base text-gray-700">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Who are Eligible?</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Graduates from Medical Background: MBBS, BAMS, BHMS, BDS, BUMS</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Graduates from Life Science Background: Pharm D/M.Pharm/B.Pharm, M.Sc. in Biochemistry/Biotechnology/Microbiology/Organic Chemistry/General Chemistry</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Graduates from Computer Science Background: B.Sc/M.Sc Computer Science, Bioinformatics, Information Technology, B.Tech Biotechnology, Pharmaceutical Engineering</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Career Opportunities</h4>
                          <p className="text-sm md:text-base text-gray-700 mb-3">
                            After completing a medical coding course and obtaining certification, job opportunities are abundant in several areas:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Hospitals and Healthcare Facilities</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Insurance Companies</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Private Medical Practices</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Government Health Agencies</span>
                            </li>
                            <li className="flex items-start">
                              <svg className="w-5 h-5 mr-2 mt-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm md:text-base text-gray-700">Academic health centers</span>
                            </li>
                          </ul>
                        </div>
                        
                        <motion.button 
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-white shadow-md bg-[#f63735] mt-6"
                          onClick={() => scrollToSection('curriculum')}
                        >
                          View Curriculum
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Curriculum Section */}
              <section id="curriculum" className="mb-12 md:mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center mr-3 md:mr-4 bg-white text-[#f63735]">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-black">Curriculum</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900">Course Curriculum Structure</h3>
                    
                    <div className="space-y-3 md:space-y-4">
                      {course.modules.map((module, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button 
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-left flex justify-between items-center ${
                              expandedModule === index ? 'bg-gray-50' : 'bg-white'
                            }`}
                            onClick={() => toggleModule(index)}
                          >
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-red-100 text-red-900">
                                {index + 1}
                              </div>
                              <span className="font-medium text-gray-900 text-sm md:text-base">{module.title}</span>
                            </div>
                            <svg className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${expandedModule === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                          
                          {expandedModule === index && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 py-3 md:px-5 md:py-4 border-t border-gray-200 bg-gray-50"
                            >
                              <ul className="space-y-2 md:space-y-3">
                                {module.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm md:text-base text-gray-700">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Our Services</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { title: "Virtual classroom", icon: "🖥️" },
                          { title: "Interactive Classes", icon: "👥" },
                          { title: "Practical Assessments", icon: "📋" },
                          { title: "Personalized Learning", icon: "🧠" },
                          { title: "LMS Support", icon: "📱" },
                          { title: "100% placement Support", icon: "🎯" },
                          { title: "Cost Effective", icon: "💰" },
                          { title: "Value for Time", icon: "⏱️" },
                          { title: "Reside & Dine", icon: "🏠" }
                        ].map((service, index) => (
                          <div key={index} className="bg-red-50 rounded-lg p-4 flex items-center">
                            <span className="text-2xl mr-3">{service.icon}</span>
                            <span className="text-sm md:text-base font-medium text-gray-800">{service.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Expert Faculty And Mentors</h4>
                      <p className="text-sm md:text-base text-gray-700 mb-4">
                        Our mentors bring over three decades of combined experience in healthcare, pharmaceuticals, and research. At Clinimode Research Institute, our experienced mentors provide industry-focused training to ensure you excel and stand out during placement opportunities.
                      </p>
                    </div>
                    
                    <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center md:justify-between">
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-0">
                        Ready to advance your career in medical coding?
                      </p>
                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <motion.button 
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 md:px-5 md:py-2.5 border border-gray-300 rounded-lg text-sm md:text-base font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                          onClick={handleDownload}
                        >
                          Download Brochure
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium text-white bg-[#f63735] hover:bg-red-700 transition-colors"
                          onClick={scrollToEnrollForm}
                          
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* FAQs Section */}
              <section id="faqs" className="mb-12 md:mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-white text-[#f63735]">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900">Common Questions About Medical Coding Training</h3>
                    
                    <div className="space-y-3 md:space-y-4">
                      {course.faqs?.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button 
                            className={`w-full px-4 py-3 md:px-5 md:py-4 text-left flex justify-between items-center ${
                              activeFaq === index ? 'bg-gray-50' : 'bg-white'
                            }`}
                            onClick={() => toggleFaq(index)}
                          >
                            <span className="font-medium text-gray-900 text-sm md:text-base">{faq.question}</span>
                            <svg className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                          
                          {activeFaq === index && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-4 py-3 md:px-5 md:py-4 border-t border-gray-200 bg-gray-50"
                            >
                              <p className="text-sm md:text-base text-gray-700">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      ))}

                      {/* Additional FAQs */}
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          className={`w-full px-4 py-3 md:px-5 md:py-4 text-left flex justify-between items-center ${
                            activeFaq === 3 ? 'bg-gray-50' : 'bg-white'
                          }`}
                          onClick={() => toggleFaq(3)}
                        >
                          <span className="font-medium text-gray-900 text-sm md:text-base">What types of jobs can I get after completing this course?</span>
                          <svg className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${activeFaq === 3 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {activeFaq === 3 && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 py-3 md:px-5 md:py-4 border-t border-gray-200 bg-gray-50"
                          >
                            <p className="text-sm md:text-base text-gray-700">Graduates can pursue roles such as Medical Coder, Billing Specialist, Coding Auditor, Clinical Documentation Improvement Specialist, and many more positions in hospitals, insurance companies, and healthcare facilities.</p>
                          </motion.div>
                        )}
                      </div>

                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          className={`w-full px-4 py-3 md:px-5 md:py-4 text-left flex justify-between items-center ${
                            activeFaq === 4 ? 'bg-gray-50' : 'bg-white'
                          }`}
                          onClick={() => toggleFaq(4)}
                        >
                          <span className="font-medium text-gray-900 text-sm md:text-base">How is the course delivered?</span>
                          <svg className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${activeFaq === 4 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {activeFaq === 4 && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 py-3 md:px-5 md:py-4 border-t border-gray-200 bg-gray-50"
                          >
                            <p className="text-sm md:text-base text-gray-700">The course is delivered through a blend of virtual classrooms, interactive sessions, practical assignments, and LMS support. We offer both online and offline modes to accommodate different learning preferences.</p>
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          className={`w-full px-4 py-3 md:px-5 md:py-4 text-left flex justify-between items-center ${
                            activeFaq === 5 ? 'bg-gray-50' : 'bg-white'
                          }`}
                          onClick={() => toggleFaq(5)}
                        >
                          <span className="font-medium text-gray-900 text-sm md:text-base">What kind of support will I receive for job placement?</span>
                          <svg className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transform transition-transform ${activeFaq === 5 ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {activeFaq === 5 && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 py-3 md:px-5 md:py-4 border-t border-gray-200 bg-gray-50"
                          >
                            <p className="text-sm md:text-base text-gray-700">We provide comprehensive placement support including resume building, interview preparation, LinkedIn profile optimization, and direct connections with healthcare industry partners. Our placement cell actively helps students find suitable job opportunities.</p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Testimonials Section */}
              <section id="testimonials" className="mb-12 md:mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-white text-[#f63735]">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">Student Testimonials</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold mb-6 text-gray-900">What Our Students Say</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {course.testimonials?.map((testimonial, index) => (
                        <div key={index} className="bg-red-50 rounded-lg p-4 md:p-5">
                          <div className="flex items-center mb-3 md:mb-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-200 flex items-center justify-center text-red-800 font-medium text-sm md:text-base mr-3">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                              <p className="text-xs md:text-sm text-gray-600">{testimonial.position}</p>
                            </div>
                          </div>
                          <p className="text-sm md:text-base text-gray-700 italic">"{testimonial.content}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Call to Action Section */}
              <section id="cta" className="mb-12 md:mb-16">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="md:flex md:items-center md:justify-between">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Ready to Start Your Career in Medical Coding?</h3>
                        <p className="text-sm md:text-base text-white opacity-90 mb-6 max-w-lg">
                          Join Clinimode's 3-month Medical Coding program and gain in-demand skills for the healthcare industry. Our comprehensive curriculum and job placement assistance will help you launch your career.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                          <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 rounded-lg text-base font-medium text-red-700 bg-white hover:bg-gray-100 transition-colors"
                            onClick={scrollToEnrollForm}
                          
                          >
                            Enroll Now
                          </motion.button>
                          <motion.button 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 rounded-lg text-base font-medium text-white border border-white/40 hover:bg-white/10 transition-colors"
                            onClick={handleDownload}
                          >
                            Download Brochure
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="md:w-1/3 lg:w-1/4 hidden md:block">
                        <div className="bg-white/20 backdrop-blur-sm p-1 rounded-lg">
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-base text-gray-900 mb-2">Quick Contact</h4>
                            <div className="space-y-2">
                              <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>info@clinimode.com</span>
                              </div>
                              <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>+91 93805 44537 / +91 93805 05756</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Footer */}
              <footer className="text-center text-white/70 text-sm pb-8">
                <p>&copy; {new Date().getFullYear()} Clinimode Research Institute. All rights reserved.</p>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MedicalCodingCourse;              
         