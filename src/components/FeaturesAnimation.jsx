import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import setup from "../assets/icons/traditional-dance.png";
import manage from "../assets/icons/pop.png";
import analyze from "../assets/icons/woman.png";
import register from "../assets/icons/authentic.png";
import generate from "../assets/icons/color-wheel.png";

const featuresList = {
    feature1: {
      id: 1,
      name: "TRADITION",
      description: "Goti Soda preserves time-honored recipes, delivering a refreshing experience with every bottle, ensuring authentic flavors and nostalgic satisfaction.",
      image: setup,
    },
    feature2: {
      id: 2,
      name: "THE POP",
      description: "Goti Soda offers a crisp, effervescent pop, bringing vibrant flavors that instantly refresh and energize, perfect for any occasion.",
      image: manage,
    },
    feature3: {
      id: 3,
      name: "REFRESHMENT",
      description: "Goti Soda offers a burst of refreshment with every sip, quenching thirst and providing a perfect balance of sweetness and fizz.",
      image: analyze,
    },
    feature4: {
      id: 4,
      name: "AUTHENTICITY",
      description: "Goti Soda maintains the authenticity of traditional recipes, ensuring each drink is crafted with quality ingredients and a rich heritage.",
      image: register,
    },
    feature5: {
      id: 5,
      name: "VARIETY",
      description: "Goti Soda brings a diverse range of flavors, offering something for everyone, from classic to adventurous tastes, all in one refreshing drink.",
      image: generate,
    }
  }
  

const FeaturesAnimations = () => {
  const featuresArray = Object.values(featuresList);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const slideVariants = {
    enterFromRight: {
      x: "100%",
      opacity: 0,
    },
    enterFromLeft: {
      x: "-100%",
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exitToLeft: {
      x: "-100%",
      opacity: 0,
    },
    exitToRight: {
      x: "100%",
      opacity: 0,
    },
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuresArray.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === featuresArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleFeatureClick = (index) => {
    if (isAnimating) return;
    const diff = index - currentIndex;
    const shortestPath = ((diff + featuresArray.length) % featuresArray.length);
    if (shortestPath === 0) return;
    setDirection(shortestPath > featuresArray.length / 2 ? -1 : 1);
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Auto transition every 5 seconds
  useEffect(() => {
    let timer;
    if (!isAnimating) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAnimating, currentIndex]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFeaturePosition = (index) => {
    const position = (index - currentIndex + featuresArray.length) % featuresArray.length;
    return position > featuresArray.length / 2 ? position - featuresArray.length : position;
  };

  return (
    <div className="sm:h-screen mb-[100px]   sm:mb-[-100px] mt-[100px] h-[400px] flex flex-col sm:pt-0 pt-[-300px] items-center justify-center rounded-lg pb-[-500px] sm:pb-[100px] bg-[#F6DCAC] mx-4 sm:mx-10">
      <div
        className="t text-2xl  sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-700 mb-0"
        
      >
        WALYA'S GOTI SODA HAS  
      </div>

      {/* Navigation Bar */}
      <div className="relative w-full overflow-hidden h-24 sm:h-32 hidden lg:block">
        <div className="absolute w-full flex justify-center items-center h-full">
          {featuresArray.map((feature, index) => {
            const position = getFeaturePosition(index);
            return (
              <div
                key={feature.id}
                onClick={() => handleFeatureClick(index)}
                className={`absolute cursor-pointer transition-all duration-500 transform
                  ${index === currentIndex ? 'z-10 mb-16  sm:mb-20' : 'rounded-lg text-white mt-8 sm:mt-12 bg-black border-2 scale-[0.4] sm:scale-50'}`}
                style={{
                  transform: `translateX(${position * (windowWidth < 640 ? 150 : 200)}px)`,
                  opacity: Math.abs(position) > 2 ? 0 : 1,
                }}
              >
                {index === currentIndex ? (
                  <div
                    className="flex text-center text-black  px-6 sm:px-[100px] py-2 sm:py-3 bg-clip-text font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-5xl scale-110 transition-all duration-500"
                    style={{
                      backgroundImage: "linear-gradient(to right, #5C90E5, #5C59E8)",
                    }}
                  >
                    {feature.name}
                  </div>
                ) : (
                  <div className="px-3 sm:px-4 py-1 sm:py-2 rounded-md text-white font-bold text-[10px] sm:text-[15px] bg-black hover:scale-105 transition-transform">
                    {feature.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Feature Display (only show when nav bar is hidden) */}
      <div className="lg:hidden text-center mb-4">
        <div
          className="text-transparent text-xl sm:text-2xl font-bold bg-clip-text mb-2"
          style={{
            backgroundImage: "linear-gradient(to right, #7DD6FF, #2D79FC)",
          }}
        >
          {featuresArray[currentIndex].name}
        </div>
        <span className="text-sm font-medium text-gray-600">
          {currentIndex + 1} / {featuresArray.length}
        </span>
      </div>

      {/* Content Section */}
      <div className="text-center w-full max-w-4xl mx-auto mt-4 sm:mt-8 px-4">
        <div className="flex justify-between lg:ml-[130px] items-center w-full">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r border border-black text-black px-2 sm:px-4 py-1 sm:py-3 rounded-sm hover:opacity-90 transition-opacity"
            disabled={isAnimating}
          >
            &lt;
          </button>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="px-2 sm:px-4 text-xs sm:text-sm md:text-md flex-1"
            >
              {featuresArray[currentIndex].description}
            </motion.p>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r border lg:mr-[270px] border-black text-black px-2 sm:px-4 py-1 sm:py-3 rounded-sm hover:opacity-90 transition-opacity"
            disabled={isAnimating}
          >
            &gt;
          </button>
        </div>

        <div className="relative w-full mb-[-100px] sm:mb-0 h-[200px] sm:h-[250px] md:h-[300px] mt-8 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction > 0 ? "enterFromRight" : "enterFromLeft"}
              animate="center"
              exit={direction > 0 ? "exitToLeft" : "exitToRight"}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full h-full"
            >
              <div className="relative p-3 w-full h-full max-w-[200px] mx-auto">
                <img
                  src={featuresArray[currentIndex].image}
                  alt={featuresArray[currentIndex].name}
                  className="rounded-lg object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 600px, 400px"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAnimations;
