import React, { useState } from 'react';
import { BookOpen, CheckCircle, UserPlus, ArrowRight } from 'lucide-react';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    educationLevel: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const courses = [
    { value: 'Clinical Data Management', label: 'Clinical Data Management' },
    { value: 'Medical Coding', label: 'Medical Coding' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      
      const response = await fetch(`${API_URL}/enrolls`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      
      // Set submitted to true and reset the form data
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        educationLevel: ''
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 ">
        <div className="bg-white shadow-lg rounded-xl p-10 max-w-md w-full text-center ">
          <CheckCircle className="mx-auto text-green-500 w-24 h-24 mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Enrollment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            We'll contact you soon with more details about your chosen course.
          </p>
          <button 
            onClick={resetForm}
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center"
          >
            Back to Enrollment <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-auto flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden mt-30 max-w-4xl w-full grid md:grid-cols-2 ">
        {/* Informative Side */}
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-10 flex flex-col justify-center">
          <div className="mb-8">
            <BookOpen className="w-16 h-16 mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4">
              Discover Your Fashion Journey
            </h2>
            <p className="text-white/80 mb-6">
              Unlock your potential in the world of fashion with Clinimode's 
              comprehensive courses designed to transform your passion into 
              a professional career.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              'Industry-Expert Instructors',
              'Hands-on Practical Training',
              'Placement Assistance',
              'State-of-the-Art Facilities'
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <UserPlus className="mr-3 w-6 h-6" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enrollment Form */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Enroll Now
          </h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
              {error}
            </div>
          )}
          
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
          
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Education Level</option>
            <option value="high-school">High School</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate</option>
            <option value="professional">Professional</option>
          </select>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center"
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>Submit Application <ArrowRight className="ml-2" /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;