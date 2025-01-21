'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


import jaljeera from '../assets/drinks/jaljeera.png';
import greenApple from '../assets/drinks/greenApple.png';
import raspberry from '../assets/drinks/raspberry.png';
import kalakhata from '../assets/drinks/kalakhata.png';
import nimbuGinger from '../assets/drinks/nimbuGinger.png';

const items = [
  { url: jaljeera },
  { url: greenApple },
  { url: raspberry },
  { url: kalakhata },
  { url: nimbuGinger },
];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carousel.current) {
      const scrollTo = carousel.current.children[activeIndex]?.offsetLeft || 0;
      carousel.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, [activeIndex]);

  // Clone items for infinite scrolling
  const infiniteItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing">
        {infiniteItems.map((itemData, index) => (
          <motion.div
            key={index}
            className={`min-w-[20rem] min-h-[25rem] p-2 transition-transform duration-500 ease-in-out ${
              index % items.length === activeIndex ? 'scale-100' : 'scale-90 opacity-70'
            }`}>
            <img
              src={itemData.url}
              width={400}
              height={400}
              alt={`img-${index}`}
              className="w-full h-full object-cover pointer-events-none rounded-md"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
