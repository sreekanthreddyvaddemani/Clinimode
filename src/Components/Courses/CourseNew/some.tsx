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

type CoursesType = {
  diploma: CourseType;
  certification: CourseType;
};

const MedicalCodingCourse: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'diploma' | 'certification'>('diploma');
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const courses: CoursesType = {
    diploma: {
      title: "ADVANCE DIPLOMA IN MEDICAL CODING",
      duration: "06-07 MONTHS",
      description: "Our Advanced Diploma in Medical Coding is meticulously crafted for individuals eager to deepen their expertise in healthcare data and coding systems. This comprehensive program explores advanced medical coding methodologies, innovative data analysis techniques, and the ethical management of patient information.",
      highlights: ["Industry recognized certification", "Placement assistance", "Expert instructors", "Hands-on training", "Career mentorship", "Access to industry networks"],
      modules: [
        {
          title: "Non Technical Modules (01-02 Months)",
          topics: ["Soft Skills Training", "Aptitude", "Professional Communication", "Interview Preparation", "Business Etiquette", "Team Collaboration"]
        },
        {
          title: "Technical Modules (5 Months)",
          topics: [
            "Introduction to Medical coding",
            "Medical terminologies",
            "Anatomy and physiology",
            "Advance medical coding training",
            "CPC certification training",
            "Practical case studies",
            "Live project work",
            "Healthcare data management",
            "Compliance & ethics"
          ]
        }
      ],
      testimonials: [
        {
          name: "Priya Sharma",
          position: "Medical Coding Specialist at Apollo Hospitals",
          content: "The Advanced Diploma program transformed my career trajectory. The comprehensive curriculum and hands-on training prepared me for real-world challenges in medical coding.",
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
          answer: "Over 85% of our Advanced Diploma graduates secure relevant positions within 3 months of program completion."
        }
      ]
    },
    certification: {
      title: "CERTIFICATION IN MEDICAL CODING",
      duration: "03-04 MONTHS",
      description: "Our Certification in Medical Coding provides essential knowledge and skills required to enter the medical coding profession. This focused program delivers fundamental coding methodologies and healthcare information management principles.",
      highlights: ["Fast-track learning", "Weekend batches available", "Online & offline options", "Beginner friendly", "Flexible scheduling", "Industry-relevant curriculum"],
      modules: [
        {
          title: "Foundation Modules (1 Month)",
          topics: ["Medical Terminology Basics", "Healthcare Systems Introduction", "Documentation Essentials", "Ethics in Healthcare"]
        },
        {
          title: "Core Coding Modules (2-3 Months)",
          topics: [
            "ICD-10 Coding Fundamentals",
            "CPT Coding Essentials",
            "Basic Anatomy and Physiology",
            "Healthcare Documentation",
            "CPC Exam Preparation",
            "Electronic Health Records",
            "Healthcare Reimbursement"
          ]
        }
      ],
      testimonials: [
        {
          name: "Arun Menon",
          position: "Junior Medical Coder",
          content: "The certification program was perfect for my busy schedule. The weekend classes and practical approach helped me transition to healthcare without disrupting my current job.",
          avatar: "AM"
        },
        {
          name: "Divya Nair",
          position: "Healthcare Documentation Specialist",
          content: "As someone with no prior healthcare experience, this program provided me with the exact skills I needed to start my career in medical coding.",
          avatar: "DN"
        },
        {
          name: "Sanjay Verma",
          position: "Recent Graduate",
          content: "The instructors focus on practical knowledge and real-world applications, which made it easier to understand complex coding concepts.",
          avatar: "SV"
        }
      ],
      faqs: [
        {
          question: "Can I complete this program while working full-time?",
          answer: "Yes, our weekend batches and flexible scheduling options are designed specifically for working professionals."
        },
        {
          question: "Will I be prepared for entry-level positions after completion?",
          answer: "Absolutely. The curriculum focuses on the core skills needed for entry-level medical coding positions."
        },
        {
          question: "Is there an online option available?",
          answer: "Yes, we offer fully online, hybrid, and in-person options to suit your learning preferences and location constraints."
        }
      ]
    }
  };

  const activeCourse = courses[activeTab];
  
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeCourse.testimonials) {
        setActiveTestimonial(prev => 
          prev === activeCourse.testimonials!.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeCourse]);

  const handleTabChange = (tab: 'diploma' | 'certification') => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setExpandedModule(null);
      setActiveFaq(null);
      setActiveTestimonial(0);
    }
  };

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
    <div className="bg-transparent min-h-screen font-sans">
      
      {/* Header with 3D effect */}
      <div className="bg-[#312e87] p-8 relative overflow-hidden shadow-lg">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#f63735] opacity-20 rounded-full"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full"></div>
        
        <h1 className="text-center text-3xl font-bold text-white mb-3 relative z-10">
          Medical Coding Course in Bengaluru
        </h1>
        <p className="text-center text-gray-200 mb-4 relative z-10 max-w-2xl mx-auto">
          Jump-start your career in healthcare with our comprehensive medical coding programs
        </p>
        
        {/* Animated Tab Navigation */}
        <div className="flex justify-center mt-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full flex shadow-lg">
            <button 
              className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'diploma' ? 'bg-[#f63735] shadow-lg' : 'hover:bg-white/10'}`}
              onClick={() => handleTabChange('diploma')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 3.96 1.696a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM5.82 10.477l-1.144.489 6.964 2.984a1 1 0 00.788 0l7-3-1.147-.491-6.623 2.839a1 1 0 01-.788 0l-5.05-2.164z" />
                <path d="M3.5 11.909v3.182c0 .379.214.725.554.894l6.304 3.145c.336.168.726.168 1.062 0l3.58-1.79v-3.731l-7 3-4.5-1.929z" />
              </svg>
              <span>Advance Diploma</span>
            </button>
            <button 
              className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'certification' ? 'bg-[#312e87] shadow-lg' : 'hover:bg-white/10'}`}
              onClick={() => handleTabChange('certification')}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certification</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Section */}
            <section id="overview" className="mb-16">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  activeTab === 'diploma' ? 'bg-blue-900' : 'bg-red-500'
                } text-white`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Course Overview</h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 lg:pr-8">
                      <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-800 mb-4">
                        DURATION: {activeCourse.duration}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{activeCourse.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {activeCourse.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-3">Program Benefits</h4>
                          <ul className="space-y-2">
                            {activeCourse.highlights.slice(0, 3).map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-red-800 mb-3">Career Outcomes</h4>
                          <ul className="space-y-2">
                            {activeCourse.highlights.slice(3, 6).map((highlight, i) => (
                              <li key={i} className="flex items-start">
                                <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`px-6 py-3 rounded-full font-medium text-white shadow-md ${
                          activeTab === 'diploma' ? 'bg-blue-900' : 'bg-red-500'
                        }`}
                        onClick={() => scrollToSection('curriculum')}
                      >
                        View Curriculum
                      </motion.button>
                    </div>
                    
                    <div className="lg:w-1/3 mt-8 lg:mt-0">
                      <div className="bg-gray-50 rounded-xl p-6 h-full">
                        <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
                        
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">Next Batch</h5>
                              <p className="text-gray-600">April 10, 2025</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">Delivery Mode</h5>
                              <p className="text-gray-600">Hybrid (Online & Offline)</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246                                 .48-.32 1.054-.545 1.676-.662V7.308c-.391.127-.68.317-.843.504a1 1 0 101.511-1.31c.563-.649 1.413-1.076 2.354-1.253V5z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">Course Fee</h5>
                              <p className="text-gray-600">
                                {activeTab === 'diploma' ? '₹45,000 - ₹50,000' : '₹25,000 - ₹30,000'}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">Certification</h5>
                              <p className="text-gray-600">
                                {activeTab === 'diploma' ? 'Advanced Diploma + CPC' : 'Certification + CPC Prep'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Curriculum Section */}
            <section id="curriculum" className="mb-16">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                  activeTab === 'diploma' ? 'bg-blue-900' : 'bg-red-500'
                } text-white`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Curriculum</h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-900">What You'll Learn</h3>
                  
                  <div className="space-y-4">
                    {activeCourse.modules.map((module, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          className={`w-full px-5 py-4 text-left flex justify-between items-center ${
                            expandedModule === index ? 'bg-gray-50' : 'bg-white'
                          }`}
                          onClick={() => toggleModule(index)}
                        >
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                              activeTab === 'diploma' ? 'bg-blue-100 text-blue-900' : 'bg-red-100 text-red-900'
                            }`}>
                              {index + 1}
                            </div>
                            <h4 className="font-semibold text-gray-900">{module.title}</h4>
                          </div>
                          <svg 
                            className={`w-5 h-5 transform transition-transform ${
                              expandedModule === index ? 'rotate-180' : ''
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
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-4 pt-2">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {module.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start py-2">
                                      <svg className="w-5 h-5 mr-2 mt-0.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                      </svg>
                                      <span className="text-gray-700">{topic}</span>
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
                  
                  <div className="mt-8 bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">Additional Program Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                            </svg>
                          </div>
                          <h5 className="font-medium text-gray-900">Capstone Project</h5>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Real-world medical coding project to apply your learning in practical scenarios
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                          </div>
                          <h5 className="font-medium text-gray-900">Internship</h5>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {activeTab === 'diploma' ? '3-month internship with healthcare partners' : '1-month practical training'}
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h5 className="font-medium text-gray-900">Career Support</h5>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Resume building, mock interviews, and job placement assistance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Testimonials Section */}
            {activeCourse.testimonials && (
              <section id="testimonials" className="mb-16">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    activeTab === 'diploma' ? 'bg-blue-900' : 'bg-red-500'
                  } text-white`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Student Testimonials</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTestimonial}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {activeCourse.testimonials && (
                            <div className="flex flex-col md:flex-row items-center">
                              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-gray-600">
                                  {activeCourse.testimonials[activeTestimonial].avatar}
                                </div>
                              </div>
                              <div className="md:w-2/3 md:pl-8">
                                <div className="relative">
                                  <svg 
                                    className="absolute -top-8 -left-8 w-16 h-16 text-gray-100" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                  <blockquote className="text-gray-700 italic mb-4">
                                    "{activeCourse.testimonials[activeTestimonial].content}"
                                  </blockquote>
                                  <div className="text-gray-900 font-semibold">
                                    {activeCourse.testimonials[activeTestimonial].name}
                                  </div>
                                  <div className="text-gray-600 text-sm">
                                    {activeCourse.testimonials[activeTestimonial].position}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                      
                      {activeCourse.testimonials && activeCourse.testimonials.length > 1 && (
                        <div className="flex justify-center mt-6 space-x-2">
                          {activeCourse.testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveTestimonial(index)}
                              className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 
                                (activeTab === 'diploma' ? 'bg-blue-900' : 'bg-red-500') : 'bg-gray-300'}`}
                              aria-label={`Go to testimonial ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* FAQs Section */}
            {activeCourse.faqs && (
              <section id="faqs" className="mb-16">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    activeTab === 'diploma' ? 'bg-blue-900' : 'bg-red-500'
                  } text-white`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 sm:p-8">
                    <div className="space-y-4">
                      {activeCourse.faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button 
                            className={`w-full px-5 py-4 text-left flex justify-between items-center ${
                              activeFaq === index ? 'bg-gray-50' : 'bg-white'
                            }`}
                            onClick={() => toggleFaq(index)}
                          >
                            <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                            <svg 
                              className={`w-5 h-5 transform transition-transform ${
                                activeFaq === index ? 'rotate-180' : ''
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
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-5 pb-4 pt-2 text-gray-700">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
            
            {/* Enrollment CTA */}
            <section id="enroll" className="mb-16">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="md:flex items-center justify-between">
                    <div className="md:w-2/3 mb-6 md:mb-0">
                      <h2 className="text-2xl font-bold text-white mb-2">Ready to Start Your Medical Coding Journey?</h2>
                      <p className="text-blue-100 max-w-2xl">
                        Join our next batch and take the first step towards a rewarding career in healthcare.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium shadow-md"
                      >
                        Enroll Now
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium"
                      >
                        Download Brochure
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Medical Coding Course</h3>
              <p className="text-gray-400">
                Comprehensive training programs for aspiring medical coding professionals in Bengaluru.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#overview" className="text-gray-400 hover:text-white">Course Overview</a></li>
                <li><a href="#curriculum" className="text-gray-400 hover:text-white">Curriculum</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400">
                <p>123 Medical Park,</p>
                <p>Bengaluru, Karnataka 560001</p>
                <p className="mt-2">Phone: +91 9876543210</p>
                <p>Email: info@medicalcoding.com</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Medical Coding Course. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedicalCodingCourse;