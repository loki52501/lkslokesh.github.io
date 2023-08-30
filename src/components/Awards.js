// Awards.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/awards.css'; // Import your custom styles for the Awards section

const Awards = () => {
  const awards = [
    {
      title: 'First Prize at NIT Tirichy’s Blockchain  Workshop',
      description: 'Used Spreadsheet to integrate with Covalent API ',
      image: 'award1.jpg'
    }
  ];

  return (
    <section className="awards-section">
      <h2 className="awards-heading">My Awards</h2>
      <Carousel showThumbs={false} infiniteLoop={true}>
        {awards.map((award, index) => (
          <div className="award-item" key={index}>
            <div className="award-image" style={{ backgroundImage: `url(${award.image})` }}></div>
            <h3>{award.title}</h3>
            <p>{award.description}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Awards;
