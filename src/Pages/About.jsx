import React from 'react'
import meuHero from '../images/hero-about.png';
import '../styles/About.css';

function About() {
  return (
    <main>
      <img className="meu-about" src={ meuHero } alt="meu herói" />
      About
    </main>
  )
}

export default About
