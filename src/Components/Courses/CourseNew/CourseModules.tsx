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



// Course Options Component


// Course Modules Component
const CourseModules = () => {
  const moduleGroups = [
    {
      type: 'Foundation & Non-Technical',
      duration: '1-2 Months',
      modules: [
        'Professional Development & Soft Skills',
        'Aptitude & Analytical Thinking'
      ]
    },
    {
      type: 'Core Technical',
      duration: '5 Months',
      modules: [
        'Clinical Research & Trial Management',
        'Pharmacovigilance & Drug Safety',
        'Clinical Data Management (CDM)',
        'Regulatory Affairs & Compliance',
        'Medical Writing & Documentation'
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Comprehensive Course Modules
        </h2>
        {moduleGroups.map((group, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">
              {group.type} Modules ({group.duration})
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {group.modules.map((module, modIndex) => (
                <div 
                  key={modIndex} 
                  className="bg-blue-50 p-4 rounded-lg flex items-center hover:bg-blue-100 transition"
                >
                  <CheckCircle className="mr-4 text-blue-600" />
                  <span className="text-blue-900">{module}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseModules;