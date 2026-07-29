import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
          >
            Alumni UNG Mengajar
          </motion.h1>
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          >
            SMPN 1 Limboto
          </motion.h2>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
          >
            Mengabdi dengan Hati, Mendidik dengan Cinta
          </motion.p>
          <motion.p 
            className="hero-period"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.8 }}
          >
            Periode 2025/2026
          </motion.p>
        </motion.div>

        <motion.button 
          className="scroll-button"
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaArrowDown />
          <span>Jelajahi</span>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;