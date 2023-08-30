import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Experience from './components/Experience';
import Skills from './components/Skills';
import CollegeExperience from './components/CollegeExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Experience />
   
      <CollegeExperience />
      <Footer />
    </div>
  );
}

export default App;


