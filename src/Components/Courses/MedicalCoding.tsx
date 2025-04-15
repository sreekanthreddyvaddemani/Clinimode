// import React from 'react';

// const MedicalCoding = () => {
//   return (
//     <div className="relative font-sans bg-white text-gray-700 overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 z-0"></div>

//       {/* Floating Bubble Animation */}
//       <div 
//         className="absolute inset-0 opacity-10 z-0"
//         style={{
//           backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
//           backgroundSize: '20px 20px'
//         }}
//       />
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {[...Array(50)].map((_, i) => ( // Increased to 50 bubbles
//           <div 
//             key={i}
//             className="absolute rounded-full bg-white/10" // Increased opacity for better visibility
//             style={{
//               width: `${Math.random() * 15 + 5}px`,  // Bigger bubbles
//               height: `${Math.random() * 15 + 5}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`, // Adjusted timing for variation
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content - Increased z-index */}
//       <div className="relative z-10 flex justify-center items-center min-h-screen px-4 py-8">
//         <div className="max-w-[1200px] w-full text-center mt-40">
//           <h1 className="text-4xl font-bold text-white mb-6">MedicalCoding</h1>
//           <div className="space-y-6 text-gray-300 font-bold">
//             <p className="text-lg leading-relaxed">
//               At <span className="text-white font-semibold">Clinimode</span>, we believe that knowledge isn't just power—it's the foundation for transforming careers and shaping the future of healthcare. As a premier training institute specializing in <span className="text-white">Clinical Research</span> and <span className="text-white">Medical Coding</span>, we are committed to equipping students and professionals with the expertise needed to thrive in the dynamic life sciences industry.
//             </p>
//             <p className="text-lg leading-relaxed">
//               What sets <span className="text-white">Clinimode</span> apart? We go beyond traditional learning. Our courses are designed by industry veterans who bring real-world experience into the classroom, ensuring that every lesson is practical, up-to-date, and aligned with current industry standards. Whether you're an aspiring clinical researcher, a healthcare professional looking to upskill, or someone exploring new career opportunities, we provide the hands-on training and certification programs to help you succeed.
//             </p>
//             <p className="text-lg leading-relaxed">
//               Our approach is student-centric, offering <span className="text-white">personalized mentorship</span>, career guidance, and job-ready training to bridge the gap between education and employment. At <span className="text-white">Clinimode</span>, we don't just teach—we empower individuals to build rewarding careers in Clinical Research and Medical Coding.
//             </p>
//             <p className="text-lg leading-relaxed">
//               Join us, and take your first step towards a future filled with opportunities in the ever-evolving healthcare and life sciences industry.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Floating Animation */}
//       <style>{`
//         @keyframes float {
//           0% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-25px) translateX(15px); }
//           100% { transform: translateY(0) translateX(0); }
//         }
//       `}</style>
//     </div> 
//   );
// };

// export default MedicalCoding;
