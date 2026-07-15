import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import './Skills.scss';

/* ── Hardcoded fallback data (shown when Sanity CORS is blocked) ── */
const fallbackSkills = [
  { name: 'React', bgColor: 'rgba(124,58,237,0.12)', icon: images.react },
  { name: 'JavaScript', bgColor: 'rgba(234,179,8,0.12)', icon: images.javascript },
  { name: 'Node.js', bgColor: 'rgba(34,197,94,0.12)', icon: images.node },
  { name: 'HTML5', bgColor: 'rgba(234,88,12,0.12)', icon: images.html },
  { name: 'CSS3', bgColor: 'rgba(59,130,246,0.12)', icon: images.css },
  { name: 'Python', bgColor: 'rgba(59,130,246,0.12)', icon: images.python },
  { name: 'Git', bgColor: 'rgba(239,68,68,0.12)', icon: images.git },
  { name: 'Figma', bgColor: 'rgba(124,58,237,0.12)', icon: images.figma },
  { name: 'Redux', bgColor: 'rgba(124,58,237,0.12)', icon: images.redux },
  { name: 'GraphQL', bgColor: 'rgba(219,39,119,0.12)', icon: images.graphql },
  { name: 'TypeScript', bgColor: 'rgba(59,130,246,0.12)', icon: images.typescript },
  { name: 'Sass', bgColor: 'rgba(219,39,119,0.12)', icon: images.sass },
];

const fallbackExperiences = [
  {
    year: '2026',
    works: [
      { name: 'AIML Engineer', company: 'Self Projects', desc: 'Designed and deployed machine learning models, worked with NLP and deep learning integrations.' },
      { name: 'Full Stack Developer', company: 'Freelance', desc: 'Built complete MERN stack apps for clients — authentication, REST APIs, MongoDB, React frontend.' },
      { name: 'React Developer', company: 'Self Projects', desc: 'Developed 10+ React projects including e-commerce, dashboards, and social apps.' },
    ],
  },
  {
    year: '2025',
    works: [
      { name: 'Frontend Developer', company: 'Internship', desc: 'Worked on responsive UI components, pixel-perfect designs, and performance optimizations.' },
      { name: 'UI/UX Designer', company: 'Freelance', desc: 'Designed and prototyped web apps using Figma. Delivered 5+ client projects.' },
    ],
  },
  {
    year: '2024',
    works: [
      { name: 'Web Developer', company: 'College Projects', desc: 'Started full stack journey — HTML, CSS, JavaScript, then React and Node.js.' },
    ],
  },
];

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      if (data && data.length > 0) {
        const sortedData = [...data].sort((a, b) => b.year.localeCompare(a.year));
        setExperiences(sortedData);
      } else {
        setExperiences(fallbackExperiences);
      }
    }).catch(() => setExperiences(fallbackExperiences));

    client.fetch(skillsQuery).then((data) => {
      if (data && data.length > 0) setSkills(data);
      else setSkills(fallbackSkills);
    }).catch(() => setSkills(fallbackSkills));
  }, []);

  return (
    <>
      <h2 className="head-text">My <span>Skills</span> &amp; Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                {skill.icon && typeof skill.icon !== 'object'
                  ? <img src={skill.icon} alt={skill.name} />
                  : <img src={urlFor(skill.icon)} alt={skill.name} />}
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="rgba(26,26,46,1)"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
