import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaImages, FaVideo, FaUsers } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi scrollTo dengan useCallback untuk mencegah re-render tidak perlu
  const scrollTo = useCallback((id) => {
    // Tutup menu terlebih dahulu
    setIsOpen(false);
    
    // Gunakan setTimeout untuk memastikan menu tertutup sebelum scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Hitung offset untuk navbar
        const navbarHeight = 70; // Sesuaikan dengan tinggi navbar
        const elementPosition = element.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Delay sedikit lebih lama untuk animasi menu
  }, []);

  // Handle klik menu item
  const handleMenuClick = (id) => {
    scrollTo(id);
  };

  const menuItems = [
    { id: 'home', label: 'Beranda', icon: <FaHome /> },
    { id: 'about', label: 'Tentang', icon: <FaInfoCircle /> },
    { id: 'gallery', label: 'Galeri', icon: <FaImages /> },
    { id: 'video', label: 'Video', icon: <FaVideo /> },
    { id: 'profiles', label: 'Profil', icon: <FaUsers /> },
  ];

  // Lock scroll body ketika menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo('home')}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && scrollTo('home')}
        >
          <span className="logo-main">KKN SMPN 1</span>
          <span className="logo-sub">Limboto</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className="nav-link"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay - letakkan di luar mobile-menu-dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 998 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ zIndex: 999 }}
          >
            <div className="mobile-menu-content">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation(); // Hentikan propagasi event
                    handleMenuClick(item.id);
                  }}
                  className="mobile-menu-item"
                  type="button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10, backgroundColor: 'rgba(102, 126, 234, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    cursor: 'pointer',
                    zIndex: 1000 
                  }}
                >
                  <span className="menu-item-icon">{item.icon}</span>
                  <span className="menu-item-label">{item.label}</span>
                  <span className="menu-item-arrow">→</span>
                </motion.button>
              ))}
              
              <div className="mobile-menu-divider"></div>
              
              <div className="mobile-menu-footer">
                <p>KKN Periode 2023/2024</p>
                <p className="small-text">Universitas Negeri Gorontalo</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;