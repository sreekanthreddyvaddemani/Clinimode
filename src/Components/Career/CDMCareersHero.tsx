import React, { useEffect, useState } from 'react';
import { 
  Briefcase, 
  LineChart, 
  Globe, 
  Clipboard,
  Shield,
  Users,
  Database,
  GraduationCap,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const CDMCareersHero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToEnrollForm = () => {
    const enrollFormElement = document.getElementById('enroll-form-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToJobs = () => {
    const enrollFormElement = document.getElementById('jobs-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const careerPaths = [
    {
      icon: <Clipboard className="w-10 h-10 text-red-600" />,
      title: "Clinical Data Coordinator",
      description: "Data entry, resolving discrepancies, and ensuring data accuracy",
      level: "Entry-Level"
    },
    {
      icon: <Database className="w-10 h-10 text-red-600" />,
      title: "Clinical Data Manager",
      description: "Design data management plans and ensure regulatory compliance",
      level: "Mid-Level"
    },
    {
      icon: <LineChart className="w-10 h-10 text-red-600" />,
      title: "Clinical Data Scientist",
      description: "Analyze datasets and extract insights using SAS, R, or Python",
      level: "Senior-Level"
    },
    {
      icon: <Shield className="w-10 h-10 text-red-600" />,
      title: "Data Quality Lead",
      description: "Ensure data quality and compliance with industry standards",
      level: "Senior-Level"
    }
  ];

  const growthFactors = [
    {
      icon: <TrendingUp className="w-6 h-6 text-red-600" />,
      title: "Industry Growth",
      description: "Life sciences and pharmaceutical industries are expanding, leading to increased need for CDM professionals"
    },
    {
      icon: <Database className="w-6 h-6 text-red-600" />,
      title: "Technological Advancements",
      description: "AI, machine learning, and cloud-based solutions in clinical trials create new opportunities"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-red-600" />,
      title: "Global Demand",
      description: "15,000+ new jobs yearly with GCCs being established in India"
    }
  ];

  return (
    <div
      className={`w-full min-h-screen transition-all duration-700 ease-in-out relative ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Main Background - changed to white */}
      <div 
        className="absolute inset-0"
      ></div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-black/5"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10 flex flex-col justify-center min-h-screen py-20">
        {/* Main Content */}
        <div className="mt-[100px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <h1
              className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 transition-all duration-700 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Build Your Career in <br /><span className="text-red-600 text-3xl md:text-4xl lg:text-5xl">Clinical Data Management</span>
            </h1>
            
            <p
              className={`text-gray-700 mb-8 transition-all duration-700 delay-500 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              The job outlook for Clinical Data Management roles is highly promising, driven by the growing 
              demand for efficient data handling in clinical research and healthcare.
            </p>

            <div
              className={`flex flex-col mb-8 transition-all duration-700 delay-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Clinical Data Management?</h3>
              <div className="space-y-4">
                {growthFactors.map((factor, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
                    <div className="bg-gray-200 p-2 rounded-full">
                      {factor.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium">{factor.title}</h4>
                      <p className="text-gray-700 text-sm">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 delay-900 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
                           
                            <button  onClick={scrollToEnrollForm} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-red-600/30">
                <GraduationCap className="mr-2" /> Explore Training
              </button>
              <button onClick={scrollToJobs} className="bg-transparent border-2 border-gray-800/70 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center hover:shadow-lg">
                View Job Openings <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Career Paths Grid */}
          <div className="lg:w-1/2">
            <h2 className={`text-2xl font-bold text-gray-800 mb-6 transition-all duration-700 delay-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Career Paths in Clinical Data Management
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-1100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {careerPaths.map((career, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-100 to-white p-6 rounded-xl border border-gray-200 hover:border-red-600/20 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-200 p-3 rounded-full">
                      {career.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium bg-red-500/20 text-red-600 inline-block px-2 py-1 rounded mb-2">{career.level}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{career.title}</h3>
                      <p className="text-gray-700 text-sm">{career.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className={`mt-16 transition-all duration-700 delay-1300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-600 text-center mb-6">Career Opportunities with Top Employers</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {['IQVIA', 'AstraZeneca', 'Novo Nordisk', 'Parexel', 'Syneos Health', 'Accenture', 'Cipla', 'Cognizant'].map((company, i) => (
              <div key={i} className="text-gray-800 text-lg md:text-xl font-medium opacity-80 hover:opacity-100 transition-opacity">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>




      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default CDMCareersHero;