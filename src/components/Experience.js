// Experience.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/experience.css'; // Import your custom styles for the Experience section

const Experience = () => {
  const experiences = [
    {
      title: 'VR Researcher and 3D Artist',
      company: 'Center of Immersive Technology, Anna University',
      description: "As a researcher in the CIT team, I focused on finalizing Anna University's CEG Main Building digital twin model, merging VR and 3D modeling for an enriched user experience. Developed detailed Blender architectural models for immersive VR exploration, enhancing understanding of design intricacies.",
      year: '2023'
    },
    {
      title: 'StraightSet Orthodontics',
      company: 'Data Analyst',
      description: 'I collaborated with insurance specialists, honing my data analyst skills. I acquired hands-on experience in Azure-based machine learning models, utilizing them to preprocess data effectively for insurance purposes.',
      year: '2023'
    },
    {
      title: 'Tvastr Cloud',
      company: 'Cloud Developer Intern',
      description:" I apprenticed under a cloud architect and engaged with the Product Engineering team. I acquired proficiency in AWS cloud models and policies, specifically utilizing Elasticsearch APIs for seamless functionality.",
      year: '2022'
    }
  ];

  return (
    <section className="experience-section">
      <h2 className="experience-heading">Work Experience</h2>
      <Carousel showThumbs={false} infiniteLoop={true}>
        {experiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.description}</p>
            <p>{experience.year}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Experience;
