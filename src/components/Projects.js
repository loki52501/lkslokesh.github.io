// Project.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/project.css'; // Import your custom styles for the Project section

const Project = () => {
  const projects = [
    {
      title: 'BLOOD BANK DONATION SYSTEM',
      description: "I developed a Java Spring Boot-based blood bank donation system that alerts donors about hospitals in need of specific blood groups, enabling donors to respond and hospitals to receive notifications for potential blood admissions.",
      thumbnail: 'project1_thumbnail.jpg'
    },
    {
      title: 'Cme(See me[capture the face]) APPLICATION',
      description: "Utilizing Python backend hosted on Heroku cloud, it served as an API, integrating with an Android frontend framework, processing input images. Employed Haar Cascade Classifier for image analysis.",
      thumbnail: 'project2_thumbnail.jpg'
    },
    {
      title: 'AULibrary',
      description: 'Created a library book app enabling students to check book availability, request missing ones, enhancing library accessibility and convenience.',
      thumbnail: 'project3_thumbnail.jpg'
    }
  ];

  return (
    <section className="project-section">
      <h2 className="project-heading">My Projects</h2>
      <Carousel showThumbs={false} infiniteLoop={true}>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="thumbnail" style={{ backgroundImage: `url(${project.thumbnail})` }}></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Project;
