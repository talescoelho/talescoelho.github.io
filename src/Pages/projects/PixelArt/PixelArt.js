import React, { useState } from 'react'
import Colors from './components/Colors';
import PixelBoard from './components/PixelBoard';
import './PixelBoard.css';

function PixelArt() {
  const [boardLength, setBoardLength] = useState(5);
  const [inputBoard, setInputBoard] = useState('');
  console.log(window.screen.availWidth / (50))
  return (
    <div className="pixel-art-container">
      <h2>
        Color Palette
      </h2>
      <Colors />
      <h3>
        Board Length
      </h3>
      <div className="board-length">
        <input type="number" min={ 0 } max={ window.screen.availWidth / 50 } value={ inputBoard } onChange={ ({ target }) => setInputBoard(target.value) } />
        <button
          className="button-enviar"
          onClick={ () => setBoardLength((window.screen.availWidth / 50) < inputBoard ? Math.floor(window.screen.availWidth / 50) : inputBoard ) }
        >
          Enviar
        </button>
      </div>
      <PixelBoard boardLength={ boardLength } />
    </div>
  )
}

export default PixelArt;
