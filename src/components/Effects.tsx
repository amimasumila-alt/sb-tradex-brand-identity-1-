import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CURSOR_SIZE = 8;
const TRAILER_SIZE = 32;

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePos.x - CURSOR_SIZE / 2,
          y: mousePos.y - CURSOR_SIZE / 2,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
        style={{ width: CURSOR_SIZE, height: CURSOR_SIZE }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-primary/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePos.x - TRAILER_SIZE / 2,
          y: mousePos.y - TRAILER_SIZE / 2,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
        style={{ width: TRAILER_SIZE, height: TRAILER_SIZE }}
      />
    </>
  );
};

export const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, '-120%'],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 20,
          }}
          style={{
            width: '2px',
            height: '2px',
            boxShadow: '0 0 10px rgba(197, 162, 62, 0.5)',
          }}
        />
      ))}
    </div>
  );
};
