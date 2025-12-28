import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTimes, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars,
  FaChevronLeft
} from "react-icons/fa";
import Logo from '../assets/clinimode.png';

import { ChevronDown, ChevronUp } from "lucide-react";

import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopNav, setHideTopNav] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // New states for expanded mobile menu functionality
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setHideTopNav(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
    // Reset submenu state when closing mobile menu
    if (showMobileMenu) {
      setExpandedSubmenu(null);
    }
  };

  const toggleSubmenu = (name) => {
    setExpandedSubmenu(expandedSubmenu === name ? null : name);
  };

  return (
    <>
      {/* ====== Top Navbar (Hides on Scroll) ====== */}
      <div
        className={`bg-[#091E3E] text-white py-3 text-sm fixed top-0 w-full z-50 transition-all duration-500 ${
          hideTopNav ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-5">
          {/* Left Side: Contact Info (Hidden on Small Screens) */}
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-[#d50a2f]" />
              <span>Yelahanka, Bangalore</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaPhone className="text-[#d50a2f]" />
              <span>+91 93805 44537 / +91 93805 05756</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaEnvelope className="text-[#d50a2f]" />
              <span>info@clinimode.com</span>
            </span>
          </div>

          {/* Right Side: Social Icons (Centered on Small Screens) */}
          <div className="flex space-x-5 mx-auto md:mx-0">
            {[
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaFacebook />, link: "#" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) item.onClick();
                }}
                className={`h-7 flex items-center justify-center border border-white w-7 rounded-full transition duration-300 hover:bg-red-600 hover:text-white`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

    {/* ====== Main Navbar (Moves Up on Scroll) ====== */}
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "top-0 bg-white shadow-md py-4 border-b border-gray-200"
          : "top-12 bg-white py-6"
      }`}
    >
      <div className="container w-full max-w-auto mx-auto flex justify-between items-center px-6 relative">
        <div className="h-12 w-[280px] ml-[-40px] mb-[13px] flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Wisdomentic Logo" className="" />
          </Link>
        </div>
        
        {/* Hamburger Menu (Visible on Small Screens) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            <FaBars className="text-black" />
          </button>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <ul className="hidden md:flex space-x-10 items-center">
          {[
            { name: "Home", path: "/" },
            { 
              name: "Courses", 
              subLinks: [
                { name: "Clinical Data Management", path: "/clinicaldatamanagement" },
                { name: "Medical Coding Course", path: "/medicalcoding" }
              ]
            },
            { name: "About", path: "/about" },
            { name: "Careers", path: "/career" },
            { name: "Contact", path: "/contact" },
            { name: "PrivacyPolicy", path: "/privacypolicy" }
          ].map((link) => {
            
            const isActive = link.subLinks?.some(subLink => location.pathname === subLink.path);
            const [hoveredMenu, setHoveredMenu] = useState(null);

            return (
              <li 
                key={link.path || link.name} 
                className="relative group"
                onMouseEnter={() => setHoveredMenu(link.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {link.subLinks ? (
                  <>
                    <span
                      className={`cursor-pointer flex items-center gap-1 transition-all duration-300 font-bold ${
                        isActive
                          ? "text-[#d50a2f] border-b-2 border-[#d50a2f]"
                          : "text-black hover:text-[#d50a2f]"
                      }`}
                    >
                      {link.name}
                      <motion.div
                        animate={{ rotate: hoveredMenu === link.name ? 360 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {hoveredMenu === link.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </motion.div>
                    </span>
                    <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-1 min-w-[230px] z-50 transition-all duration-300">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.path} className="px-4 py-2 hover:bg-gray-100">
                          <Link
                            to={subLink.path}
                            className={`block text-black hover:text-[#d50a2f] transition-colors duration-300 ${
                              location.pathname === subLink.path ? "font-semibold" : ""
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`nav-link transition-all duration-300 font-bold ${
                      location.pathname === link.path || isActive
                        ? "text-[#d50a2f] border-b-2 border-[#d50a2f]"
                        : "text-black hover:text-[#d50a2f]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Flashy Diagonal Red Ribbon */}
        <div className="absolute top-0 right-0 h-24 w-24 overflow-hidden">
          <div className="absolute top-0 right-0 transform rotate-45 bg-[#d50a2f] text-white font-bold py-1 px-8 shadow-lg translate-x-6 translate-y-6 cursor-pointer hover:bg-[#b30825] transition-colors duration-300">
            <span className="text-sm">REGISTER</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-start justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm mt-16 max-h-[85vh] overflow-y-auto">
            {/* Close and Back buttons in the same row */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={toggleMobileMenu}
                className="text-lg font-bold text-[#091E3E] hover:text-[#d50a2f] flex items-center"
              >
                <FaChevronLeft className="mr-1" /> Close Menu
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-2xl text-black hover:text-[#d50a2f]"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Navigation Links - Improved styling */}
            <ul className="space-y-5">
              {[
                { name: "Home", path: "/" },
                { 
                  name: "Courses", 
                  subLinks: [
                    { name: "Clinical Data Management", path: "/clinicaldatamanagement" },
                    { name: "Medical Coding Course", path: "/medicalcoding" }
                  ]
                },
                { name: "About", path: "/about" },
                { name: "Careers", path: "/career" },
                { name: "Contact", path: "/contact" },
                { name: "PrivacyPolicy", path: "/privacypolicy" }
              ].map((link) => (
                <li key={link.path || link.name} className="border-b border-gray-100 pb-3">
                  {link.subLinks ? (
                    <>
                      <div 
                        className="flex justify-between items-center cursor-pointer "
                        onClick={() => toggleSubmenu(link.name)}
                      >
                        <span className="text-lg font-bold text-[#091E3E] hover:text-[#d50a2f] transition-colors duration-300 ">
                          {link.name}
                        </span>
                        <span className="text-[#091E3E]">
                          {expandedSubmenu === link.name ? "−" : "+"}
                        </span>
                      </div>
                      
                      {expandedSubmenu === link.name && (
                        <ul className="mt-3 ml-4 space-y-5 border-l-2 border-[#d50a2f] pl-4">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.path}>
                              <Link
                                to={subLink.path}
                                className={`block text-base font-bold text-[#091E3E] hover:text-[#d50a2f] transition-colors duration-300 ${
                                  location.pathname === subLink.path ? "font-semibold text-[#d50a2f]" : ""
                                }`}
                                onClick={toggleMobileMenu}
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block text-lg font-bold hover:text-[#d50a2f] transition-colors duration-300 ${
                        location.pathname === link.path ? "text-[#d50a2f]" : "text-[#091E3E]"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Register Button for Mobile Menu */}
            <div className="mt-6 space-y-4 pt-4 border-t border-gray-200">
              <button
                className="flex items-center justify-center space-x-3 w-full p-3 text-base font-medium text-white bg-[#d50a2f] hover:bg-[#b30825] rounded-md transition-colors duration-300"
              >
                <span>REGISTER</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;