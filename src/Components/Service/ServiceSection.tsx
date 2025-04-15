import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { 
  Database,
  ShieldCheck,
  ClipboardCheck,
  BookOpen,
  BarChart2,
  Users,
  Phone,
  TrendingUp,
  Globe,
  Briefcase,
  Award
} from 'lucide-react';
import AnimatedLine from '../AnimatedLine';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
  isVisible: boolean;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, delay, isVisible, color }) => {
  return (
    <div
      className={`lg:w-1/3 md:w-1/2 w-full px-3 mb-6 transform transition-all duration-1000 ease-out relative group 
      ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`bg-gradient-to-br from-gray-100 to-white border border-gray-200 rounded-xl p-6 h-full flex flex-col items-start text-left shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 
${color === "blue" ? "bg-blue-500/20" : ""} 
${color === "green" ? "bg-green-500/20" : ""} 
${color === "purple" ? "bg-purple-500/20" : ""} 
${color === "red" ? "bg-red-500/20" : ""} 
${color === "yellow" ? "bg-yellow-500/20" : ""} 
${color === "gray" ? "bg-gray-500/20" : ""} 
${color === "orange" ? "bg-orange-500/20" : ""} 
${color === "teal" ? "bg-teal-500/20" : ""}`}>
  <div className={`${color === "blue" ? "text-blue-500" : ""} 
  ${color === "green" ? "text-green-500" : ""} 
  ${color === "purple" ? "text-purple-500" : ""} 
  ${color === "red" ? "text-red-500" : ""} 
  ${color === "yellow" ? "text-yellow-500" : ""} 
  ${color === "gray" ? "text-gray-500" : ""} 
  ${color === "orange" ? "text-orange-500" : ""} 
  ${color === "teal" ? "text-teal-500" : ""}`}>
    {icon}
  </div>
</div>

        <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
        <p className="text-gray-600 text-lg mb-4">{description}</p>
        
        <div className="mb-4 w-full">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start mb-2">
              <div className={`w-2 h-2 rounded-full bg-${color}-500 mt-1.5 mr-2`}></div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-auto w-full">
          <div className="w-0 group-hover:w-full h-0.5 bg-gray-400 transition-all duration-300 mb-3"></div>
        </div>
      </div>
    </div>
  );
};

interface CareerLevelProps {
  title: string;
  color: string;
  roles: string[];
}

const CareerLevel: React.FC<CareerLevelProps> = ({ title, color, roles }) => {
  return (
    <div className="mb-4">
      <h4 className={`text-lg font-semibold mb-2 text-${color}-500`}>{title}</h4>
      <ul className="space-y-1.5">
        {roles.map((role, index) => (
          <li key={index} className="flex items-start">
            <div className={`w-2 h-2 rounded-full bg-${color}-500 mt-1.5 mr-2`}></div>
            <span className="text-sm">{role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const navigate=useNavigate();



  const services = [
    { 
      icon: <Database className="w-5 h-5" />,
      title: 'Clinical Data Management', 
      description: 'Comprehensive training for clinical trial data collection, processing, and submission ensuring data integrity and compliance.',
      features: [
        'EDC system implementation',
        'Case Report Form design',
        'Data validation & cleaning',
        'Database design and setup',
        'CDISC standards compliance',
        'Practical exercises using ClinOptima'
      ],
      delay: 300,
      color: 'blue'
    },
    { 
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Medical Coding', 
      description: 'Comprehensive training in translating healthcare diagnosis, procedures, and services into standardized codes for billing and records.',
      features: [
        'Medical terminology basics',
        'ICD-10-CM coding system',
        'CPT coding for procedures',
        'Medical billing integration',
        'Certification exam preparation',
        'Industry standards compliance'
      ],
      delay: 450,
      color: 'green'
    },
    { 
      icon: <ClipboardCheck className="w-5 h-5" />,
      title: 'Soft Skills Development', 
      description: 'Essential professional skills training to complement technical expertise and ensure workplace success.',
      features: [
        'Corporate etiquette',
        'Communication skills',
        'Interview preparation',
        'LinkedIn profile optimization',
        'Professional networking',
        'Career development guidance'
      ],
      delay: 600,
      color: 'purple'
    },
    { 
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Training Programs', 
      description: 'Comprehensive training solutions for clinical research professionals at all career levels with practical industry experience.',
      features: [
        'Industry-focused curriculum',
        'Hands-on practical training',
        'Interactive classroom sessions',
        'Personalized learning approach',
        'Value for time and cost',
        'LMS support for continued learning'
      ],
      delay: 300,
      color: 'red'
    },
    { 
      icon: <BarChart2 className="w-5 h-5" />,
      title: 'Career Placement', 
      description: '100% placement support to help graduates secure positions in leading pharmaceutical and research organizations.',
      features: [
        'Resume building assistance',
        'Interview preparation',
        'Job placement support',
        'Industry connections',
        'Career counseling',
        'Post-placement guidance'
      ],
      delay: 450,
      color: 'yellow'
    },
    { 
      icon: <Users className="w-5 h-5" />,
      title: 'Virtual Learning', 
      description: 'Flexible online learning options that provide the same quality education with greater accessibility and convenience.',
      features: [
        'Virtual classroom sessions',
        'Interactive online modules',
        'Digital learning resources',
        'Remote assessment tools',
        'Live instructor support',
        'Flexible scheduling options'
      ],
      delay: 600,
      color: 'red'
    },
    { 
      icon: <Award className="w-5 h-5" />,
      title: 'Expert Mentorship', 
      description: 'Access to industry veterans with over three decades of combined experience in healthcare, pharmaceuticals, and research.',
      features: [
        'One-on-one coaching',
        'Career path guidance',
        'Industry best practices',
        'Professional development',
        'Real-world insights',
        'Networking opportunities'
      ],
      delay: 300,
      color: 'gray'
    },
    { 
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Clinical Trial Process', 
      description: 'Comprehensive understanding of clinical trial phases and the crucial role of data management throughout the process.',
      features: [
        'Trial phases overview',
        'Protocol development',
        'Data flow management',
        'Quality assurance practices',
        'Regulatory compliance',
        'Standard operating procedures'
      ],
      delay: 450,
      color: 'orange'
    },
    { 
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Industry Growth Opportunities', 
      description: 'Leverage the growing demand for clinical data management professionals in the expanding life sciences sector.',
      features: [
        'Global career opportunities',
        'High demand job market',
        'Competitive salary prospects',
        'Career advancement paths',
        'Pharmaceutical industry growth',
        'GCC opportunities in India'
      ],
      delay: 600,
      color: 'teal'
    }
  ];

  const scrollToEnrollForm = () => {
    const enrollFormElement = document.getElementById('enroll-form-section');
    if (enrollFormElement) {
      enrollFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-white z-0"></div>
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0" 
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 60%)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gray-200/50"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 relative">
          <h5 className="text-red-600 font-semibold uppercase tracking-wider mb-3">Our Services</h5>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">Enhancing Clinical Minds</h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-base">
            Clinimode provides industry-oriented training in Clinical Data Management and Medical Coding, 
            empowering individuals with skills and knowledge through high-quality training programs.
          </p>
          <div className="flex justify-center w-full">
            <div className="w-[500px]">
              <AnimatedLine />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={service.delay}
              isVisible={isVisible}
              color={service.color}
            />
          ))}
        </div>
        
        {/* Career Paths and CTA Section */}
        <div
          className={`w-full mx-auto mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 transform transition-all duration-1000 ease-out relative 
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
          style={{ transitionDelay: '750ms' }}>
          
          {/* Career Paths Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-8 text-left text-gray-800 shadow-lg h-full">
            <h3 className="text-xl font-bold mb-5 text-center">Clinical Data Management Career Paths</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <CareerLevel
                title="Entry Level"
                color="blue"
                roles={["Clinical Data Coordinator", "Clinical Trial Coordinator", "Clinical Trial Associate"]}
              />
              <CareerLevel
                title="Mid Level"
                color="green"
                roles={["Clinical Data Manager", "Clinical Data Scientist", "Clinical Research Associate"]}
              />
              <CareerLevel
                title="Senior Level"
                color="purple"
                roles={["Data Quality Lead", "Clinical Data Analyst", "Database Programmer/Developer"]}
              />
              <CareerLevel
                title="Executive Level"
                color="orange"
                roles={["CDM Director", "Data Management Head", "Clinical Operations Director"]}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-xl p-5 md:p-8 text-center text-white shadow-lg flex flex-col justify-center h-full">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center mb-5 mx-auto">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Ready to Enhance Your Clinical Skills?</h3>
            <p className="text-base text-gray-100 mb-6 max-w-xl mx-auto">
              Our team of experts is ready to discuss your career goals and provide tailored training solutions for your success in the clinical research field.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button onClick={scrollToEnrollForm}  className="bg-white text-red-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm">
                Enroll Now
              </button>
              <button  onClick={() => navigate("/contact")} className="bg-transparent border-2 border-white text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;