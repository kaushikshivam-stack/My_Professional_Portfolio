import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

import clientKenny from '../../assets/client_kenny.png';
import clientJohn from '../../assets/client_john.png';
import clientSara from '../../assets/client_sara.png';
import clientJane from '../../assets/client_jane.png';

const fallbackTestimonials = [
  {
    name: 'Arjun Mehta',
    company: 'CTO at AutomateX Solutions',
    feedback: 'Shivam’s expertise in AI Agents and Automation transformed our workflows. He built custom LLM agents that reduced our customer support response time by 70%. Highly professional and technically brilliant.',
    imgurl: clientKenny,
  },
  {
    name: 'Vikram Malhotra',
    company: 'Founder at NexaCart E-commerce',
    feedback: 'Shivam built a custom AI Chatbot for our e-commerce platform that successfully guides users to purchase. It boosted our conversion rate by 15%. His work with React and UI/UX design is clean and scalable.',
    imgurl: clientJohn,
  },
  {
    name: 'Sarah Jenkins',
    company: 'Head of Operations at PeakFlow Systems',
    feedback: 'Shivam is an exceptional developer. He automated our internal backend pipelines using custom AI Automation scripts. He delivers robust, clean code and maintains excellent communication throughout the project.',
    imgurl: clientSara,
  },
  {
    name: 'Elena Rostova',
    company: 'Product Director at SynthFlow AI',
    feedback: 'Working with Shivam was seamless. He integrated an advanced AI Voice Agent system that handles inbound customer inquiries naturally. His understanding of full-stack scalability is top-notch.',
    imgurl: clientJane,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      if (data && data.length > 0) {
        const isPlaceholder = data.some((t) => t.name.includes('Doe') || t.company.toLowerCase().includes('apple') || t.company.toLowerCase().includes('google'));
        if (isPlaceholder) {
          setTestimonials(fallbackTestimonials);
        } else {
          setTestimonials(data);
        }
      } else {
        setTestimonials(fallbackTestimonials);
      }
    }).catch(() => {
      setTestimonials(fallbackTestimonials);
    });
  }, []);

  return (
    <>
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={
                typeof testimonials[currentIndex].imgurl === 'string'
                  ? testimonials[currentIndex].imgurl
                  : urlFor(testimonials[currentIndex].imgurl)
              }
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">
                {testimonials[currentIndex].feedback
                  .replace(/Micael/gi, 'Shivam')
                  .replace(/Orion/gi, 'Shivam')}
              </p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
