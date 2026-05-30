import React from 'react';
import { motion } from 'framer-motion';

export const IktajLogo = ({ className = "w-12 h-12", color = "#C5A23E" }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`relative flex flex-col items-center justify-center ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Monogram Concept: Symmetrical I and G */}
      <path d="M50 20V80" stroke={color} strokeWidth="6" strokeLinecap="square" />
      <path d="M30 30C30 30 30 20 50 20C70 20 70 30 70 30V55H55" stroke={color} strokeWidth="6" strokeLinecap="square" />
      <path d="M70 70C70 70 70 80 50 80C30 80 30 70 30 70V55" stroke={color} strokeWidth="6" strokeLinecap="square" />
    </svg>
    <div className="mt-2 text-[0.4rem] tracking-[0.4em] font-light uppercase text-primary whitespace-nowrap">
      IKTAJ GROUP
    </div>
  </motion.div>
);

export const SBTradexLogo = ({ className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <div className="flex items-baseline">
      <span className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-text-primary">
        SB TRADE
        <span className="relative">
          X
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-success"
            style={{ transform: 'rotate(-45deg)' }}
          />
        </span>
      </span>
    </div>
    <span className="text-[0.6rem] tracking-[0.2em] text-text-muted uppercase -mt-1 ml-0.5">
      by IKTAJ GROUP
    </span>
  </div>
);
