import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'; // Import Lottie
import notFoundAnimation from '../assets'; // Update path to your animation file


// import file from '../../../src/assets/'
const NotFoundNew = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Lottie options configuration
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality would go here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Moving Bubbles Background - LOWERED Z-INDEX */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`absolute w-10 h-10 rounded-full opacity-50 ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'} animate-bubble`} style={{ left: `${Math.random() * 100}%`, animationDuration: `${Math.random() * 5 + 3}s` }}></div>
        ))}
      </div>
      
      {/* Color band at top - INCREASED Z-INDEX */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-white to-blue-700 z-10"></div>
      
      {/* Subtle background pattern - KEPT LOW Z-INDEX */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #f0f0f0 0px, #f0f0f0 10px, transparent 10px, transparent 20px)`
        }}></div>
      </div>
      
      {/* Content Wrapper - ADDED WITH HIGH Z-INDEX */}
      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Lottie Animation - ADDED HERE */}
        <div className="mb-4 w-64 h-64">
          <Lottie options={defaultOptions}
            height={250}
            width={250}
          />
        </div>
        
        {/* 404 Message with improved styling */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-medium text-gray-800 mb-3">That's an error.</h1>
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-red-500 via-white to-blue-600 mb-4 rounded-full"></div>
          <p className="text-base text-gray-700 max-w-md">
            The requested URL was not found on this server.
            <span className="block mt-2 text-sm text-gray-500">That's all we know.</span>
          </p>
        </div>
        
        {/* Enhanced Search Bar */}
        <div className="w-full max-w-xl mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:ring-2 focus:ring-blue-600 focus:outline-none appearance-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-full py-3 pl-10 pr-20 ring-1 ring-gray-200 shadow-md" 
              placeholder="Search our site"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1.5 px-4 py-1.5 bg-gradient-to-r from-red-600 to-blue-700 text-white font-medium rounded-full text-sm hover:shadow-lg transition-shadow duration-200"
            >
              Search
            </button>
          </form>
        </div>
        
        {/* Navigation Links with more styling */}
        <div className="w-full max-w-xl mb-10">
          <div className="flex flex-wrap justify-center gap-2 items-center py-2">
            <Link to="/" className="px-4 py-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/about" className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200">About</Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/contact" className="px-4 py-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors duration-200">Contact</Link>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link to="/help" className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200">Help</Link>
          </div>
        </div>

        {/* Suggestion with card styling */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-xl w-full shadow-sm mb-12">
          <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
            <svg className="h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Try these suggestions:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0">1</span>
              <span>Check the URL for spelling errors</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0">2</span>
              <span>Go back to the <Link to="/" className="text-blue-600 hover:underline font-medium">homepage</Link></span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0">3</span>
              <span>Use the search bar above to find what you're looking for</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer with red, white and blue theme - INCREASED Z-INDEX */}
      <div className="absolute bottom-0 w-full py-3 border-t border-gray-200 bg-white z-20">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="mb-2 sm:mb-0 text-gray-700">
            &copy; {new Date().getFullYear()} <span className="font-medium">Clinimode</span>
          </div>
          <div className="flex gap-x-6">
            <a href="#" className="text-red-600 hover:underline">Privacy</a>
            <a href="#" className="text-blue-700 hover:underline">Terms</a>
            <a href="#" className="text-red-600 hover:underline">Settings</a>
          </div>
        </div>
      </div>
      
      {/* Tailwind Animation for Bubbles with improved animation */}
      <style>
        {`
          @keyframes bubble {
            0% { transform: translateY(100vh) scale(0.8); opacity: 0.6; }
            50% { opacity: 0.4; }
            100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
          }
          .animate-bubble {
            animation: bubble linear infinite;
            will-change: transform, opacity;
          }
        `}
      </style>
    </div>
  );
};

export default NotFoundNew;