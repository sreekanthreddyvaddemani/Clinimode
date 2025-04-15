import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedLine from "../AnimatedLine";

const ContactSection: React.FC = () => {
  const [mapSrc, setMapSrc] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const latitude = 13.0891053, longitude = 77.6328945;
    
    const googleMapURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude},${longitude}!5e0!3m2!1sen!2sin!4v1710796924213!5m2!1sen!2sin`;
    setMapSrc(googleMapURL);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL;
  
    console.log("API_URL:", API_URL); // Debugging output
  
    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };
  

  return (
    <div className="container mx-auto max-w-7xl py-12 px-4" id="cf">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h5 className="text-red-600 text-2xl font-bold uppercase">Contact Us</h5>
        <h1 className="text-gray-800 text-3xl font-bold font-sans">
          Get in Touch with Clinimode
        </h1>
        <br />
           <center><AnimatedLine/></center>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { icon: FaPhone, title: "Call us directly", detail: "+91 93805 44537 / +91 93805 05756" },
          { icon: FaEnvelopeOpen, title: "Email us for inquiries", detail: "support@clinimode.com" },
          { icon: FaMapMarkerAlt, title: "Visit our campus", detail: "26/10, SMH Complex, Thirumenahalli Main Road, Near Bharatiya City Tech Park, Yelahanka, Bengaluru, 560064" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center p-6 shadow-lg bg-gray-50 rounded-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Icon Section */}
            <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-md">
              <item.icon className="text-white text-2xl" />
            </div>

            {/* Text Section */}
            <div className="ps-4">
              <h5 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h5>
              <h6 className="text-red-600 text-xl font-bold">{item.detail}</h6>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form & Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h4 className="text-red-600 text-xl font-bold mb-4">Reach Out To Us</h4>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="subject"
              className="w-full p-2 border rounded"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              className="w-full p-2 border rounded"
              rows={4}
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="rounded-lg shadow-sm">
          {mapSrc ? (
            <iframe
              className="w-full h-full rounded-lg"
              src={mapSrc}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          ) : (
            <p className="text-center text-gray-500 p-4">Fetching your location...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;