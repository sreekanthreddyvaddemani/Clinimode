import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Briefcase,
  MapPin,
  Star,
  Info,
  ExternalLink,
  AlertCircle,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CDMCareersHero from './CDMCareersHero';
import EnrollForm from '../EnrollForm';

const hiringCompanies = [
  'Academic health centers', 'Government agencies', 'Contract research organizations',
  'Pharmaceutical Companies', 'Biotechnological Companies', 'Medical Firms',
  'IQVIA', 'AstraZeneca', 'Accenture', 'Cipla',
  'Cognizant', 'Novo Nordisk',
];

const ClinimodeCareerPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [careerPaths, setCareerPaths] = useState([]);
  const [allSkills, setAllSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedPosition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to ensure body scroll is reset when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPosition]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when page loads
    
    // Check if URL has a hash and scroll to that element after page load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Short delay to ensure all components are loaded
      }
    }
  }, []);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchCareerPaths = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/careerPaths`); // Ensure the correct endpoint
   


        if (!response.ok) {
          throw new Error('No Jobs Available !');
        }
  
        // Make sure to await .json() to parse response data
        const data = await response.json();
  
        if (!data || !Array.isArray(data)) {
          throw new Error('Invalid data format');
        }
  
        setCareerPaths([]); // Assuming data is an array
  
        const skills = [...new Set(
          data.flatMap(path => path.positions.flatMap(position => position.skills))
        )];
  
        setAllSkills(skills);
      } catch (err) {
        console.error('Error fetching career paths:', err);
        
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCareerPaths();
  }, []);
  

  const filteredPositions = careerPaths
    .flatMap(path => path.positions || [])
    .filter(position =>
      (selectedCategory ? position.title.toLowerCase().includes(selectedCategory.toLowerCase()) : true) &&
      (searchTerm ?
        position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        position.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
        : true) &&
      (selectedSkills.length === 0 ||
        selectedSkills.every(skill => position.skills.includes(skill))
      )
    );

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const closeModal = (e) => {
    e?.stopPropagation();
    setSelectedPosition(null);
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-700 overflow-hidden">
      <CDMCareersHero/>
      {/* Background Gradient - Changed to white */}
      <div className="absolute inset-0 bg-white"></div>

      {/* Floating Bubble Animation */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-red-100/30"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 p-4 sm:p-8" id="jobs-section">
        {/* Hero Section */}
        <div className="text-center mb-8 mt-20 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4">
            Industry Oriented Course in Clinical Data Management
          </h1>
          <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto">
            To empower individuals with industry-relevant skills and knowledge through high-quality training programs. We strive to bridge the gap between education and industry demands.
          </p>
        </div>

        {/* Job Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 sm:p-6 mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions or skills"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="w-full sm:w-auto px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500 outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              disabled={loading || error}
            >
              <option value="">All Categories</option>
              {careerPaths.map(path => (
                <option key={path.category} value={path.category}>
                  {path.category}
                </option>
              ))}
            </select>
          </div>

          {/* Skills Filter */}
          {!loading && !error && allSkills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {allSkills.map(skill => (
                <motion.button
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedSkills.includes(skill)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {skill}
                </motion.button>
              ))}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-red-500 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-700 font-medium">Loading career opportunities...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex flex-col items-center justify-center py-12 text-red-500">
              <AlertCircle className="w-16 h-16 mb-4" />
              <p className="text-lg font-medium">Failed to load career data</p>
              <p className="text-sm mt-2">Please try again later or contact support</p>
            </div>
          )}

          {/* No Jobs Available State */}
          {!loading && !error && filteredPositions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-gray-700">
              <Briefcase className="w-16 h-16 mb-4 text-gray-400" />
              <p className="text-lg font-medium">Currently, no jobs are available. Here's what we will provide:</p>

              <p className="text-lg font-medium">Career Paths in Clinical Data Management</p>
              <p className="text-sm mt-2 text-center max-w-md">
                Clinical Data Management (CDM) offers a variety of career paths, catering to different skill sets and levels of expertise.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold">Clinical Data Coordinator (Entry-Level)</h3>
                  <p className="text-sm">Data entry, resolving discrepancies, and ensuring data accuracy.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold">Clinical Data Manager (Mid-Level)</h3>
                  <p className="text-sm">Overseeing data collection, designing data management plans, and ensuring regulatory compliance.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold">Clinical Data Scientist</h3>
                  <p className="text-sm">Analyzing large datasets, applying statistical methods, and extracting insights from clinical trial data.</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-bold">Data Quality Lead</h3>
                  <p className="text-sm">Ensuring data quality and compliance with industry standards.</p>
                </div>
              </div>
            </div>
          )}

          {/* Job Listings */}
          {!loading && !error && filteredPositions.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-red-700 truncate">
                      {position.title}
                    </h3>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs sm:text-sm ml-2">
                      {position.level}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm">Key Skills:</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {position.skills.slice(0, 3).map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPosition(position)}
                    className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 flex items-center justify-center text-sm"
                  >
                    <Info className="mr-2 w-4 h-4" /> View Job Details
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Industry Growth Section from PDF content */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-700 mb-6 sm:mb-8">
            Why Clinical Data Management?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Industry Growth</h3>
              <p>The life sciences and pharmaceutical industries are expanding, leading to an increased need for skilled CDM professionals.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Technological Advancements</h3>
              <p>The adoption of AI, machine learning, and cloud-based solutions in clinical trials has created new opportunities for CDM experts.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Regulatory Compliance</h3>
              <p>Stricter regulatory requirements for clinical trials emphasize the importance of accurate and compliant data management.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Global Demand</h3>
              <p>The need for CDM professionals is not limited to one region, making it a globally relevant career choice. Most Pharma and Biotech companies are establishing their GCCs in India.</p>
            </div>
          </div>
          <p className="text-center mt-6 font-medium">The global clinical trials market, valued at USD 60.76 billion in 2024 is expected to reach USD 69.3 billion by 2028.</p>
        </div>

        {/* Hiring Companies Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-4 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-700 mb-6 sm:mb-8">
            Career Opportunities
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {hiringCompanies.map((company, index) => (
              <div
                key={index}
                className="bg-gray-100 px-4 py-2 sm:px-6 sm:py-4 rounded-lg flex items-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Star className="mr-2 text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{company}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="tel:+919380544537"
            className="inline-block border-2 border-red-500 text-red-500 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Start Your Career Journey
          </a>
          <p className="mt-4 text-sm sm:text-base text-gray-700 font-medium">
            Contact us at <a href="tel:+919380544537" className="text-red-600 font-semibold hover:underline">+91 93805 44537</a> or
            <a href="mailto:support@clinimode.com" className="text-red-600 font-semibold hover:underline"> support@clinimode.com</a>
          </p>
        </div>

        <div id="enroll-form-section">
            <EnrollForm/>
          </div>
      </div>



      {/* Job Description Modal - Fixed Portal Implementation */}
      <AnimatePresence>
        {selectedPosition && (
          <div className="fixed inset-0 z-[9999]"> {/* Higher z-index to ensure it's above everything */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-8 relative"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
              >
                {/* Close button */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex justify-between items-center mb-4 sm:mb-6 pr-8"> {/* Add right padding for close button */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-red-700">
                    {selectedPosition.title}
                  </h2>
                  <span className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {selectedPosition.level}
                  </span>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2 sm:mb-3">
                    Job Description
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line">
                    {selectedPosition.description}
                  </p>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2 sm:mb-3">
                    Required Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPosition.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <motion.a
                    href="https://www.clinimode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-red-600 flex items-center text-sm sm:text-base"
                  >
                    Apply Now <ExternalLink className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                  <button
                    onClick={closeModal}
                    className="text-gray-600 hover:text-black text-sm sm:text-base"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>


    </div>
  );
};

export default ClinimodeCareerPage;