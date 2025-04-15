import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Total duration set to 5 seconds
    const totalDuration = 5000;

    // Animate progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, totalDuration / 10);

    // Hide loading screen after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalDuration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    initial: { 
      opacity: 0,
      backgroundColor: "rgba(0,0,0,0)"
    },
    animate: { 
      opacity: 1,
      backgroundColor: "rgba(0,0,0,0.8)",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  };

  const contentVariants = {
    initial: { 
      opacity: 0,
      scale: 0.9
    },
    animate: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center 
          h-screen bg-black/80"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="text-center"
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Loading Icon */}
            <motion.div
              animate={{
                rotate: 360,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="mx-auto mb-6 w-24 h-24 text-white"
            >
              <Loader2 className="w-full h-full" strokeWidth={1.5} />
            </motion.div>

            {/* Loading Text */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loading
              <motion.span 
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity 
                  }
                }}
              >
                ...
              </motion.span>
            </h1>

            {/* Progress Bar */}
            <div className="w-64 md:w-96 bg-gray-700 rounded-full h-2.5 mx-auto overflow-hidden">
              <motion.div 
                className="bg-white h-full rounded-full"
                style={{ 
                  width: `${loadingProgress}%`,
                  transition: 'width 0.5s linear'
                }}
              />
            </div>

            {/* Progress Percentage */}
            <p className="text-white mt-4 text-lg">
              {loadingProgress}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;