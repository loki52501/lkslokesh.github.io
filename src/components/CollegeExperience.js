// CollegeExperience.js
import React from 'react';
import '../styles/collegeexperience.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const CollegeExperience = () => {
  const experiences = [
    {
      title: 'Coordinator, Organizer',
      organization: 'CTF',
      description: 'As a CTF Coordinator in the content domain, I contributed an article on the Perseverance rover to K!Magazine. Additionally, as an Organizer in the Xceed domain, I led Hackathon and AWS workshops, organized carnival events with VR games, and hosted an award ceremony recognizing societal contributions.',
      year: '2021-22'
    },
    {
        title: 'Administrator',
        organization: 'Ceg Reads',
        description:"Participating in the club's 20-20 challenge, I've developed skills in creating semi-automated workflows and organizing.",        
        year: '2021'
      },
    // Add more college experiences
  ];

  return (
    <section className="college-experience-section">
      <h2 className="college-experience-heading">College Work Experience</h2>
      <Carousel showThumbs={false} infiniteLoop={true}>
      {experiences.map((experience, index) => (
          <div className="college-experience-item" key={index}>
         
            <h3>{experience.title}</h3>
            <p>{experience.organization}</p>
            <p>{experience.description}</p>
            <p>{experience.year}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CollegeExperience;
