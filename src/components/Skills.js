import React from 'react';
import '../styles/skills.css'
const Skills = () => {
  const skillsList = [
    'CPP',
    'React & React Native',
    'Javascript',
    'Python',
    'Postgresql',
    'MongoDB',
    'AWS & Azure',
    'Machine Learning',
    // Add more skills
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills and Technologies</h2>
      <div className="skills-table">
        <table>
          <tbody>
            {skillsList.map((skill, index) => (
              <tr key={index}>
                <td className="skill-item">{skill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Skills;