import React from 'react';
import meuHero from '../images/hero-copilot.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <main className="home">
      <img className="meu-hero" src={ meuHero } alt="meu herói" />
      <div className="container-text">
        <h1>Olá, sou Tales Coelho</h1>
        <h3>Estudante de Desenvolvimento Web</h3>
      </div>
      <div className="container-buttons">
        <Link to="/about">
          <button className="page-button">Sobre</button>
        </Link>
        <Link to="/projects">
          <button className="page-button">Projetos</button>
        </Link>
      </div>
    </main>
  )
}
