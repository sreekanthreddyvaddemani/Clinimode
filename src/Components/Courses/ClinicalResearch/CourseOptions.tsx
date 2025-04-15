import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Award, 
  Zap, 
  Download, 
  CheckCircle, 
  Clipboard,
  Target,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CourseOptions = () => {
  const [selectedCourse, setSelectedCourse] = useState('PG Diploma');
  const [isAnimating, setIsAnimating] = useState(false);
  const courseContainerRef = useRef(null);

  const courses = {
    'PG Diploma': {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: 'Advanced Post Graduate Program in Clinical Research',
      duration: '12 Months',
      price: '₹95,000',
      description: 'Embark on a transformative journey in clinical research with our comprehensive Post Graduate Diploma. This program is meticulously designed to equip you with cutting-edge knowledge, practical skills, and industry-relevant expertise to become a leader in healthcare innovation.',
      highlights: [
        'Comprehensive Industry-Aligned Curriculum',
        'Hands-on Practical Training',
        'Expert-Led Workshops'
      ],
      nonTechnicalModules: [
        'Professional Communication Skills',
        'Research Ethics and Compliance',
        'Career Development Strategies'
      ],
      technicalModules: [
        'Advanced Clinical Research Methodologies',
        'Pharmacovigilance and Safety Analysis',
        'Clinical Data Management Techniques',
        'Regulatory Compliance Frameworks',
        'Medical Writing and Documentation',
        'Biostatistics and Research Design'
      ]
    },
    'Advanced Diploma': {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'Professional Diploma in Clinical Research Innovation',
      duration: '6 Months',
      price: '₹65,000',
      description: 'Dive deep into the world of clinical research with our Advanced Diploma. Designed for ambitious professionals, this program provides intensive training in advanced research techniques, cutting-edge technologies, and strategic healthcare innovations.',
      highlights: [
        'Specialized Research Techniques',
        'Industry Networking Opportunities',
        'Advanced Technology Integration'
      ],
      nonTechnicalModules: [
        'Leadership in Healthcare Research',
        'Strategic Communication',
        'Professional Development'
      ],
      technicalModules: [
        'Advanced Clinical Trial Design',
        'Pharmacovigilance Strategies',
        'Clinical Data Analysis',
        'Regulatory Intelligence',
        'Medical Reporting Techniques'
      ]
    },
    'Certification': {
      icon: <Target className="w-12 h-12 text-purple-500" />,
      title: 'Specialized Certification in Clinical Research Fundamentals',
      duration: '3-4 Months',
      price: '₹45,000',
      description: 'A focused and intensive program designed to provide a solid foundation in clinical research. Perfect for professionals seeking to rapidly upskill and gain essential knowledge in healthcare research methodologies.',
      highlights: [
        'Focused Skill Development',
        'Rapid Learning Pathway',
        'Industry-Recognized Certification'
      ],
      nonTechnicalModules: [
        'Research Communication Skills',
        'Professional Ethics',
        'Career Orientation'
      ],
      technicalModules: [
        'Fundamental Clinical Research Methods',
        'Introduction to Pharmacovigilance',
        'Basic Clinical Data Management',
        'Regulatory Essentials',
        'Medical Writing Fundamentals'
      ]
    }
  };

  const handleCourseChange = (course) => {
    if (course !== selectedCourse) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedCourse(course);
        setIsAnimating(false);
      }, 300);
    }
  };

  const scrollCourses = (direction) => {
    if (courseContainerRef.current) {
      const scrollAmount = direction === 'left' 
        ? -courseContainerRef.current.offsetWidth 
        : courseContainerRef.current.offsetWidth;
      
      courseContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 ">
        {/* Course Selection Section */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Mobile Scroll Buttons */}
          <button 
            onClick={() => scrollCourses('left')}
            className="absolute left-0 bg-white shadow-md rounded-full p-2 z-10 
            md:hidden transform hover:scale-110 transition"
          >
            <ChevronLeft className="text-blue-600" />
          </button>
          
          {/* Course Selection Buttons */}
          <div 
            ref={courseContainerRef}
            className="flex space-x-4 overflow-x-auto md:overflow-visible scroll-smooth 
            scrollbar-hide"
          >
            {Object.keys(courses).map((course) => (
              <button
                key={course}
                onClick={() => handleCourseChange(course)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center 
                whitespace-nowrap
                ${selectedCourse === course 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-200'}`}
              >
                <CheckCircle className="mr-2" />
                {course}
              </button>
            ))}
          </div>
          
          {/* Mobile Scroll Buttons */}
          <button 
            onClick={() => scrollCourses('right')}
            className="absolute right-0 bg-white shadow-md rounded-full p-2 z-10 
            md:hidden transform hover:scale-110 transition"
          >
            <ChevronRight className="text-blue-600" />
          </button>
        </div>

        {/* Course Details Section */}
        <div className="flex justify-center items-center min-h-screen">
        <div 
          className={`bg-white shadow-2xl rounded-2xl overflow-hidden w-[90%]
          transition-all duration-300 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
        >
          {/* Header Section */}
          <div className="bg-blue-600 text-white p-8 flex items-center ">
            {courses[selectedCourse].icon}
            <div className="ml-6 flex-grow">
              <h2 className="text-3xl font-bold">{courses[selectedCourse].title}</h2>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xl">Duration: {courses[selectedCourse].duration}</p>
                <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                  {courses[selectedCourse].price}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="p-8 grid md:grid-cols-2 gap-8 ">
            {/* Description Column */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Program Highlights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {courses[selectedCourse].description}
              </p>
              
              {/* Key Highlights */}
              <div className="space-y-3 mb-6">
                {courses[selectedCourse].highlights.map((highlight, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-blue-50 p-3 rounded-lg transform 
                    transition hover:scale-105 hover:shadow-md"
                  >
                    <Compass className="mr-3 text-blue-500" />
                    <span className="text-gray-800">{highlight}</span>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg 
                hover:bg-blue-700 transition flex items-center group">
                <Download className="mr-2" /> 
                Download Detailed Brochure
                <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </div>

            {/* Modules Column */}
            <div>
              {/* Non-Technical Modules */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Clipboard className="mr-2 text-green-500" />
                  Non-Technical Modules
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {courses[selectedCourse].nonTechnicalModules.map((module, index) => (
                    <div 
                      key={index} 
                      className="bg-blue-50 p-3 rounded-lg flex items-center transform transition 
                      hover:scale-105 hover:shadow-md hover:bg-blue-100"
                    >
                      <BookOpen className="mr-2 text-blue-500" size={20} />
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Modules */}
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <Target className="mr-2 text-red-500" />
                  Technical Modules
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {courses[selectedCourse].technicalModules.map((module, index) => (
                    <div 
                      key={index} 
                      className="bg-blue-50 p-3 rounded-lg flex items-center transform transition 
                      hover:scale-105 hover:shadow-md hover:bg-blue-100"
                    >
                      <Clipboard className="mr-2 text-purple-500" size={20} />
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default CourseOptions;