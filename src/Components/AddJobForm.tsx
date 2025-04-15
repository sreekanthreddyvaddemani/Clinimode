import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Save, X } from 'lucide-react';

const AddJobForm = ({ onAddJob, category = 'Clinical Data Management' }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [jobData, setJobData] = useState({
    title: '',
    level: 'Entry-Level',
    skills: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!jobData.title || !jobData.description || !jobData.skills) {
      alert('Please fill in all required fields');
      return;
    }

    // Convert skills string to array
    const jobToAdd = {
      ...jobData,
      skills: jobData.skills.split(',').map(skill => skill.trim()),
      category
    };

    // Call the parent component's add job function
    onAddJob(jobToAdd);

    // Reset form and close
    setJobData({
      title: '',
      level: 'Entry-Level',
      skills: '',
      description: ''
    });
    setIsFormOpen(false);
  };

  return (
    <div className="relative">
      {/* Add Job Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsFormOpen(true)}
        className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
      >
        <Plus className="mr-2" /> Add New Job
      </motion.button>

      {/* Modal Form */}
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">
                Add New Job Position
              </h2>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={jobData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Clinical Data Coordinator"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Job Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Level
                </label>
                <select
                  name="level"
                  value={jobData.level}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Entry-Level">Entry-Level</option>
                  <option value="Mid-Level">Mid-Level</option>
                  <option value="Senior-Level">Senior-Level</option>
                  <option value="Leadership">Leadership</option>
                </select>
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Key Skills (comma-separated)
                </label>
                <input
                  type="text"
                  name="skills"
                  value={jobData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g., Data Entry, Excel, Protocol Knowledge"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter skills separated by commas
                </p>
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  name="description"
                  value={jobData.description}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Provide a detailed job description including key responsibilities..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-4">
                <motion.button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  <Save className="mr-2" /> Save Job
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AddJobForm;