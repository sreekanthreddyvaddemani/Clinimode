import React, { useState } from 'react';
import { Save } from 'lucide-react';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    qualification: '',
    specialization: '',
    address: '',
    collegeName: '',
    mastersDegree: '',
    yearOfPassOut: '',
    hasTraining: 'No',
    trainingDetails: '',
    certifications: '',
    interestedDomain: '',
    candidateType: 'Fresher',
    yearsOfExperience: '',
    noticePeriod: '',
    currentSalary: '',
    expectedSalary: '',
    currentCompanyName: '',
    roleWorkedIn: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://192.168.1.202:3000/api/job-registration/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Candidate submitted successfully!");
        // Reset form (optional)
        setFormData({
          fullName: '',
          mobileNumber: '',
          emailAddress: '',
          qualification: '',
          specialization: '',
          address: '',
          collegeName: '',
          mastersDegree: '',
          yearOfPassOut: '',
          hasTraining: 'No',
          trainingDetails: '',
          certifications: '',
          interestedDomain: '',
          candidateType: 'Fresher',
          yearsOfExperience: '',
          noticePeriod: '',
          currentSalary: '',
          expectedSalary: '',
          currentCompanyName: '',
          roleWorkedIn: '',
        });
      } else {
        alert("Failed to submit candidate. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting candidate:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 px-8">
          <h1 className="text-3xl font-bold text-white">Job Application Form</h1>
          <p className="text-blue-100 mt-2">Please fill out all the required information</p>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="bg-green-100 p-6 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">Application Submitted!</h2>
              <p className="text-green-700">Thank you for your application. We will get back to you soon.</p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
            {/* Section 1: Basic Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
                Section 1: Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mobileNumber">
                    Mobile Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="emailAddress">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="qualification">
                    Qualification<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    required
                    placeholder="e.g., B.Tech, B.Sc, M.Sc"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="specialization">
                    Specialization<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    required
                    placeholder="e.g., Computer Science, Electronics"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="collegeName">
                    College Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="collegeName"
                    name="collegeName"
                    required
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mastersDegree">
                    Master's Degree (If Any)
                  </label>
                  <input
                    type="text"
                    id="mastersDegree"
                    name="mastersDegree"
                    placeholder="e.g., M.Tech in AI, MBA in HR"
                    value={formData.mastersDegree}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="yearOfPassOut">
                    Year of Pass Out<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="yearOfPassOut"
                    name="yearOfPassOut"
                    required
                    value={formData.yearOfPassOut}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="interestedDomain">
                    Interested Domain<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="interestedDomain"
                    name="interestedDomain"
                    required
                    placeholder="e.g., Java Development, Data Science, Testing"
                    value={formData.interestedDomain}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Have You Undergone Any Training?<span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4 mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="hasTraining"
                        value="Yes"
                        checked={formData.hasTraining === "Yes"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="hasTraining"
                        value="No"
                        checked={formData.hasTraining === "No"}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="address">
                  Address<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              {formData.hasTraining === "Yes" && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="trainingDetails">
                    Training Details<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="trainingDetails"
                    name="trainingDetails"
                    required
                    rows="3"
                    value={formData.trainingDetails}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
              )}
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="certifications">
                  Certifications (if any)
                </label>
                <textarea
                  id="certifications"
                  name="certifications"
                  rows="3"
                  value={formData.certifications}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Are you a Fresher or Experienced?<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="candidateType"
                      value="Fresher"
                      checked={formData.candidateType === "Fresher"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Fresher</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="candidateType"
                      value="Experienced"
                      checked={formData.candidateType === "Experienced"}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Experienced</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Section 2: For Experienced Candidates Only */}
            {formData.candidateType === "Experienced" && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-gray-200">
                  Section 2: For Experienced Candidates Only
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="yearsOfExperience">
                      Years of Experience<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      required
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="noticePeriod">
                      Notice Period<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="noticePeriod"
                      name="noticePeriod"
                      required
                      placeholder="e.g., Immediate, 15 Days, 1 Month"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="currentSalary">
                      Current Salary<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="currentSalary"
                      name="currentSalary"
                      required
                      value={formData.currentSalary}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="expectedSalary">
                      Expected Salary<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="expectedSalary"
                      name="expectedSalary"
                      required
                      value={formData.expectedSalary}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="currentCompanyName">
                      Current Company Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="currentCompanyName"
                      name="currentCompanyName"
                      required
                      value={formData.currentCompanyName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="roleWorkedIn">
                      Role You Worked In<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="roleWorkedIn"
                      name="roleWorkedIn"
                      required
                      value={formData.roleWorkedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2 transition-all shadow-md ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                <Save size={18} />
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </div>
      
      <div className="max-w-4xl mx-auto mt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default JobApplicationForm;