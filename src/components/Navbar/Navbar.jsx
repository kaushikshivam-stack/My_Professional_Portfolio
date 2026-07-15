import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Shivam <span>K@ushik</span></h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          type="button"
          className="app__navbar-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <HiOutlineMoon /> : <HiOutlineSun />}
        </button>

        <div className="app__navbar-menu">
          <div
            onClick={() => setToggle(true)}
            style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
          >
            <HiMenuAlt4 />
          </div>

          {toggle && (
            <motion.div
              className="app__navbar-menu-drawer"
              animate={{ x: [300, 0] }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div
                onClick={() => setToggle(false)}
                style={{ alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', padding: '5px', marginBottom: '1rem' }}
              >
                <HiX />
              </div>
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
