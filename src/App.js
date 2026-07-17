import React, { useState, useEffect } from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar, SocialMedia } from './components';
import './App.scss';

const App = () => {
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
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header theme={theme} />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <SocialMedia />
    </div>
  );
};

export default App;
