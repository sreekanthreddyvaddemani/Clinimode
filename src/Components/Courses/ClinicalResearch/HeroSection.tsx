import React from 'react';
import { 
  BookOpen, 
  Award, 
  Users, 
  Target, 
  Download, 
  Phone, 
  CheckCircle, 
  Globe 
} from 'lucide-react';

const HeroSection = () => {
  const features = [
    { 
      icon: <BookOpen className="w-6 h-6 text-blue-500" />, 
      text: "Comprehensive Curriculum" 
    },
    { 
      icon: <Award className="w-6 h-6 text-green-500" />, 
      text: "Industry-Recognized Certification" 
    },
    { 
      icon: <Users className="w-6 h-6 text-purple-500" />, 
      text: "Expert Faculty" 
    },
    { 
      icon: <Globe className="w-6 h-6 text-red-500" />, 
      text: "Global Perspectives" 
    }
  ];

  return (
    <div className="relative text-white overflow-hidden z-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mt-40">
          {/* Animated Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-700 ease-out 
            hover:scale-105 hover:text-yellow-200 animate-fadeIn">
            Clinical Research Training Program in Bengaluru
          </h1>

          {/* Subtitle with Subtle Animation */}
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90 
            animate-slideUp delay-200 text-gray-100">
            Enhance your expertise with industry-focused Clinical Research courses in Bangalore. 
            Gain hands-on experience, master cutting-edge methodologies, and prepare for a thriving 
            career in healthcare and research.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center space-x-4 mb-12 
            animate-fadeInUp delay-500">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg 
              hover:bg-blue-50 hover:shadow-lg transition transform 
              hover:-translate-y-1 flex items-center group">
              <Download className="mr-2 group-hover:rotate-12 transition" /> 
              Download Brochure
            </button>
            <button className="border border-white text-white px-6 py-3 
              rounded-lg hover:bg-white hover:text-blue-700 
              transition transform hover:-translate-y-1 flex items-center group">
              <Phone className="mr-2 group-hover:rotate-12 transition" /> 
              Contact Us
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="flex justify-center space-x-6 animate-fadeInUp delay-700">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center 
                transform transition hover:scale-110 hover:text-yellow-200">
                {feature.icon}
                <span className="mt-2 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;


// Why Choose Us Component
const WhyChooseUs = () => {
  const features = [
    { 
      icon: Award, 
      title: 'Industry Accreditation', 
      description: 'Affiliated with renowned global organizations' 
    },
    { 
      icon: Users, 
      title: 'Expert Faculty', 
      description: 'Learn from industry professionals with decades of experience' 
    },
    { 
      icon: Target, 
      title: 'Career Support', 
      description: 'Collaborate with top recruiters for job placement' 
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Why Choose Our Program
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-md transform transition hover:scale-105 hover:shadow-xl"
            >
              <feature.icon className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

