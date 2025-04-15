import React from 'react';
import featureImage from '../../assets/Gemini_Generated_Image_5nx4jd5nx4jd5nx4.jpg'; 
import { FaNetworkWired, FaAward, FaUsersCog, FaBookMedical } from "react-icons/fa";
import AnimatedLine from '../AnimatedLine';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
    const navigate = useNavigate();
  
  // Define the primary color
  const primaryColor = '#0066cc'; // Professional blue

  // Feature data tailored to Clinical Data Management
  const features = [
    {
      id: 1,
      icon: <FaNetworkWired className="text-white text-xl" />,
      title: "Industry-Leading Training",
      description: "Gain expertise in clinical data management, regulatory compliance, and medical coding with our comprehensive curriculum."
    },
    {
      id: 2,
      icon: <FaAward className="text-white text-xl" />,
      title: "Expert Mentorship",
      description: "Learn from mentors with over three decades of combined experience in healthcare, pharmaceuticals, and research."
    },
    {
      id: 3,
      icon: <FaUsersCog className="text-white text-xl" />,
      title: "Career-Focused Approach",
      description: "Get 100% placement support with connections to top employers in pharmaceutical and biotechnology companies."
    },
    {
      id: 4,
      icon: <FaBookMedical className="text-white text-xl" />,
      title: "Diverse Career Paths",
      description: "Explore roles from Clinical Data Coordinator to Clinical Data Scientist with competitive growth opportunities."
    }
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 60%)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center relative pb-6 mb-8 lg:mb-16 mx-auto max-w-2xl">
          <h5 className="font-bold uppercase mb-2 tracking-wider text-sm md:text-base text-red-500">
            Why Choose Us
          </h5>
          <h5 className="font-bold uppercase mb-2 tracking-wider text-sm md:text-base text-gray-700">
            Clinical Data Management Career
          </h5>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Transform Your Future in Healthcare Data Management
          </h1>
          <br />
          <center><AnimatedLine /></center>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Features 1 & 2 */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            {features.slice(0, 2).map((feature) => (
              <div 
                key={feature.id}
                className="bg-white transform transition duration-500 hover:scale-105 p-6 rounded-lg shadow-md flex flex-col h-full border border-gray-200"
              >
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-lg" 
                    style={{ backgroundColor: primaryColor }}>
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Middle Column - Image */}
          <div className="relative hidden md:block h-full min-h-64 lg:min-h-80 row-span-2 md:row-span-1 lg:row-span-2 order-1 md:order-2">
            <img 
              className="w-full h-full rounded-lg object-cover shadow-lg transform transition duration-500 hover:scale-105" 
              src={featureImage} 
              alt="Clinical Data Management Training"
            />
          </div>
          
          {/* Right Column - Features 3 & 4 */}
          <div className="flex flex-col space-y-6 md:space-y-8 order-2 md:order-3">
            {features.slice(2, 4).map((feature) => (
              <div 
                key={feature.id}
                className="bg-white transform transition duration-500 hover:scale-105 p-6 rounded-lg shadow-md flex flex-col h-full border border-gray-200"
              >
                <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-lg" 
                    style={{ backgroundColor: primaryColor }}>
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Mobile Image (only shown on small screens) */}
          <div className="relative md:hidden h-64 w-full order-3">
            <img 
              className="w-full h-full rounded-lg object-cover shadow-lg" 
              src={featureImage} 
              alt="Clinical Data Management Training"
            />
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate("/clinicaldatamanagement")}
            className="px-6 py-3 text-white font-medium rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: primaryColor }}
          >
            Explore CDM Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;