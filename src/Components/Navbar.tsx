import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTimes, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaFacebook,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaArrowRight, FaUserShield, FaUserTie, FaUser,
  FaChevronLeft
} from "react-icons/fa"; // Removed FaSearch import
// import Logo from '../assets/clinimode.png';
// import Logo from '../assets/Gemini_Generated_Image_bk6kllbk6kllbk6k.png';
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
  
  // Login states
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginType, setLoginType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

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

  const toggleLoginOptions = () => {
    setShowLoginOptions((prev) => !prev);
    if (showLoginOptions) {
      setShowLoginForm(false);
    }
  };

  const selectLoginType = (type) => {
    setLoginType(type);
    setShowLoginForm(true);
    setLoginError("");
    setEmail("");
    setPassword("");
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
    setLoginError("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/db.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      let user;
      
      switch (loginType) {
        case "admin":
          user = data.admin?.find(
            (admin) => admin.email === email && admin.password === password
          );
          break;
        case "employee":
          user = data.employee?.find(
            (employee) => employee.email === email && employee.password === password
          );
          break;
        case "user":
          user = data.user?.find(
            (user) => user.email === email && user.password === password
          );
          break;
        default:
          throw new Error('Invalid login type');
      }
      
      if (user) {
        localStorage.setItem(loginType, JSON.stringify(user));
        
        setShowLoginForm(false);
        setShowLoginOptions(false);
        
        switch (loginType) {
          case "admin":
            navigate('/messages');
            break;
          case "employee":
            navigate('/messages');
            break;
          case "user":
            navigate('/user-dashboard');
            break;
          default:
            navigate('/');
        }
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred. Please try again.');
    }
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
              { icon: <FaFacebook />, link: "#" },
              { icon: <><span className="font-bold">LOGIN</span></>, link: "#", onClick: toggleLoginOptions, isLogin: true }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) item.onClick();
                }}
                className={`h-7 flex items-center justify-center border border-white ${
                  item.isLogin
                    ? "w-auto px-4 bg-red-600 text-white rounded-md transition duration-300 hover:bg-transparent hover:text-red-600 hover:border-red-600"
                    : "w-7 rounded-full transition duration-300 hover:bg-red-600 hover:text-white"
                }`}
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
      : "top-12 bg-white py-6"  // Changed from bg-transparent-300 to bg-white
  }`}
>
  <div className="container w-full max-w-auto mx-auto flex justify-between items-center px-6">
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
        <FaBars className="text-black" /> {/* Always black */}
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
                      : "text-black hover:text-[#d50a2f]" // Always black initially
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
                    : "text-black hover:text-[#d50a2f]" // Always black initially
                }`}
              >
                {link.name}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  </div>

  {/* Mobile Menu remains unchanged */}
  {/* Improved Mobile Menu (Visible on Small Screens) */}
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

              {/* Additional Options with improved styling */}
              <div className="mt-6 space-y-4 pt-4 border-t border-gray-200">
                {/* Search button removed */}
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    toggleLoginOptions();
                  }}
                  className="flex items-center space-x-3 w-full p-3 text-base font-medium text-white bg-[#d50a2f] hover:bg-[#b30825] rounded-md transition-colors duration-300"
                >
                  <FaUser className="text-white" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>
        )}
    </nav>

      {/* Search overlay removed */}

      {/* ====== Login Options Overlay ====== */}
      {showLoginOptions && !showLoginForm && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={toggleLoginOptions}
              className="absolute top-4 right-4 text-2xl text-black hover:text-[#d50a2f]"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-[#091E3E]">
              Select Login Type
            </h2>

            {/* Login Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {/* Admin Login */}
              <div
                onClick={() => selectLoginType("admin")}
                className="bg-white border border-gray-200 hover:border-[#d50a2f] p-6 rounded-lg shadow-md text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <FaUserShield className="text-5xl text-[#091E3E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#091E3E] mb-2">
                  Admin Login
                </h3>
                <p className="text-gray-600 text-sm">Access administrative controls</p>
              </div>

              {/* Employee Login */}
              <div
                onClick={() => selectLoginType("employee")}
                className="bg-white border border-gray-200 hover:border-[#d50a2f] p-6 rounded-lg shadow-md text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <FaUserTie className="text-5xl text-[#091E3E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#091E3E] mb-2">
                  Employee Login
                </h3>
                <p className="text-gray-600 text-sm">For staff members only</p>
              </div>

              {/* User Login */}
              <div
                onClick={() => selectLoginType("user")}
                className="bg-white border border-gray-200 hover:border-[#d50a2f] p-6 rounded-lg shadow-md text-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <FaUser className="text-5xl text-[#091E3E]" />
                </div>
                <h3 className="text-xl font-semibold text-[#091E3E] mb-2">
                  User Login
                </h3>
                <p className="text-gray-600 text-sm">For registered customers</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====== Login Form Overlay ====== */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 max-w-md">
            {/* Back Button */}
            <button
              onClick={() => {
                setShowLoginForm(false);
                setLoginError("");
              }}
              className="absolute top-4 left-4 text-2xl text-black hover:text-[#d50a2f]"
            >
              ←
            </button>
            
            {/* Close Button */}
            <button
              onClick={() => {
                setShowLoginForm(false);
                setShowLoginOptions(false);
                setLoginError("");
              }}
              className="absolute top-4 right-4 text-2xl text-black hover:text-[#d50a2f]"
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-[#091E3E]">
              {loginType === "admin" ? "Admin Login" : 
               loginType === "employee" ? "Employee Login" : "User Login"}
            </h2>

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#d50a2f]"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#d50a2f]"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Error Message */}
              {loginError && (
                <div className="text-[#d50a2f] text-sm mt-2">
                  {loginError}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#d50a2f] text-white py-3 rounded-md hover:bg-[#b30825] transition-colors duration-300 mt-4"
              >
                Login
              </button>

              {/* Forgot Password Link */}
              <div className="text-center mt-4">
                <a href="#" className="text-sm text-[#091E3E] hover:text-[#d50a2f]">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;