import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define TypeScript interface for candidate data
interface Candidate {
  id: number;
  fullname: string;
  mobilenumber: string;
  emailaddress: string;
  qualification: string;
  specialization: string;
  address: string;
  collegename: string;
  mastersdegree: string | null;
  yearofpassout: string;
  hastraining: string;
  trainingdetails: string | null;
  certifications: string | null;
  interesteddomain: string;
  candidatetype: string;
  yearsofexperience: string | null;
  noticeperiod: string | null;
  currentsalary: string | null;
  expectedsalary: string | null;
  currentcompanyname: string | null;
  roleworkedin: string | null;
  status?: string; // Added for UI state tracking
}

const CandidateTable = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://192.168.1.202:3000/api/job-registration/get');
        console.log(response.data); // Log the full response for debugging
  
        // Check if the response contains the 'data' key and it is an array
        if (response.data && Array.isArray(response.data.data)) {
          setCandidates(response.data.data.map((candidate: any) => ({
            ...candidate,
            status: candidate.status || 'pending', // Default status if not provided
          })));
        } else {
          throw new Error('API response does not contain valid candidate data.');
        }
  
        setError(null); // Clear error if successful
      } catch (err) {
        setError('Failed to fetch candidates. Make sure the API server is running.');
        console.error('Error fetching candidates:', err);
      } finally {
        setLoading(false); // End loading state
      }
    };
  
    fetchCandidates();
  }, []);
  
  
  // Handle status change
  const handleStatusChange = (id: number, newStatus: string) => {
    setCandidates(candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status: newStatus } : candidate
    ));
  };

  // Get row background color based on status
  const getRowBgColor = (status: string | undefined) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100';
      case 'rejected':
        return 'bg-red-100';
      default:
        return 'bg-white';
    }
  };

  // Toggle expanded view for a candidate
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) return (
    <div className="flex justify-center items-center p-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      <span className="ml-3 text-lg font-medium">Loading candidates...</span>
    </div>
  );
  
  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4 rounded shadow">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-red-700 font-medium">Error: {error}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Candidate Applications</h2>
        <p className="text-gray-600 mt-2">Review and manage applicant profiles</p>
      </div>
      
      <div className="bg-white overflow-hidden shadow-lg rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="px-6 py-4 text-left">Full Name</th>
              <th className="px-6 py-4 text-left">Contact Info</th>
              <th className="px-6 py-4 text-left">Education</th>
              <th className="px-6 py-4 text-left">Experience</th>
              <th className="px-6 py-4 text-left">Salary</th>
              <th className="px-6 py-4 text-left">Domain</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <React.Fragment key={candidate.id}>
                  <tr 
                    className={`border-b ${getRowBgColor(candidate.status)} hover:bg-gray-50 cursor-pointer transition-colors duration-200`}
                    onClick={() => toggleExpand(candidate.id)}
                  >
                    <td className="px-6 py-4">
                      <div className="font-medium text-blue-700">{candidate.fullname}</div>
                      <div className="text-sm text-gray-500">{candidate.candidatetype}</div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>{candidate.mobilenumber}</span>
                      </div>
                      <div className="flex items-center text-sm mt-1">
                        <svg className="h-4 w-4 text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>{candidate.emailaddress}</span>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div>{candidate.qualification}</div>
                      <div className="text-sm text-gray-600">{candidate.specialization}</div>
                    </td>
                    
                    <td className="px-6 py-4">
                      {candidate.candidatetype === 'Experienced' ? (
                        <>
                          <div>{candidate.currentcompanyname}</div>
                          <div className="text-sm">{candidate.yearsofexperience} years</div>
                        </>
                      ) : (
                        <div className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Fresher</div>
                      )}
                    </td>
                    
                    <td className="px-6 py-4">
                      {candidate.candidatetype === 'Experienced' ? (
                        <div>Expected: {candidate.expectedsalary || 'N/A'}</div>
                      ) : (
                        <div>Expected: {candidate.expectedsalary || 'N/A'}</div>
                      )}
                    </td>
                    
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">
                        {candidate.interesteddomain}
                      </span>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(candidate.id, 'approved');
                          }}
                          className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-200 ${
                            candidate.status === 'approved'
                              ? 'bg-green-500 text-white'
                              : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-800'
                          }`}
                        >
                          {candidate.status === 'approved' ? 'Interviewed' : 'Interview Completed'}
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStatusChange(candidate.id, 'rejected');
                          }}
                          className={`px-3 py-1 text-sm rounded-full font-medium transition-colors duration-200 ${
                            candidate.status === 'rejected'
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-800 hover:bg-red-100 hover:text-red-800'
                          }`}
                        >
                          {candidate.status === 'rejected' ? 'Rejected' : 'Reject'}
                        </button>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Expanded details row */}
                  {expandedId === candidate.id && (
                    <tr className="bg-gray-50">
                      <td colSpan={7} className="px-6 py-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Education Details</h4>
                            <p><span className="text-gray-500">College:</span> {candidate.collegename}</p>
                            <p><span className="text-gray-500">Year of Passing:</span> {candidate.yearofpassout}</p>
                            {candidate.mastersdegree && (
                              <p><span className="text-gray-500">Masters:</span> {candidate.mastersdegree}</p>
                            )}
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Professional Details</h4>
                            {candidate.candidatetype === 'Experienced' && (
                              <>
                                <p><span className="text-gray-500">Role:</span> {candidate.roleworkedin}</p>
                                <p><span className="text-gray-500">Notice Period:</span> {candidate.noticeperiod}</p>
                                <p><span className="text-gray-500">Current Salary:</span> {candidate.currentsalary}</p>
                              </>
                            )}
                            {candidate.hastraining === 'Yes' && (
                              <p><span className="text-gray-500">Training:</span> {candidate.trainingdetails}</p>
                            )}
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Additional Information</h4>
                            <p><span className="text-gray-500">Address:</span> {candidate.address}</p>
                            {candidate.certifications && (
                              <p><span className="text-gray-500">Certifications:</span> {candidate.certifications}</p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-500">
                  <div className="flex flex-col items-center">
                    <svg className="h-12 w-12 text-gray-400 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-lg">No candidates found</p>
                    <p className="text-sm text-gray-400">Try refreshing the page or checking back later</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;