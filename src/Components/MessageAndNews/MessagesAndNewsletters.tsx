import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmplyeeForm';

// Component for loading state
const Loading = () => (
  <div className="flex flex-col justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-700"></div>
    <p className="mt-4 text-gray-500">Loading your data...</p>
  </div>
);

// Component for error state
const ErrorDisplay = ({ error }) => (
  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <p className="text-sm text-red-700">{error}</p>
      </div>
    </div>
  </div>
);

// Component for message item
const MessageItem = ({ message, onReply, onDelete, onSelect }) => {
  const renderID = (id) => {
    if (id === undefined || id === null) return 'N/A';
    return id.toString();
  };

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:border-red-300 transform-gpu hover:translate-y-px relative">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg text-gray-800 truncate max-w-[80%]">{message.subject || 'No Subject'}</h3>
        <span className="bg-red-100 font-bold text-red-800 text-xs px-3 py-1 rounded-full">
          {renderID(message.id)}
        </span>
      </div>
      <div
        className="bg-gray-50 p-4 rounded-lg mb-4 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden"
        style={{ minHeight: '80px' }}
        onClick={() => onSelect(message)}
      >
        {message.message ? (
          message.message.length > 100 ? `${message.message.substring(0, 100)}...` : message.message
        ) : 'No message content'}
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center text-sm mb-2 sm:mb-0">
          <div className="bg-red-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3 flex-shrink-0">
            {(message.name && message.name.charAt(0).toUpperCase()) || '?'}
          </div>
          <div className="min-w-0">
            <p className="font-medium truncate">{message.name || 'Unknown'}</p>
            <p className="text-gray-500 truncate">{message.email || 'No email'}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            onClick={() => onReply(message)}
            title="Reply to message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          <button
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            onClick={() => onDelete(message.id)}
            title="Delete message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Component for newsletter item
const NewsletterItem = ({ newsletter, onUnsubscribe, onEdit }) => {
  const renderID = (id) => {
    if (id === undefined || id === null) return 'N/A';
    return id.toString();
  };

  const hasValidID = (item) => {
    return item && (item.id !== undefined && item.id !== null);
  };

  return (
    <tr className="hover:bg-red-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {renderID(newsletter.id)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis max-w-xs">
        {newsletter.email || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {hasValidID(newsletter) && (
          <button
            onClick={() => onUnsubscribe(newsletter.id)}
            className="text-red-600 hover:text-red-900 mr-4 hover:underline transition-all duration-200"
          >
            Unsubscribe
          </button>
        )}
        <button onClick={onEdit} className="text-red-600 hover:text-red-900 hover:underline transition-all duration-200">
          Edit
        </button>
      </td>
    </tr>
  );
};

// Component for enrollment item
const EnrollmentItem = ({ enrollment, onDelete, onEdit }) => {
  const renderID = (id) => {
    if (id === undefined || id === null) return 'N/A';
    return id.toString();
  };

  const hasValidID = (item) => {
    return item && (item.id !== undefined && item.id !== null);
  };

  return (
    <tr className="hover:bg-red-50 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {renderID(enrollment.id)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {enrollment.name || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 overflow-hidden text-ellipsis max-w-xs">
        {enrollment.email || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {enrollment.course || 'N/A'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
          {enrollment.status || 'Enrolled'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {hasValidID(enrollment) && (
          <button
            onClick={() => onDelete(enrollment.id)}
            className="text-red-600 hover:text-red-900 mr-4 hover:underline transition-all duration-200"
          >
            Delete
          </button>
        )}
        <button onClick={() => onEdit(enrollment)} className="text-red-600 hover:text-red-900 hover:underline transition-all duration-200">
          Edit
        </button>
      </td>
    </tr>
  );
};

// Message detail modal
const MessageDetailModal = ({ message, onClose, onReply, onDelete }) => {
  const renderID = (id) => {
    if (id === undefined || id === null) return 'N/A';
    return id.toString();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 truncate max-w-[80%]">{message.subject || 'No Subject'}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-500">From: {message.name || 'Unknown'} ({message.email || 'No email'})</p>
          <p className="text-sm text-gray-500">ID: {renderID(message.id)}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-gray-700 max-h-64 overflow-y-auto">
          {message.message || 'No message content'}
        </div>
        <div className="flex justify-end space-x-3">
          <button onClick={() => onDelete(message.id)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
            Delete
          </button>
          <button onClick={() => onReply(message)} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

// Enrollment detail modal
const EnrollmentDetailModal = ({ enrollment, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: enrollment.name || '',
    email: enrollment.email || '',
    course: enrollment.course || '',
    status: enrollment.status || 'Enrolled'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...enrollment, ...formData });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 fade-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Edit Enrollment</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Student Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
              Course
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="course"
              name="course"
              type="text"
              value={formData.course}
              onChange={handleChange}
              placeholder="Course Name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Enrolled">Enrolled</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button 
              type="button" 
              onClick={onClose} 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Delete Confirmation Modal component
const DeleteConfirmationModal = ({ item, onClose, onConfirm }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-md w-full p-6 fade-in">
      <div className="flex items-center justify-center mb-4 text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Confirm Delete</h3>
      <p className="text-gray-600 text-center mb-6">
        {item.type === 'message'
          ? 'Are you sure you want to delete this message? This action cannot be undone.'
          : item.type === 'newsletter'
          ? 'Are you sure you want to unsubscribe this email? This action cannot be undone.'
          : 'Are you sure you want to delete this enrollment? This action cannot be undone.'}
      </p>
      <div className="flex justify-center space-x-4">
        <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
          Cancel
        </button>
        <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
          Delete
        </button>
      </div>
    </div>
  </div>
);

const MessagesNewslettersDashboard = () => {
  const [activeTab, setActiveTab] = useState('messages');
  const [messages, setMessages] = useState([]);
  const [newsletters, setNewsletters] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  
  const API_URL = 'http://localhost:3001';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const messagesResponse = await axios.get(`${API_URL}/messages`);
        const newslettersResponse = await axios.get(`${API_URL}/newsletters`);
        const enrollmentsResponse = await axios.get(`${API_URL}/enrolls`);

        setMessages(messagesResponse.data);
        setNewsletters(newslettersResponse.data);
        setEnrollments(enrollmentsResponse.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch data. Make sure JSON Server is running.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUnsubscribe = async (id) => {
    if (!id) {
      console.error('Cannot unsubscribe: Invalid ID');
      return;
    }

    try {
      await axios.delete(`${API_URL}/newsletters/${id}`);
      setNewsletters(newsletters.filter((newsletter) => newsletter.id !== id));
      setDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (err) {
      console.error('Error deleting newsletter:', err);
      alert('Failed to unsubscribe. Please try again.');
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!id) {
      console.error('Cannot delete message: Invalid ID');
      return;
    }

    try {
      await axios.delete(`${API_URL}/messages/${id}`);
      setMessages(messages.filter((message) => message.id !== id));
      setDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (err) {
      console.error('Error deleting message:', err);
      alert('Failed to delete message. Please try again.');
    }
  };

  const handleDeleteEnrollment = async (id) => {
    if (!id) {
      console.error('Cannot delete enrollment: Invalid ID');
      return;
    }

    try {
      await axios.delete(`${API_URL}/enrolls/${id}`);
      setEnrollments(enrollments.filter((enrollment) => enrollment.id !== id));
      setDeleteModalOpen(false);
      setItemToDelete(null);
    } catch (err) {
      console.error('Error deleting enrollment:', err);
      alert('Failed to delete enrollment. Please try again.');
    }
  };

  const handleUpdateEnrollment = async (updatedEnrollment) => {
    try {
      await axios.put(`${API_URL}/enrolls/${updatedEnrollment.id}`, updatedEnrollment);
      setEnrollments(enrollments.map(item => 
        item.id === updatedEnrollment.id ? updatedEnrollment : item
      ));
      setSelectedEnrollment(null);
    } catch (err) {
      console.error('Error updating enrollment:', err);
      alert('Failed to update enrollment. Please try again.');
    }
  };

  const handleReplyMessage = (message) => {
    if (!message || !message.email) {
      alert('Cannot reply: Invalid email address');
      return;
    }

    window.location.href = `mailto:${message.email}?subject=Re: ${message.subject || 'Your Message'}&body=Hello ${message.name || ''},\n\nThank you for your message. We're responding to your inquiry about:\n"${message.message || 'your message'}"\n\nRegards,\nSupport Team`;
  };

  const exportData = (dataType) => {
    let data = [];
    let filename = '';
    let headers = [];

    switch (dataType) {
      case 'newsletters':
        if (newsletters.length === 0) {
          alert('No newsletter data to export');
          return;
        }
        data = newsletters;
        filename = 'newsletter_subscribers.csv';
        headers = ['ID', 'Email', 'Status'];
        break;
      case 'enrollments':
        if (enrollments.length === 0) {
          alert('No enrollment data to export');
          return;
        }
        data = enrollments;
        filename = 'enrollments.csv';
        headers = ['ID', 'Name', 'Email', 'Course', 'Status'];
        break;
      default:
        alert('Invalid data type for export');
        return;
    }

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      headers.join(',') + '\n' +
      data.map(item => {
        if (dataType === 'newsletters') {
          return `${item.id || 'N/A'},"${item.email || 'N/A'}",Active`;
        } else {
          return `${item.id || 'N/A'},"${item.name || 'N/A'}","${item.email || 'N/A'}","${item.course || 'N/A'}","${item.status || 'Enrolled'}"`;
        }
      }).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderID = (id) => {
    if (id === undefined || id === null) return 'N/A';
    return id.toString();
  };

  const hasValidID = (item) => {
    return item && (item.id !== undefined && item.id !== null);
  };

  return (
    <div className="min-h-screen bg-[#091E3E] from-red-50 to-rose-50 p-6">
      <div className="max-w-6xl mx-auto mt-[150px]">
        <EmployeeForm />
        <br />
        <div className="bg-white shadow-md mb-8 rounded-lg overflow-hidden">
          <div className="flex flex-wrap">
            <button
              className={`py-4 px-8 font-medium transition-all duration-300 hover:bg-red-50 ${
                activeTab === 'messages' ? 'bg-red-600 text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('messages')}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Messages
                <span className="ml-2 bg-white text-red-600 rounded-full px-2 py-1 text-xs font-bold shadow-sm">
                  {messages.length}
                </span>
              </div>
            </button>
            <button
              className={`py-4 px-8 font-medium transition-all duration-300 hover:bg-red-50 ${
                activeTab === 'newsletters' ? 'bg-red-600 text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('newsletters')}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Newsletters
                <span className="ml-2 bg-white text-red-600 rounded-full px-2 py-1 text-xs font-bold shadow-sm">
                  {newsletters.length}
                </span>
              </div>
            </button>
            <button
              className={`py-4 px-8 font-medium transition-all duration-300 hover:bg-red-50 ${
                activeTab === 'enrollments' ? 'bg-red-600 text-white shadow-md' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('enrollments')}
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Enrollments
                <span className="ml-2 bg-white text-red-600 rounded-full px-2 py-1 text-xs font-bold shadow-sm">
                  {enrollments.length}
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorDisplay error={error} />
          ) : (
            <>
              {activeTab === 'messages' && (
                <div className="fade-in">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-red-800">Contact Messages</h2>
                    <div className="flex gap-3">
                      <button
                        className={`bg-red-50 text-red-700 px-4 py-2 rounded-lg hover:bg-red-100 transition ${
                          filterOpen ? 'bg-red-200' : ''
                        }`}
                        onClick={() => setFilterOpen(!filterOpen)}
                        title="Filter messages"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
</svg>
</button>
</div>
</div>

{filterOpen && (
<div className="bg-red-50 p-4 rounded-lg mb-6 shadow-md">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Search by name/email</label>
  <input
    type="text"
    className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
    placeholder="Type to search..."
  />
</div>
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Sort by</label>
  <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
    <option>Newest first</option>
    <option>Oldest first</option>
    <option>A-Z</option>
  </select>
</div>
<div className="flex items-end">
  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
    Apply Filters
  </button>
</div>
</div>
</div>
)}

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{messages.length > 0 ? (
messages.map((message) => (
<MessageItem
  key={message.id || Math.random()}
  message={message}
  onReply={handleReplyMessage}
  onDelete={(id) => {
    setItemToDelete({ id, type: 'message' });
    setDeleteModalOpen(true);
  }}
  onSelect={setSelectedMessage}
/>
))
) : (
<div className="col-span-2 bg-gray-50 p-8 rounded-lg text-center">
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-16 w-16 text-gray-400 mx-auto mb-4"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  />
</svg>
<p className="text-xl text-gray-600 mb-2">No messages yet</p>
<p className="text-gray-500">When you receive contact form submissions, they will appear here.</p>
</div>
)}
</div>
</div>
)}

{activeTab === 'newsletters' && (
<div className="fade-in">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold text-red-800">Newsletter Subscribers</h2>
<div className="flex gap-3">
<button
onClick={() => exportData('newsletters')}
className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center"
title="Export to CSV"
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  />
</svg>
Export CSV
</button>
</div>
</div>

<div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    ID
  </th>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    Email
  </th>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    Status
  </th>
  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
    Actions
  </th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{newsletters.length > 0 ? (
  newsletters.map((newsletter) => (
    <NewsletterItem
      key={newsletter.id || Math.random()}
      newsletter={newsletter}
      onUnsubscribe={(id) => {
        setItemToDelete({ id, type: 'newsletter' });
        setDeleteModalOpen(true);
      }}
      onEdit={() => {
        // Edit newsletter functionality 
        alert('Edit functionality not implemented yet');
      }}
    />
  ))
) : (
  <tr>
    <td colSpan="4" className="px-6 py-10 text-center text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-400 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
      <p className="text-lg">No newsletter subscribers yet</p>
    </td>
  </tr>
)}
</tbody>
</table>
</div>
</div>
)}

{activeTab === 'enrollments' && (
<div className="fade-in">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold text-red-800">Course Enrollments</h2>
<div className="flex gap-3">
<button
onClick={() => exportData('enrollments')}
className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center"
title="Export to CSV"
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
  />
</svg>
Export CSV
</button>
</div>
</div>

<div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    ID
  </th>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    Name
  </th>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    Email
  </th>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    Course
  </th>
  <th
    scope="col"
    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  >
    Status
  </th>
  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
    Actions
  </th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
{enrollments.length > 0 ? (
  enrollments.map((enrollment) => (
    <EnrollmentItem
      key={enrollment.id || Math.random()}
      enrollment={enrollment}
      onDelete={(id) => {
        setItemToDelete({ id, type: 'enrollment' });
        setDeleteModalOpen(true);
      }}
      onEdit={() => setSelectedEnrollment(enrollment)}
    />
  ))
) : (
  <tr>
    <td colSpan="6" className="px-6 py-10 text-center text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-gray-400 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <p className="text-lg">No enrollments yet</p>
    </td>
  </tr>
)}
</tbody>
</table>
</div>
</div>
)}
</>
)}
</div>
</div>

{selectedMessage && (
<MessageDetailModal
message={selectedMessage}
onClose={() => setSelectedMessage(null)}
onReply={handleReplyMessage}
onDelete={(id) => {
setSelectedMessage(null);
setItemToDelete({ id, type: 'message' });
setDeleteModalOpen(true);
}}
/>
)}

{selectedEnrollment && (
<EnrollmentDetailModal
enrollment={selectedEnrollment}
onClose={() => setSelectedEnrollment(null)}
onSave={handleUpdateEnrollment}
/>
)}

{deleteModalOpen && (
<DeleteConfirmationModal
item={itemToDelete}
onClose={() => {
setDeleteModalOpen(false);
setItemToDelete(null);
}}
onConfirm={() => {
if (itemToDelete.type === 'message') {
handleDeleteMessage(itemToDelete.id);
} else if (itemToDelete.type === 'newsletter') {
handleUnsubscribe(itemToDelete.id);
} else if (itemToDelete.type === 'enrollment') {
handleDeleteEnrollment(itemToDelete.id);
}
}}
/>
)}
</div>
);
};

export default MessagesNewslettersDashboard;