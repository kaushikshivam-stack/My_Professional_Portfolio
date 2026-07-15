import React, { useState, useEffect } from 'react';
import { BsTwitter, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  const handleTriggerClick = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  // Close when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.app__social-floating')) {
        setIsOpen(false);
      }
    };

    if (isOpen && isMobile) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, isMobile]);

  return (
    <div
      className="app__social-floating"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="app__social-icons-wrapper"
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.85 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="social-linkedin">
              <a href="https://www.linkedin.com/in/shivam-techgeek" target="_blank" rel="noreferrer">
                <BsLinkedin />
              </a>
            </div>
            <div className="social-twitter">
              <a href="https://twitter.com/shivamkaushik" target="_blank" rel="noreferrer">
                <BsTwitter />
              </a>
            </div>
            <div className="social-whatsapp">
              <a href="https://wa.me/919122135215" target="_blank" rel="noreferrer">
                <BsWhatsapp />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className={`app__social-trigger ${isOpen ? 'active' : ''}`}
        aria-label="Social Menu"
        onClick={handleTriggerClick}
      >
        <FaHandshake style={{ width: '100%', height: '100%' }} />
      </button>
    </div>
  );
};

export default SocialMedia;
