import { motion } from "framer-motion";
import { useState } from "react";

// Sample image (replace with your own)
import medicalCodingImage from "../../assets/Gemini_Generated_Image_dijvp3dijvp3dijv.jpg";

const slides = [
  {
    title: "Scope of Medical Coding",
    subtitle: "An Overview of Career Opportunities and Industry Demand",
    content: null, // Title slide
    image: medicalCodingImage,
  },
  {
    title: "Introduction to Medical Coding",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Translating medical diagnoses/procedures into codes (ICD, CPT, HCPCS).</li>
        <li><strong>Purpose:</strong> Billing, insurance claims, and compliance.</li>
        <li><strong>Key Systems:</strong> ICD-10, CPT, HCPCS.</li>
      </ul>
    ),
    image: medicalCodingImage,
  },
  {
    title: "Career Opportunities",
    content: (
      <div>
        <p className="font-bold mb-2">Job Roles:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Medical Coder</li>
          <li>Coding Auditor</li>
          <li>Health Information Manager</li>
        </ul>
        <p className="mt-3"><strong>Growth:</strong> 7% CAGR (U.S. BLS)</p>
      </div>
    ),
    image: medicalCodingImage,
  },
  // Add more slides as needed...
];

export default function PresentationSlides() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl flex"
      >
        {/* Image Section (Left) */}
        <div className="w-1/3 bg-blue-600 flex items-center justify-center p-4">
          <motion.img
            src={slides[currentSlide].image}
            alt="Medical Coding"
            className="rounded-lg shadow-md object-cover h-64"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Content Section (Right) */}
        <div className="w-2/3 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-800 mb-2">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-gray-600 mb-6">{slides[currentSlide].subtitle}</p>
            )}
            {slides[currentSlide].content && (
              <div className="text-gray-700">
                {slides[currentSlide].content}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}