import React, { useState } from 'react';
import { 
  Database, 
  Layers, 
  Globe, 
  Shield, 
  Server, 
  Zap, 
  Target,
  BarChart2,
  FileText,
  
} from 'lucide-react';

const ClinicalDataManagementFeature = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = {
    overview: {
      icon: <Layers className="w-12 h-12 text-blue-500" />,
      title: "Clinical Data Management Overview",
      description: "A comprehensive approach to collecting, integrating, and managing data in clinical research, ensuring accuracy, reliability, and compliance throughout the research lifecycle.",
      keyPoints: [
        "Systematic collection and management of clinical trial data",
        "Ensuring data integrity and quality",
        "Supporting critical decision-making in medical research"
      ]
    },
    growth: {
      icon: <FileText className="w-12 h-12 text-green-500" />,
      title: "Market Growth and Opportunities",
      description: "The Clinical Data Management market is experiencing exponential growth, driven by technological advancements and increasing clinical research investments.",
      statistics: [
        "Expected to reach $2.5 billion by 2027",
        "CAGR of 12.5% from 2022 to 2027",
        "Increasing demand in pharmaceutical and biotechnology sectors"
      ],
      opportunities: [
        "Healthcare Technology Integration",
        "AI and Machine Learning in Data Management",
        "Real-World Evidence (RWE) Data Analysis"
      ]
    },
    advancedTechnologies: {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Advanced Technologies in CDM",
      description: "Cutting-edge technologies transforming clinical data management, enhancing efficiency, accuracy, and insights.",
      technologies: [
        "Artificial Intelligence and Machine Learning",
        "Blockchain for Data Security",
        "Cloud-Based Data Management Platforms",
        "Advanced Analytics and Predictive Modeling"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Navigation Tabs */}
          <div className="bg-blue-600 text-white p-4 flex justify-center space-x-4">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center 
                ${activeSection === section 
                  ? 'bg-white text-blue-600 shadow-lg' 
                  : 'hover:bg-blue-500 text-white'}`}
              >
                {sections[section].icon}
                <span className="ml-2 hidden md:block">
                  {sections[section].title}
                </span>
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="p-8 grid md:grid-cols-2 gap-8">
            {/* Left Column - Icon and Title */}
            <div className="flex flex-col items-center">
              {sections[activeSection].icon}
              <h2 className="text-3xl font-bold text-blue-900 mt-4 text-center">
                {sections[activeSection].title}
              </h2>
              <p className="text-gray-600 mt-4 text-center">
                {sections[activeSection].description}
              </p>
            </div>

            {/* Right Column - Detailed Information */}
            <div>
              {activeSection === 'overview' && (
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    Key Aspects of Clinical Data Management
                  </h3>
                  <div className="space-y-4">
                    {sections[activeSection].keyPoints.map((point, index) => (
                      <div 
                        key={index} 
                        className="bg-blue-50 p-4 rounded-lg flex items-center 
                        transform transition hover:scale-105 hover:shadow-md"
                      >
                        <Target className="mr-4 text-blue-500" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSection === 'growth' && (
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    Market Insights and Opportunities
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-xl font-semibold text-blue-700 mb-2">
                        Market Statistics
                      </h4>
                      {sections[activeSection].statistics.map((stat, index) => (
                        <div 
                          key={index} 
                          className="flex items-center mb-2 transform transition 
                          hover:translate-x-2"
                        >
                          <BarChart2 className="mr-3 text-green-500" />
                          <span className="text-gray-700">{stat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-xl font-semibold text-blue-700 mb-2">
                        Emerging Opportunities
                      </h4>
                      {sections[activeSection].opportunities.map((opp, index) => (
                        <div 
                          key={index} 
                          className="flex items-center mb-2 transform transition 
                          hover:translate-x-2"
                        >
                          <Globe className="mr-3 text-purple-500" />
                          <span className="text-gray-700">{opp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'advancedTechnologies' && (
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    Innovative Technologies
                  </h3>
                  <div className="space-y-4">
                    {sections[activeSection].technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="bg-blue-50 p-4 rounded-lg flex items-center 
                        transform transition hover:scale-105 hover:shadow-md"
                      >
                        <Server className="mr-4 text-purple-500" />
                        <span className="text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-blue-100 p-4 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-2">
                      Future of Clinical Data Management
                    </h4>
                    <p className="text-gray-700">
                      Integrating advanced technologies to transform data collection, 
                      analysis, and decision-making in clinical research.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalDataManagementFeature;