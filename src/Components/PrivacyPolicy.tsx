import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Shield, FileText, Link, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  // Initialize all sections as open by default
  const [openSections, setOpenSections] = useState(
    Array(11).fill(true) // Assuming there are 11 sections
  );


  useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to Clinimode (\"Clinimode,\" \"we,\" \"our,\" or \"us\"). Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and share your personal data when you enroll in our Clinical Data Management, Clinical Research, and Medical Coding training programs.\n\nBy using our services, you consent to the practices described in this Privacy Policy. If you do not agree with the terms, please refrain from using our platform.",
      icon: <Shield className="text-blue-600" />
    },
    {
      title: "2. Information We Collect",
      content: "We collect the following types of personal data:\n\nPersonal Information Provided by You:\n- Name, email address, phone number, and postal address\n- Date of birth and gender\n- Educational background and qualifications\n- Employment history (if applicable)\n- Payment information for course enrollment\n\nAutomatically Collected Information:\n- IP address, device information, and browser type\n- Cookies and tracking data for analytics\n- Log files related to service usage\n\nInformation from Third-Party Sources:\n- Data from affiliated organizations, partners, or referral programs",
      icon: <FileText className="text-blue-600" />
    },
    {
      title: "3. How We Use Your Information",
      content: "We use your personal information for the following purposes:\n- To register and manage your Clinimode student account\n- To deliver our training programs and related services\n- To communicate updates regarding courses, schedules, and promotions\n- To improve our services through analytics and feedback collection\n- To ensure compliance with legal and regulatory requirements\n- To prevent fraud, misuse, or unauthorized access to our services",
      icon: <Lock className="text-blue-600" />
    },
    {
      title: "4. Data Sharing and Disclosure",
      content: "We do not sell or rent your personal information. However, we may share it with:\n- Service Providers: Third-party vendors who assist in processing payments, hosting platforms, and technical support.\n- Affiliates & Partners: Institutions or employers facilitating student placements or career opportunities.\n- Legal Authorities: When required by law, court order, or to protect our legal rights.",
      icon: <Link className="text-blue-600" />
    },
    {
      title: "5. Data Retention",
      content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, and resolve disputes. Once no longer needed, we securely delete or anonymize your data."
    },
    {
      title: "6. Data Security",
      content: "We implement appropriate technical and organizational measures to safeguard your personal data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security."
    },
    {
      title: "7. Your Rights and Choices",
      content: "As a student of Clinimode, you have the following rights:\n- Access & Correction: You can request access to or correction of your personal data.\n- Data Portability: Obtain a copy of your data in a structured format.\n- Deletion: Request deletion of your personal information under applicable laws.\n- Withdraw Consent: Opt out of marketing communications at any time.\n\nFor any privacy-related requests, contact us at [Your Contact Email]."
    },
    {
      title: "8. Cookies and Tracking Technologies",
      content: "We use cookies and similar technologies to enhance user experience, track website traffic, and analyze engagement. You can manage cookie settings in your browser."
    },
    {
      title: "9. Third-Party Links",
      content: "Our platform may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before providing personal information."
    },
    {
      title: "10. Changes to This Policy",
      content: "We reserve the right to modify this Privacy Policy at any time. We will notify you of significant changes via email or a notice on our platform."
    },
    {
      title: "11. Contact Us",
      content: "If you have any questions about this Privacy Policy, you may contact us at:\n\nClinimode\n 📍 Thirumenahalli Main Rd, Bengaluru, Karnataka 560064\n ✉️ clinimode@smaatix.com\n 📞 +91 93805 44537 / +91 93805 05756"
    }
  ];

  const toggleSection = (index) => {
    const newOpenSections = [...openSections];
    newOpenSections[index] = !newOpenSections[index];
    setOpenSections(newOpenSections);
  };



  const AccordionSection = ({ section, isActive, onClick, index }) => (
    <div className="mt-2 border">
      <div 
        className="flex justify-between items-center p-2 cursor-pointer bg-blue-50 "
        onClick={() => onClick(index)}
      >
        <div className="flex items-center space-x-3">
          {section.icon || <Shield className="text-blue-600" />}
          <h3 className="text-2xl font-bold text-blue-600">{section.title}</h3>
        </div>
        {isActive ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
      </div>
      {isActive && (
        <div className="p-8 bg-white text-blue-900 whitespace-pre-line font-semibold text-lg">
          {section.content}
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen font-sans overflow- ">
      {/* Background Gradient */}
      <div className="absolute inset-0  z-0"></div>
      
      {/* Floating Bubble Animation */}
      {/* <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}
      /> */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full  px-4 py-16">
        <div className="rounded-xl overflow-hidden">
          <div className="bg-blue-900 text-red-500 p-6 text-center mt-[100px]">
            <h1 className="text-4xl font-bold">Clinimode Privacy Policy</h1>
            <p className="mt-2 font-bold">Effective Date: 01-04-2025</p>
          </div>
      
          <div className="p-6">
            {sections.map((section, index) => (
              <AccordionSection 
                key={index}
                section={section}
                isActive={openSections[index]}
                onClick={toggleSection}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;