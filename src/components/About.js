import React from 'react';
import '../styles/main.css';
import{Lock,Shield,Code}from 'react-feather'
const About = () => {

  
    return (
        <div >
        <section className="about-section">
    
      <div className="about-content">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
        A tech enthusiast skilled in development, data analysis, and all things software-related, eager to contribute expertise and passion to computer science endeavors.</p>
      </div>
      <div className="interests-section">
        <h3 className="interests-heading">My Interests</h3>
        <div className="interests-list">
          <div className="interest-item">
            <Code/>
            <p>Quantum Computing</p>
          </div>
          <div className="interest-item">
            <Lock/>
            <p>Blockchain</p>
          </div>
          <div className="interest-item">
            <Shield/>
            <p>Cybersecurity</p>
          </div>
        </div>
      </div>
        {/* Rest of the content */}
      </section>
      </div>
    );
  };
  
  export default About;


