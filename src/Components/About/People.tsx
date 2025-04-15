import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MdWorkOutline, 
  MdLeaderboard,
  MdVerified
} from 'react-icons/md';
import profile from '../../assets/252-2524695_dummy-profile-image-jpg-hd-png-download.png';

const CEOProfile = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className="relative w-full flex items-center justify-center 
                 overflow-hidden bg-white"
    >
      {/* Animated Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
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
        className="relative z-10 w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200"
      >
        <div className="flex flex-col md:flex-row">
          {/* Profile Image Section - With fallback to gray image */}
          <div className="md:w-1/3">
            <div className="h-80 md:h-full relative">
              {imageError ? (
                <div 
                  className="w-full h-full bg-gray-200"
                  aria-label="CEO Profile placeholder"
                />
              ) : (
                <img 
                  src={profile} 
                  alt="CEO Profile" 
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'grayscale(20%) brightness(100%)'
                  }}
                  onError={handleImageError}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/30" />
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
            <motion.h1 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 flex items-center"
            >
              Srinivas 
              <MdVerified className="ml-3 text-blue-500" />
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl text-gray-600 mb-6 font-medium"
            >
              Chief Operating Officer, CliniMode
            </motion.p>

            {/* Leadership Highlights */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { 
                  icon: <MdWorkOutline className="text-2xl text-blue-500" />, 
                  title: "Strategic Leadership", 
                  desc: "Pioneering innovative approaches in healthcare education" 
                },
                { 
                  icon: <MdLeaderboard className="text-2xl text-blue-500" />, 
                  title: "Educational Innovation", 
                  desc: "Transforming clinical research training paradigms" 
                }
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <div>{highlight.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-600">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CEO Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                At <strong className="text-gray-900">CliniMode</strong>, we are committed to revolutionizing healthcare education through cutting-edge clinical research training. Our mission is to empower professionals with comprehensive, industry-aligned skills that drive innovation and excellence in the rapidly evolving healthcare landscape. We believe in nurturing talent that can transform medical research and improve global health outcomes.
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Discover Our Educational Philosophy
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CEOProfile;