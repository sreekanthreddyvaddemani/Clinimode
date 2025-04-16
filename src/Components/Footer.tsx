import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { 
  FaTwitter, FaFacebookF, 
  FaLinkedinIn, FaInstagram, 
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLanguage, FaArrowUp
} from "react-icons/fa";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("English");

  // Multilingual Translations with all languages
  const translations = {
    English: {
      getInTouch: "Get In Touch",
      address: "Thirumenahalli Main Rd, Bengaluru, Karnataka 560064",
      quickLinks: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Career", path: "/career" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacypolicy" },
        // { name: "Terms & Conditions", path: "/terms" },
        // { name: "Refund Policy", path: "/refund" }
      ],
      courses: "Courses",
      course: [
        { name: "Clinical Research Course", path: "/clinicaldatamanagement" },
        { name: "Medical Coding Course", path: "/medicalcoding" }
      ],
      newsletter: "Newsletter",
      subscribeText: "Stay updated with our latest clinical research insights.",
      enterEmail: "Enter your email",
      subscribe: "Subscribe",
      copyright: "© 2025 Clinimode Research Institute. All rights reserved."
    },
    Hindi: {
      getInTouch: "संपर्क करें",
      address: "तिरुमेनहल्ली मेन रोड, बेंगलुरु, कर्नाटक 560064",
      quickLinks: "त्वरित लिंक",
      links: [
        { name: "होम", path: "/" },
        { name: "करियर", path: "/career" },
        { name: "हमारे बारे में", path: "/about" },
        { name: "संपर्क", path: "/contact" },
        { name: "गोपनीयता नीति", path: "/privacypolicy" },
        // { name: "नियम और शर्तें", path: "/terms" },
        // { name: "रिफंड नीति", path: "/refund" }
      ],
      courses: "पाठ्यक्रम",
      course: [
        { name: "क्लिनिकल रिसर्च कोर्स", path: "/clinicaldatamanagement" },
        { name: "मेडिकल कोडिंग कोर्स", path: "/medicalcoding" }
      ],
      newsletter: "न्यूज़लेटर",
      subscribeText: "हमारे नवीनतम क्लिनिकल रिसर्च जानकारी से अपडेट रहें।",
      enterEmail: "अपना ईमेल दर्ज करें",
      subscribe: "सदस्यता लें",
      copyright: "© 2025 क्लिनिमोड रिसर्च इंस्टिट्यूट। सर्वाधिकार सुरक्षित।"
    },
    Spanish: {
      getInTouch: "Póngase en contacto",
      address: "Thirumenahalli Main Rd, Bengaluru, Karnataka 560064",
      quickLinks: "Enlaces rápidos",
      links: [
        { name: "Inicio", path: "/" },
        { name: "Carrera", path: "/career" },
        { name: "Acerca de", path: "/about" },
        { name: "Contacto", path: "/contact" },
        { name: "Política de privacidad", path: "/privacypolicy" },
        // { name: "Términos y condiciones", path: "/terms" },
        // { name: "Política de reembolso", path: "/refund" }
      ],
      courses: "Cursos",
      course: [
        { name: "Curso de investigación clínica", path: "/clinicaldatamanagement" },
        { name: "Curso de codificación médica", path: "/medicalcoding" }
      ],
      newsletter: "Boletín",
      subscribeText: "Manténgase actualizado con nuestras últimas informaciones sobre investigación clínica.",
      enterEmail: "Introduzca su correo electrónico",
      subscribe: "Suscribirse",
      copyright: "© 2025 Instituto de Investigación Clinimode. Todos los derechos reservados."
    }
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Newsletter subscription handler
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.202:3000/api/newsletter/addmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Thank you for subscribing!");
        setEmail(""); 
      } else {
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Get current language content with fallback to English
  const content = translations[language] || translations["English"];

  return (
    <footer 
      className="relative w-full bg-[#091E3E]
                 text-white py-16 px-6 md:px-12 overflow-hidden border-t border-white/20"
    >
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-pattern" 
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}
      />

      {/* Main Footer Content */}
      <div className="container mx-auto grid md:grid-cols-4 gap-10 relative z-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-500 pb-2">
            {content.getInTouch}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <p className="text-gray-300">{content.address}</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-2xl" />
              <p className="text-gray-300">clinimode@smaatix.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-red-500 text-2xl" />
              <p className="text-gray-300">+91 93805 44537 / +91 93805 05756</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            {[
              { Icon: FaTwitter, link: "https://twitter.com/clinimode" },
              { Icon: FaFacebookF, link: "https://facebook.com/clinimode" },
              { Icon: FaLinkedinIn, link: "https://linkedin.com/company/clinimode" },
              { Icon: FaInstagram, link: "https://instagram.com/clinimode" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-white 
                  bg-red-500/20 
                  hover:bg-red-500 
                  p-3 
                  rounded-full 
                  transition-all 
                  duration-300 
                  transform 
                  hover:-translate-y-2
                "
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-500 pb-2">
            {content.courses}
          </h3>

          <div className="grid gap-4">
            {content.course.map((course, index) => (
              <Link
                key={index}
                to={course.path}
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="hover:translate-x-2 transition-all duration-300">
                  {course.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-500 pb-2">
            {content.quickLinks}
          </h3>
          <div className="grid gap-4">
            {content.links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="
                  inline-flex 
                  items-center 
                  space-x-2 
                  text-gray-300 
                  hover:text-white 
                  transition-all 
                  duration-300
                "
              >
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="hover:translate-x-2 transition-all duration-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter and Language Selector */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 border-b-2 border-red-500 pb-2">
            {content.newsletter}
          </h3>
          <p className="text-gray-400 mb-6">{content.subscribeText}</p>
          
          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="space-y-4 mb-6">
            <input
              type="email"
              placeholder={content.enterEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full 
                px-4 
                py-3 
                bg-white/10 
                border 
                border-white/20 
                rounded-lg 
                text-white 
                placeholder-gray-400 
                focus:outline-none 
                focus:ring-2 
                focus:ring-red-500
              "
            />
            <button
              type="submit"
              className="
                w-full 
                bg-red-500 
                text-white 
                py-3 
                rounded-lg 
                hover:bg-red-600 
                transition-colors 
                duration-300
              "
            >
              {content.subscribe}
            </button>
          </form>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <FaLanguage className="text-red-500 text-2xl" />
            <select 
              className="
                bg-white
                text-blue-500 
                p-2 
                rounded-md 
                border 
                border-gray-300 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500
              " 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Hindi">हिन्दी</option>
              <option value="Spanish">Español</option>
            </select>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t border-white/20 text-center relative z-10">
        <p className="text-gray-400">{content.copyright}</p>
      </div>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="
            fixed 
            bottom-6 
            right-6 
            bg-red-500 
            text-white 
            p-3 
            rounded-full 
            shadow-lg 
            hover:bg-red-600 
            transition-all 
            duration-300 
            animate-bounce
            z-50
          "
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/+919380544537"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed 
          bottom-24 
          right-6 
          bg-green-500 
          text-white 
          p-3 
          rounded-full 
          shadow-lg 
          hover:bg-green-600 
          transition-all 
          duration-300 
          animate-bounce
          z-50
        "
      >
        💬
      </a>
    </footer>
  );
};

export default Footer;