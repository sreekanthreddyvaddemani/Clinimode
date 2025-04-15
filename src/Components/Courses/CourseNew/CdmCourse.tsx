import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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

const CdmCourse: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
    const navigate=useNavigate();
  

  const handleDownload = () => {
    // Replace with the actual path to your PDF file
    console.log("Ready To Download");
    
    const brochureUrl = "/brochures/Clinimode.pdf"; 
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Clinical_Data_Management_Brochure.pdf"; // File name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const course: CourseType = {
    title: "INDUSTRY ORIENTED COURSE IN CLINICAL DATA MANAGEMENT",
    duration: "3 MONTHS",
    description: "Clinical data collection and analysis are important steps in the clinical trial process. Precise data collection and standardization yields accurate statistical results which are the base for pharmaceutical and biotechnological companies to make significant decisions on clinical trial molecules.",
    highlights: ["Virtual classroom", "Interactive Classes", "Personalized Learning", "Cost Effective", "100% placement Support", "LMS Support"],
    modules: [
      {
        title: "Introduction to Clinical Data Management",
        topics: [
          "Overview of CDM and its importance in clinical research",
          "Roles and responsibilities of a clinical data manager",
          "Clinical Trial Process",
          "Phases of clinical trials",
          "Data flow and management in clinical trials"
        ]
      },
      {
        title: "Data Collection and Management",
        topics: [
          "Designing Case Report Forms (CRFs)",
          "Electronic Data Capture (EDC) systems",
          "Data cleaning and validation techniques",
          "Managing discrepancies and ensuring data integrity",
          "Database design and setup",
          "Basics of SQL and SAS programming"
        ]
      },
      {
        title: "Regulatory Requirements and Analysis",
        topics: [
          "Understanding FDA, EMA, and ICH guidelines",
          "Good Clinical Data Management Practices (GCDMP)",
          "Statistical analysis techniques",
          "Generating reports and data visualization",
          "Practical exercises using real-world case studies",
          "Hands-on training with ClinOptima platform"
        ]
      },
      {
        title: "Non-Technical Modules",
        topics: [
          "Soft Skills",
          "Corporate Etiquette",
          "Interview Preparation",
          "LinkedIn Session"
        ]
      }
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        position: "Clinical Data Manager",
        content: "The Clinical Data Management program transformed my understanding of clinical trials. The comprehensive curriculum and hands-on training prepared me for complex data management challenges.",
        avatar: "PS"
      },
      {
        name: "Rajesh Kumar",
        position: "Clinical Data Coordinator",
        content: "The instructors bring extensive industry experience to the classroom. Their guidance on regulatory compliance and data standards was instrumental in helping me secure a position at a leading CRO.",
        avatar: "RK"
      },
      {
        name: "Ananya Patel",
        position: "Data Analyst",
        content: "This program's focus on EDC systems and practical training helped me transition from a general IT background to a specialized role in clinical research. The placement assistance was exceptional.",
        avatar: "AP"
      }
    ],
    faqs: [
      {
        question: "Who is eligible for this course?",
        answer: "Graduates from Medical Background (MBBS, BAMS, BHMS, BDS, BUMS), Life Science Background (Pharm D, M.Pharm, B.Pharm, M.Sc. in Biochemistry/Biotechnology/Microbiology/Organic Chemistry/General Chemistry), and Computer Science Background (B.Sc/M.Sc Computer Science, Bioinformatics, Information Technology, B.Tech Biotechnology, Pharmaceutical Engineering)."
      },
      {
        question: "What career opportunities are available after completing this course?",
        answer: "Graduates can work in academic health centers, government agencies, contract research organizations, pharmaceutical and biotechnological companies, and medical firms. Roles include Clinical Data Coordinator, Clinical Data Manager, Clinical Data Scientist, Data Quality Lead, Database Programmer/Developer, and Clinical Data Analyst."
      },
      {
        question: "Why should I choose Clinical Data Management as a career?",
        answer: "The job outlook for Clinical Data Management roles is highly promising, driven by growing demand for efficient data handling in clinical research and healthcare. The industry is expanding, particularly with Pharma and Biotech companies establishing GCCs in India, creating approximately 15,000+ jobs year-on-year."
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

  const scrollToEnrollForm = () => {
    const enrollFormElement = document.getElementById('enroll-form-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (course.testimonials) {
        setActiveTestimonial(prev => 
          prev === course.testimonials!.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [course]);

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
        <div ref={headerRef} className="flex justify-center mt-6 relative z-10">
          <div className="bg-white/10 border backdrop-blur-sm p-1 rounded-full flex">
            <button 
              className="px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center space-x-2 bg-[#f63735] shadow-lg"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="black" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 3.96 1.696a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM5.82 10.477l-1.144.489 6.964 2.984a1 1 0 00.788 0l7-3-1.147-.491-6.623 2.839a1 1 0 01-.788 0l-5.05-2.164z" />
                <path d="M3.5 11.909v3.182c0 .379.214.725.554.894l6.304 3.145c.336.168.726.168 1.062 0l3.58-1.79v-3.731l-7 3-4.5-1.929z" />
              </svg>
              <span className="text-xs text-black md:text-base">Clinical Data Management</span>
            </button>
          </div>
        </div>     

        {/* Main Content */}
        <div className="w-full pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Section */}
            <section id="overview" className="mb-12 md:mb-16">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-white text-gray-900">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl text-black font-bold">Course Overview</h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-full">
                      <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs md:text-sm font-medium text-gray-800 mb-3 md:mb-4">
                        DURATION: {course.duration}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{course.title}</h3>
                      <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-6">
                        <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Program Benefits</h4>
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
                        <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm md:text-base">Career Outcomes</h4>
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
                      
                      <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-white shadow-md bg-[#f63735]"
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
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-white text-gray-900">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-black">Curriculum</h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900">What You'll Learn</h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    {course.modules.map((module, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button className={`w-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center text-left ${
                          expandedModule === index ? 'bg-gray-50' : 'bg-white'
                        }`}
                        onClick={() => toggleModule(index)}
                        >
                          <div className="flex items-center">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 bg-white text-red-700 border border-gray-200">
                              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <h4 className="font-medium text-gray-900 text-sm md:text-base">{module.title}</h4>
                          </div>
                          <svg 
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              expandedModule === index ? 'transform rotate-180' : ''
                            }`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {expandedModule === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 bg-gray-50"
                            >
                              <div className="p-4 md:p-6">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                  {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start">
                                      <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                      </svg>
                                      <span className="text-sm md:text-base text-gray-700">{topic}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-white w-full sm:w-auto flex items-center justify-center bg-[#f63735]"
                      onClick={handleDownload}
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Brochure
                    </motion.button>
                    <button 
                      className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 w-full sm:w-auto flex items-center justify-center"
                      onClick={() => scrollToSection('testimonials')}
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                         See What Students Say
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="mb-12 md:mb-16">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-white text-gray-900">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">Student Testimonials</h2>
              </div>
              
              {course.testimonials && (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="relative h-56 md:h-64">
                      <AnimatePresence mode="wait">
                        {course.testimonials.map((testimonial, index) => (
                          activeTestimonial === index && (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 flex flex-col"
                            >
                              <div className="flex-1 flex flex-col justify-center">
                                <div className="mb-3 md:mb-4">
                                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.157-3.995 5.666h2.994V21h-8.977zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.157-3.996 5.666h2.993V21H.017z" />
                                  </svg>
                                </div>
                                <p className="text-gray-700 text-base md:text-lg mb-4 md:mb-6 italic">
                                  "{testimonial.content}"
                                </p>
                                <div className="flex items-center">
                                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold mr-3">
                                    {testimonial.avatar}
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.position}</p>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )
                        ))}
                      </AnimatePresence>
                    </div>
                    
                    <div className="flex justify-center mt-4 space-x-2">
                      {course.testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                            activeTestimonial === index 
                              ? 'bg-[#f63735]'
                              : 'bg-gray-300'
                          }`}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
            
            {/* FAQs Section */}
            {course.faqs && (
              <section id="faqs" className="mb-12 md:mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 bg-white text-gray-900">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="space-y-3 md:space-y-4">
                      {course.faqs.map((faq, index) => (
                       <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                       <button 
                         className="w-full px-4 py-3 md:px-6 md:py-4 flex justify-between items-center text-left"
                         onClick={() => toggleFaq(index)}
                       >
                         <h4 className="font-medium text-gray-900 text-sm md:text-base pr-4">{faq.question}</h4>
                         <svg 
                           className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                             activeFaq === index ? 'transform rotate-180' : ''
                           }`}
                           fill="currentColor" 
                           viewBox="0 0 20 20"
                         >
                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                         </svg>
                       </button>
                     
                       <AnimatePresence>
                         {activeFaq === index && (
                           <motion.div
                             initial={{ height: 0, opacity: 0 }}
                             animate={{ height: 'auto', opacity: 1 }}
                             exit={{ height: 0, opacity: 0 }}
                             transition={{ duration: 0.3 }}
                             className="border-t border-gray-200"
                           >
                             <div className="p-4 md:p-6 bg-gray-50">
                               <p className="text-sm md:text-base text-gray-700">{faq.answer}</p>
                             </div>
                           </motion.div>
                         )}
                       </AnimatePresence>
                     </div>
                                           ))}
                                         </div>
                                         
                                         <div className="mt-6 md:mt-8 text-center">
                                           <p className="text-sm md:text-base text-gray-600 mb-4">Still have questions?</p>
                                           <motion.button 
                                             whileHover={{ scale: 1.03 }}
                                             whileTap={{ scale: 0.97 }}
                                             className="px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium text-white bg-[#f63735] inline-flex items-center"
                                              onClick={() => navigate("/contact")}

                                           >
                                             <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                             </svg>
                                             Contact Us
                                           </motion.button>
                                         </div>
                                       </div>
                                     </div>
                                   </section>
                                 )}
                                 
                                 {/* Call to Action */}
                                 <section id="cta" className="mb-12 md:mb-16">
                                   <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                                     <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-red-50 to-orange-50">
                                       <div className="text-center">
                                         <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Ready to Advance Your Career?</h3>
                                         <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
                                           Join our Clinical Data Management program and gain the skills and knowledge needed to excel in this rapidly growing field. Limited seats available for the upcoming batch.
                                         </p>
                                         <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                                           <motion.button 
                                             whileHover={{ scale: 1.03 }}
                                             whileTap={{ scale: 0.97 }}
                                             className="px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium text-white bg-[#f63735] shadow-lg inline-flex items-center"
                                             onClick={scrollToEnrollForm}
                                          >
                                             <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                               <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                               <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                                             </svg>
                                             Enroll Now
                                           </motion.button>
                                           <button 
                                             className="px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-300 inline-flex items-center"
                                             onClick={handleDownload}
                                           >
                                             <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                               <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                             </svg>
                                             Download Brochure
                                           </button>
                                         </div>
                                       </div>
                                     </div>
                                   </div>
                                 </section>
                               </motion.div>
                             </div>
                           </div>
                         </div>
                       );
                     };
                     
                     export default CdmCourse;