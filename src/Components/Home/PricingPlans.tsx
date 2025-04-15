import React from 'react';
import { FaLaptopMedical, FaUserMd, FaChartLine, FaDatabase, FaShieldAlt, FaFileMedicalAlt, FaCheck } from "react-icons/fa";

const TrainingPrograms = () => {
  const programs = [
    {
      id: 1,
      name: "Clinical Data Management",
      description: "Comprehensive training in clinical data collection, processing, and analysis for clinical trials",
      features: [
        "CDM principles & clinical research basics",
        "EDC systems (Rave, Medidata, Veeva)",
        "CDISC standards (CDASH/SDTM/ADaM)",
        "Database design and management",
        "Regulatory compliance (ICH-GCP, 21 CFR Part 11)",
        "Medical coding (MedDRA/WHO-DD)"
      ],
      icon: <FaLaptopMedical className="text-4xl mx-auto mb-4 text-blue-600" />,
      careerPaths: [
        "Clinical Data Coordinator",
        "Clinical Data Manager",
        "Clinical Data Scientist",
        "Data Quality Lead"
      ]
    },
    {
      id: 2,
      name: "Medical Coding",
      description: "Specialized training in medical coding systems for accurate healthcare documentation",
      features: [
        "ICD-10-CM coding system",
        "CPT coding for medical procedures",
        "Medical terminology and anatomy",
        "Healthcare billing procedures",
        "Compliance and auditing",
        "Certification exam preparation"
      ],
      icon: <FaFileMedicalAlt className="text-4xl mx-auto mb-4 text-green-600" />,
      careerPaths: [
        "Medical Coder",
        "Billing Specialist",
        "Health Information Technician",
        "Coding Auditor"
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Industry-Focused Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your career with our comprehensive Clinical Data Management and Medical Coding training
          </p>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                {/* Program Header */}
                <div className="mb-6 text-center">
                  {program.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                  <p className="text-gray-600 mt-2">
                    {program.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Learning Areas:</h4>
                  <ul className="space-y-3 text-left">
                    {program.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-gray-700"
                      >
                        <FaCheck className="mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Paths */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Career Opportunities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.careerPaths.map((path, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Training Programs?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaUserMd className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Learn from industry veterans with 30+ years of combined experience in healthcare and clinical research.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hands-on Training</h3>
                <p className="text-gray-600">Practical exercises using real-world case studies and our proprietary ClinOptima platform.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaDatabase className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry Tools</h3>
                <p className="text-gray-600">Training on Medidata Rave, Oracle Clinical, ICD-10 coding systems and other industry-standard tools.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaShieldAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Placement Support</h3>
                <p className="text-gray-600">100% placement assistance with connections to top employers in the healthcare and pharmaceutical industries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;