import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MdHealthAndSafety, 
  MdSchool, 
  MdWorkOutline,
  MdVisibility,
  MdEmojiFlags,
  MdOutlineArrowForward
} from 'react-icons/md';

import Mission from '../../assets/Gemini_Generated_Image_cl4htycl4htycl4h.jpeg';
import Vision from '../../assets/Gemini_Generated_Image_rvp4yqrvp4yqrvp4.jpg';
import { useNavigate } from 'react-router-dom';


const ClinimodeLanding = () => {
  const [activeSection, setActiveSection] = useState('features');
  const navigate=useNavigate();
  return (
    <div 
      className="relative w-full min-h-auto flex items-center justify-center 
                 text-white overflow-hidden my-20"
    >
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none bg-white"
        style={{
          backgroundImage: 
            'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          transform: 'rotate(15deg)'
        }}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-7xl"
      >
        <div className="p-8 md:p-12">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 text-center"
          >
            Welcome to <span className="text-red-500">Clinimode</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-700 mb-8 font-medium text-center"
          >
            Shaping Clinical Research Professionals
          </motion.p>

          {/* Navigation Tabs - Made more prominent */}
          <div className="flex justify-center mb-12 flex-wrap">
            {[
              { 
                key: 'features', 
                label: 'Our Programs', 
                icon: <MdHealthAndSafety className="mr-2" />
              },
              { 
                key: 'mission', 
                label: 'Our Mission', 
                icon: <MdEmojiFlags className="mr-2" />
              },
              { 
                key: 'vision', 
                label: 'Our Vision', 
                icon: <MdVisibility className="mr-2" />
              }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSection(tab.key)}
                className={`
                  flex items-center px-6 py-3 m-2 rounded-full text-sm font-semibold transition-all
                  ${activeSection === tab.key 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center w-full mx-auto"
          >
            {activeSection === 'features' && (
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: <MdHealthAndSafety className="text-4xl text-red-500" />, 
                    title: "Clinical Research Programs", 
                    desc: "Comprehensive training in clinical research methodologies, protocols, and compliance requirements. Master data collection, GCP guidelines, and clinical trial management with practical case studies."
                  },
                  { 
                    icon: <MdSchool className="text-4xl text-red-500" />, 
                    title: "Clinical Data Management", 
                    desc: "Specialized courses in data handling, EDC systems implementation, and database design. Learn industry-standard tools with hands-on training in data validation techniques and regulatory documentation."
                  },
                  { 
                    icon: <MdWorkOutline className="text-4xl text-red-500" />, 
                    title: "Placement Support", 
                    desc: "Complete career preparation with resume building, interview coaching, and networking opportunities. Connect directly with leading pharmaceutical and CRO companies through our industry partnerships."
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-red-500/20 p-4 rounded-full">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'mission' && (
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                {/* Asymmetric design with image on left */}
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200/20 mix-blend-overlay z-10"></div>
                    <img 
                      src={Mission} 
                      alt="Our mission" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800 to-transparent">
                      <div className="bg-red-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                        <MdEmojiFlags className="text-2xl text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
                        Our Mission
                        <div className="h-1 w-16 bg-red-500 ml-4 rounded-full"></div>
                      </h2>
                      
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        At <strong className="text-gray-800">Clinimode</strong>, 
                        we are dedicated to developing highly skilled clinical research professionals through industry-aligned training programs. Our mission is to provide comprehensive education that combines theoretical knowledge with practical experience, ensuring graduates are prepared to meet the demands of the evolving healthcare research landscape.
                      </p>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        We strive to bridge the gap between academia and industry by delivering specialized training that meets global standards and enhances the quality of clinical research worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'vision' && (
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                {/* Asymmetric design with image on right */}
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200/20 mix-blend-overlay z-10"></div>
                    <img 
                      src={Vision} 
                      alt="Our vision"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800 to-transparent">
                      <div className="bg-red-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                        <MdVisibility className="text-2xl text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <div className="text-left">
                      <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
                        Our Vision
                        <div className="h-1 w-16 bg-red-500 ml-4 rounded-full"></div>
                      </h2>
                      
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        To be recognized as the premier institute for clinical research education, setting the benchmark for excellence in professional training. We envision creating a global network of skilled clinical research professionals who contribute significantly to advancing healthcare through ethical research practices and innovation.
                      </p>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Our vision extends to establishing Clinimode graduates as industry leaders who drive standards of excellence in clinical trials, data management, and research integrity across pharmaceutical, biotechnology, and healthcare sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center justify-center space-x-2 w-full max-w-md"
              onClick={() => navigate("/clinicaldatamanagement")}
            
            >
              <span>Explore Our Clinical Programs</span>
              <MdOutlineArrowForward className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClinimodeLanding;