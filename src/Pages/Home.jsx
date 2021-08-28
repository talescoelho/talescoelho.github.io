import React from 'react';
import meuHero from '../images/hero-copilot.png';
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
        <button className="page-button">Sobre</button>
        <button className="page-button">Projetos</button>
      </div>
    </main>
  )
}
