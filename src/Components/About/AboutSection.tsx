import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, 
  Database, 
  Stethoscope,
  GraduationCap,
  BookOpen,
  TrendingUp,
  Users,
  Briefcase
} from 'lucide-react';
import about from '../../assets/Gemini_Generated_Image_nle5munle5munle5.jpeg';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to enrollment form when button is clicked
  const scrollToEnrollForm = () => {
    const enrollFormElement = document.getElementById('enroll-form-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuresData = [
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Clinical Data Management",
      description: "Comprehensive training with hands-on projects",
      value: "Industry-Focused"
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Medical Coding",
      description: "Expert-led training in medical terminology",
      value: "Practical"
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-purple-500" />,
      title: "ClinOptima Training",
      description: "Real-world tool experience",
      value: "Hands-On"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-red-500" />,
      title: "Placement Support",
      description: "Interview preparation and networking",
      value: "Dedicated"
    }
  ];

  const statsData = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      value: "2",
      label: "Specialized Courses"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      value: "100%",
      label: "Practical Curriculum"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      value: "15+",
      label: "Industry Mentors"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-red-500" />,
      value: "10+",
      label: "Hiring Partners"
    }
  ];

  // Simplified animations to reduce mobile lag
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className={`relative w-full min-h-auto flex items-center justify-center 
                  text-gray-800 overflow-hidden transition-all duration-700 ease-in-out bg-white${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
    >
      {/* 90% width container */}
      <div className="w-11/12 mx-auto relative z-10 py-12 md:py-16">
        {/* Content Section with 70/30 split */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Column - Text Content (70%) */}
          <div className="order-2 lg:order-1 lg:w-7/10 w-full">
            <div className="mb-8">
              <motion.h4 
                className="text-2xl font-bold text-red-600 mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                About Clinimode
              </motion.h4>
              <motion.h1 
                className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Begin Your Career in Healthcare Data
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 0.7 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
              />
              
              <motion.p 
                className="text-base text-gray-600 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Clinimode offers specialized training in Clinical Data Management and Medical Coding. 
                Our industry-aligned curriculum is designed to prepare you for in-demand roles in the 
                rapidly growing clinical research sector, with hands-on experience using real-world tools.
              </motion.p>
              
              {/* Stats Grid with simplified animations */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {statsData.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg border border-gray-200 flex flex-col items-center text-center shadow-sm"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      backgroundColor: "#f3f4f6",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Features Grid with simplified animations */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-3 mb-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {featuresData.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-3 rounded-xl 
                             border border-gray-200
                             flex items-center shadow-sm"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "#f9fafb",
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="mr-3 p-2 rounded-full bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-gray-800">{feature.title}</h3>
                    <p className="text-xs text-gray-500">{feature.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Buttons with updated colors and border radius */}
            <motion.div 
              className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full sm:w-auto">
                <motion.button 
                  className="bg-red-600 text-white px-6 py-2 rounded 
                             font-semibold shadow-lg w-full relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(220, 38, 38, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToEnrollForm}
                >
                  <span className="relative z-10">Enroll Now</span>
                </motion.button>
              </div>
              <a href="/contact" className="w-full sm:w-auto">
                <motion.button 
                  className="bg-transparent border-2 border-blue-500 text-blue-500 
                             px-6 py-2 rounded
                             font-semibold w-full"
                  whileHover={{ 
                    backgroundColor: "#3b82f6",
                    color: "#ffffff",
                    borderColor: "#3b82f6"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image (30%) */}
          <motion.div 
            className="relative order-1 lg:order-2 mb-8 lg:mb-0 lg:w-3/10 w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Enhanced border effect */}
              <div className="absolute -inset-1 rounded-xl opacity-75 blur-sm bg-gradient-to-r from-blue-500 to-purple-600" />
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={about} 
                  alt="Clinimode Healthcare Training" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-semibold text-base text-white">
                    Ready to launch your career in Clinical Data Management?
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;