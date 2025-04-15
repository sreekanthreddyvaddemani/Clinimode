import React from 'react';
import { FaBookOpen, FaClock, FaBullseye } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const highlights = [
  { 
    icon: <FaBookOpen className="text-5xl text-blue-500" />, 
    title: "Industry-Oriented Training", 
    description: "Courses designed for immediate application in clinical research."
  },
  { 
    icon: <FaClock className="text-5xl text-green-500" />, 
    title: "Personalized Learning", 
    description: "Interactive classes with LMS support for comprehensive learning."
  },
  { 
    icon: <FaBullseye className="text-5xl text-purple-500" />, 
    title: "100% Placement Support", 
    description: "Connecting graduates with top employers in clinical research."
  }
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <div ref={ref} className="relative bg-white text-gray-800 py-16 px-4">
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}
      />
      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {highlights.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg border border-gray-200">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;