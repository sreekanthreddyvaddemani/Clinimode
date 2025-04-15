import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/Gemini_Generated_Image_cl4htycl4htycl4h.jpeg'; // Replace with actual image path

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center max-h-auto max-w-auto px-4 py-8 md:px-12 bg-white">
      {/* Image Section (Left) */}
      <motion.div 
        className="md:w-1/2 flex justify-center mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src={aboutImage} 
          alt="About Clinimode" 
          className="w-full max-w-md rounded-lg shadow-2xl border-4 border-gray-300 transform hover:scale-105 transition-transform duration-300" 
        />
      </motion.div>

      {/* Text Section (Right) */}
      <motion.div 
        className="md:w-1/2 text-center md:text-left md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-6 text-gray-700">
          <motion.p 
            className="text-lg leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Our mission at Clinimode is to empower individuals with industry-relevant skills and knowledge through high-quality training programs. We strive to bridge the gap between education and industry demands, ensuring our learners gain hands-on experience, technical expertise, and career-ready competencies across various professional domains.
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            With a vision to be a leading training provider, we foster a skilled workforce equipped with the latest industry standards and technologies. Our dynamic learning ecosystem transforms aspiring professionals into industry experts, driving innovation, ensuring compliance, and promoting excellence in healthcare and IT.
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            The clinical research field is rapidly expanding with the global clinical trials market valued at USD 60.76 billion in 2024 and expected to reach USD 69.3 billion by 2028. Our graduates find employment in academic health centers, government agencies, contract research organizations, pharmaceutical and biotechnological companies, and medical firms.
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed font-semibold text-gray-800"
            whileHover={{ scale: 1.01 }}
          >
            At Clinimode, we offer comprehensive training with interactive classes, practical assessments, personalized learning, and 100% placement support. Our expert faculty brings over three decades of combined experience in healthcare, pharmaceuticals, and research to ensure you excel in your career journey.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;