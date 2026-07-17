import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

import projectUiux from '../../assets/project_uiux.png';
import projectEwalle from '../../assets/project_ewalle.png';
import projectSpacex from '../../assets/project_spacex.png';
import projectWeb3 from '../../assets/project_web3.png';
import projectBlog from '../../assets/project_blog.png';
import projectFuturepath from '../../assets/project_futurepath.png';
import projectCommunity from '../../assets/project_community.png';
import projectSweet from '../../assets/project_sweet.png';
import projectPatisserie from '../../assets/project_patisserie.png';
import projectAurabrew from '../../assets/project_aurabrew.png';
import projectApexfitness from '../../assets/project_apexfitness.png';

const projectImages = {
  'Modern UI/UX Website': projectUiux,
  'Origin.Ai': projectUiux,
  'Ewalle wallet app': projectEwalle,
  CareerHive: projectEwalle,
  SpaceX: projectSpacex,
  'AI Interview Coach': projectSpacex,
  'Web3.0 Project': projectWeb3,
  'Apex Fitness': projectApexfitness,
  'Blog Website': projectBlog,
  'Aura Brew': projectAurabrew,
  'Starbucks Clone': projectFuturepath,
  'FuturePath Consulting': projectFuturepath,
  'Community App': projectCommunity,
  'AuraHealth Clinic': projectCommunity,
  'Sweet Shop': projectSweet,
  'Patisserie Shop': projectPatisserie,
};

/* ── Hardcoded fallback data (shown when Sanity CORS is blocked) ── */
const fallbackWorks = [
  {
    title: 'Origin.Ai',
    description: 'A next-generation AI platform to accelerate innovation with advanced intelligence, blockchain tech, and cloud solutions.',
    projectLink: 'https://kaushikshivam-stack.github.io/Origin-Ai/',
    codeLink: 'https://github.com/kaushikshivam-stack/Origin-Ai',
    tags: ['UI/UX', 'Web App', 'React JS'],
  },
  {
    title: 'CareerHive',
    description: 'India\'s smartest job discovery platform featuring advanced search filters, resume tools, and comprehensive job vacancy listings.',
    projectLink: 'https://kaushikshivam-stack.github.io/CareerHive/',
    codeLink: 'https://github.com/kaushikshivam-stack/CareerHive',
    tags: ['UI/UX', 'Web App', 'React JS'],
  },
  {
    title: 'AI Interview Coach',
    description: 'An AI-powered interview preparation assistant that analyzes resumes for ATS score and conducts personalized voice mock interviews.',
    projectLink: 'https://ai-interview-assistant-sooty-kappa.vercel.app/',
    codeLink: 'https://github.com/kaushikshivam-stack/ai-interview-assistant',
    tags: ['Web App', 'React JS', 'UI/UX'],
  },
  {
    title: 'Apex Fitness',
    description: 'A high-performance gym and athletic conditioning website with BMI calculator, training programs, class schedules, and membership plans.',
    projectLink: 'https://kaushikshivam-stack.github.io/apex-fitness/',
    codeLink: 'https://github.com/kaushikshivam-stack/apex-fitness',
    tags: ['UI/UX', 'Web App', 'React JS'],
  },
  {
    title: 'Aura Brew',
    description: 'A premium artisanal coffee brand website showcasing ethical sourcing, micro-batch roasting, and world-class craft.',
    projectLink: 'https://kaushikshivam-stack.github.io/Aura-Brew-Coffee/',
    codeLink: 'https://github.com/kaushikshivam-stack/Aura-Brew-Coffee',
    tags: ['UI/UX', 'Web App', 'React JS'],
  },
  {
    title: 'FuturePath Consulting',
    description: 'A premium professional consulting and business strategy website with interactive service modules, career advice, and contact portals.',
    projectLink: 'https://kaushikshivam-stack.github.io/-futurepath-consulting/',
    codeLink: 'https://github.com/kaushikshivam-stack/-futurepath-consulting',
    tags: ['Web App', 'React JS', 'UI/UX'],
  },
  {
    title: 'AuraHealth Clinic',
    description: 'A premium medical and healthcare services platform designed to redefine patient care with advanced clinical modules.',
    projectLink: 'https://kaushikshivam-stack.github.io/Aura_Health-Clinic/',
    codeLink: 'https://github.com/kaushikshivam-stack/Aura_Health-Clinic',
    tags: ['UI/UX', 'Web App', 'React JS'],
  },
  {
    title: 'Patisserie Shop',
    description: 'A premium custom cakes bakery and patisserie website featuring rich UI/UX animations and clean layouts.',
    projectLink: 'https://kaushikshivam-stack.github.io/responsive-Patisserie-website/',
    codeLink: 'https://github.com/kaushikshivam-stack/responsive-Patisserie-website',
    tags: ['UI/UX', 'Mobile App', 'React JS'],
  },
];

const projectOverrides = {
  'Modern UI/UX Website': {
    title: 'Origin.Ai',
    description: 'A next-generation AI platform to accelerate innovation with advanced intelligence, blockchain tech, and cloud solutions.',
    projectLink: 'https://kaushikshivam-stack.github.io/Origin-Ai/',
    codeLink: 'https://github.com/kaushikshivam-stack/Origin-Ai',
  },
  'Origin.Ai': {
    title: 'Origin.Ai',
    description: 'A next-generation AI platform to accelerate innovation with advanced intelligence, blockchain tech, and cloud solutions.',
    projectLink: 'https://kaushikshivam-stack.github.io/Origin-Ai/',
    codeLink: 'https://github.com/kaushikshivam-stack/Origin-Ai',
  },
  SpaceX: {
    title: 'AI Interview Coach',
    description: 'An AI-powered interview preparation assistant that analyzes resumes for ATS score and conducts personalized voice mock interviews.',
    projectLink: 'https://ai-interview-assistant-sooty-kappa.vercel.app/',
    codeLink: 'https://github.com/kaushikshivam-stack/ai-interview-assistant',
  },
  'AI Interview Coach': {
    title: 'AI Interview Coach',
    description: 'An AI-powered interview preparation assistant that analyzes resumes for ATS score and conducts personalized voice mock interviews.',
    projectLink: 'https://ai-interview-assistant-sooty-kappa.vercel.app/',
    codeLink: 'https://github.com/kaushikshivam-stack/ai-interview-assistant',
  },
  'Web3.0 Project': {
    title: 'Apex Fitness',
    description: 'A high-performance gym and athletic conditioning website with BMI calculator, training programs, class schedules, and membership plans.',
    projectLink: 'https://kaushikshivam-stack.github.io/apex-fitness/',
    codeLink: 'https://github.com/kaushikshivam-stack/apex-fitness',
  },
  'Apex Fitness': {
    title: 'Apex Fitness',
    description: 'A high-performance gym and athletic conditioning website with BMI calculator, training programs, class schedules, and membership plans.',
    projectLink: 'https://kaushikshivam-stack.github.io/apex-fitness/',
    codeLink: 'https://github.com/kaushikshivam-stack/apex-fitness',
  },
  'Blog Website': {
    title: 'Aura Brew',
    description: 'A premium artisanal coffee brand website showcasing ethical sourcing, micro-batch roasting, and world-class craft.',
    projectLink: 'https://kaushikshivam-stack.github.io/Aura-Brew-Coffee/',
    codeLink: 'https://github.com/kaushikshivam-stack/Aura-Brew-Coffee',
  },
  'Aura Brew': {
    title: 'Aura Brew',
    description: 'A premium artisanal coffee brand website showcasing ethical sourcing, micro-batch roasting, and world-class craft.',
    projectLink: 'https://kaushikshivam-stack.github.io/Aura-Brew-Coffee/',
    codeLink: 'https://github.com/kaushikshivam-stack/Aura-Brew-Coffee',
  },
  'Sweet Shop': {
    title: 'Patisserie Shop',
    description: 'A premium custom cakes bakery and patisserie website featuring rich UI/UX animations and clean layouts.',
    projectLink: 'https://kaushikshivam-stack.github.io/responsive-Patisserie-website/',
    codeLink: 'https://github.com/kaushikshivam-stack/responsive-Patisserie-website',
  },
  'Patisserie Shop': {
    title: 'Patisserie Shop',
    description: 'A premium custom cakes bakery and patisserie website featuring rich UI/UX animations and clean layouts.',
    projectLink: 'https://kaushikshivam-stack.github.io/responsive-Patisserie-website/',
    codeLink: 'https://github.com/kaushikshivam-stack/responsive-Patisserie-website',
  },
  'Community App': {
    title: 'AuraHealth Clinic',
    description: 'A premium medical and healthcare services platform designed to redefine patient care with advanced clinical modules.',
    projectLink: 'https://kaushikshivam-stack.github.io/Aura_Health-Clinic/',
    codeLink: 'https://github.com/kaushikshivam-stack/Aura_Health-Clinic',
  },
  'AuraHealth Clinic': {
    title: 'AuraHealth Clinic',
    description: 'A premium medical and healthcare services platform designed to redefine patient care with advanced clinical modules.',
    projectLink: 'https://kaushikshivam-stack.github.io/Aura_Health-Clinic/',
    codeLink: 'https://github.com/kaushikshivam-stack/Aura_Health-Clinic',
  },
  'Ewalle wallet app': {
    title: 'CareerHive',
    description: 'India\'s smartest job discovery platform featuring advanced search filters, resume tools, and comprehensive job vacancy listings.',
    projectLink: 'https://kaushikshivam-stack.github.io/CareerHive/',
    codeLink: 'https://github.com/kaushikshivam-stack/CareerHive',
  },
  CareerHive: {
    title: 'CareerHive',
    description: 'India\'s smartest job discovery platform featuring advanced search filters, resume tools, and comprehensive job vacancy listings.',
    projectLink: 'https://kaushikshivam-stack.github.io/CareerHive/',
    codeLink: 'https://github.com/kaushikshivam-stack/CareerHive',
  },
  'Starbucks Clone': {
    title: 'FuturePath Consulting',
    description: 'A premium professional consulting and business strategy website with interactive service modules, career advice, and contact portals.',
    projectLink: 'https://kaushikshivam-stack.github.io/-futurepath-consulting/',
    codeLink: 'https://github.com/kaushikshivam-stack/-futurepath-consulting',
  },
  'FuturePath Consulting': {
    title: 'FuturePath Consulting',
    description: 'A premium professional consulting and business strategy website with interactive service modules, career advice, and contact portals.',
    projectLink: 'https://kaushikshivam-stack.github.io/-futurepath-consulting/',
    codeLink: 'https://github.com/kaushikshivam-stack/-futurepath-consulting',
  },
};

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeOverlayIndex, setActiveOverlayIndex] = useState(null);

  const handleTouchStart = (index) => () => {
    setActiveOverlayIndex(index);
  };

  const handleTouchEnd = () => () => {
    setTimeout(() => {
      setActiveOverlayIndex(null);
    }, 350);
  };

  const handleTouchMove = () => {
    setActiveOverlayIndex(null);
  };

  // Close overlays on clicking outside
  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (!e.target.closest('.app__work-item')) {
        setActiveOverlayIndex(null);
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      if (data && data.length > 0) {
        const hiddenCards = ['MERN Memories', 'Shareme Website'];
        const filtered = data.filter((w) => !hiddenCards.includes(w.title));
        setWorks(filtered);
        setFilterWork(filtered);
      } else {
        setWorks(fallbackWorks);
        setFilterWork(fallbackWorks);
      }
    }).catch(() => {
      setWorks(fallbackWorks);
      setFilterWork(fallbackWorks);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => {
          const rawTitle = work.title ? work.title.trim() : '';
          const overrideKey = Object.keys(projectOverrides).find(
            (key) => key.toLowerCase() === rawTitle.toLowerCase(),
          );
          const displayTitle = overrideKey ? projectOverrides[overrideKey].title : work.title;
          const displayDescription = overrideKey ? projectOverrides[overrideKey].description : work.description;
          const displayProjectLink = overrideKey ? projectOverrides[overrideKey].projectLink : work.projectLink;
          const displayCodeLink = overrideKey ? projectOverrides[overrideKey].codeLink : work.codeLink;

          return (
            <div
              className="app__work-item app__flex"
              key={index}
              onTouchStart={handleTouchStart(index)}
              onTouchEnd={handleTouchEnd()}
              onTouchMove={handleTouchMove}
            >
              <div
                className="app__work-img app__flex"
              >
                <img src={projectImages[displayTitle] || (work.imgUrl ? urlFor(work.imgUrl) : '')} alt={displayTitle} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  animate={{ opacity: activeOverlayIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className="app__work-hover app__flex"
                >
                  <a href={displayProjectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={displayCodeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.90] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{displayTitle}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{displayDescription}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
