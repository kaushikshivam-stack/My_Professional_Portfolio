import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

import skillWebDesigner from '../../assets/skill_web_designer.png';
import skillReactNative from '../../assets/skill_react_native.png';
import skillBackend from '../../assets/skill_backend.png';
import skillFrontend from '../../assets/skill_frontend.png';
import skillAiAutomation from '../../assets/skill_ai_automation.png';
import skillAiAgents from '../../assets/skill_ai_agents.png';
import skillAiChatbots from '../../assets/skill_ai_chatbots.png';
import skillAiVoiceAgents from '../../assets/skill_ai_voice_agents.png';

const skillImages = {
  'Web Designer': skillWebDesigner,
  'App Developer': skillReactNative,
  'React Native Developer': skillReactNative,
  'Backend Developer': skillBackend,
  'Frontend Developer': skillFrontend,
  'AI Automation Specialist': skillAiAutomation,
  'AI Agents Developer': skillAiAgents,
  'AI Chatbots Developer': skillAiChatbots,
  'AI Voice Agents Developer': skillAiVoiceAgents,
};

const titleOverrides = {
  'AI Automation': 'AI Automation Specialist',
  'AI Agents': 'AI Agents Developer',
  'AI Chatbots': 'AI Chatbots Developer',
  'AI Voice Agents': 'AI Voice Agents Developer',
  'React Native Developer': 'App Developer',
};

const descriptionOverrides = {
  'React Native Developer': 'I am an App Developer with a passion for building beautiful and functional mobile applications.',
};

/* ── Hardcoded fallback data (shown when Sanity CORS is blocked) ── */
const fallbackAbouts = [
  {
    title: 'Web Designer',
    description: 'I am a web designer with a passion for creating beautiful and functional web applications.',
  },
  {
    title: 'App Developer',
    description: 'I am an App Developer with a passion for building beautiful and functional mobile applications.',
  },
  {
    title: 'Backend Developer',
    description: 'I am a backend developer with a passion for building beautiful and functional web applications.',
  },
  {
    title: 'Frontend Developer',
    description: 'I am a frontend developer with a passion for building beautiful and functional web applications.',
  },
  {
    title: 'AI Automation Specialist',
    description: 'I am an AI Automation specialist with a passion for building intelligent automated workflows and integrations.',
  },
  {
    title: 'AI Agents Developer',
    description: 'I am an AI Agents developer with a passion for designing autonomous intelligent systems and conversational bots.',
  },
  {
    title: 'AI Chatbots Developer',
    description: 'I am an AI Chatbots developer with a passion for designing intelligent, context-aware chatbot systems.',
  },
  {
    title: 'AI Voice Agents Developer',
    description: 'I am an AI Voice Agents developer with a passion for building smart voice-enabled assistants.',
  },
];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      if (data && data.length > 0) {
        setAbouts(data);
      } else {
        setAbouts(fallbackAbouts);
      }
    }).catch(() => {
      setAbouts(fallbackAbouts);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Build <span>Fast, Modern</span> <br />&amp; <span>Scalable Web Apps</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          const rawTitle = about.title ? about.title.trim() : '';
          const overrideKey = Object.keys(titleOverrides).find(
            (key) => key.toLowerCase() === rawTitle.toLowerCase(),
          );
          const displayTitle = overrideKey ? titleOverrides[overrideKey] : about.title;

          const descOverrideKey = Object.keys(descriptionOverrides).find(
            (key) => key.toLowerCase() === rawTitle.toLowerCase(),
          );
          const displayDescription = descOverrideKey ? descriptionOverrides[descOverrideKey] : about.description;

          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={skillImages[displayTitle] || (about.imgUrl ? urlFor(about.imgUrl) : '')} alt={displayTitle} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{displayTitle}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{displayDescription}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
