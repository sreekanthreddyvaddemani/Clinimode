import { motion } from "framer-motion";

const HeartRateLine = () => {
  // Heart rate line path points (simplified ECG-style)
  const linePath = `
    M 0,20
    L 30,20
    L 35,10
    L 40,30
    L 45,5
    L 50,25
    L 55,15
    L 60,35
    L 80,35
    L 85,10
    L 90,30
    L 95,5
    L 100,25
    L 150,25
  `;

  return (
    <div className="relative w-full h-12">
      {/* Background grid lines */}
      {/* <div className="absolute inset-0 flex flex-col justify-between">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-px bg-blue-900/20 w-full"></div>
        ))}
      </div> */}
      
      {/* Animated heart rate line */}
      <svg 
        viewBox="0 0 150 40" 
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d={linePath}
          stroke="#d50a2f"
          strokeWidth="1.5" 
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            strokeWidth: [1.5, 2, 1.5] 
          }}
          transition={{
            pathLength: {
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            },
            strokeWidth: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </svg>
      
      {/* Pulsing heart icon remains unchanged */}
      <motion.div
        className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-[#d50a2f]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          stroke="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default HeartRateLine;