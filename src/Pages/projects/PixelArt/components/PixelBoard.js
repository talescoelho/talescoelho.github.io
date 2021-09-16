import React, { useEffect, useState } from 'react'

function PixelBoard({ boardLength }) {
  const [line, setLine] = useState(Array.from({length: boardLength}, (_, index) => index));

  useEffect(() => {
    setLine(Array.from({length: boardLength}, (_, index) => index))
  }, [boardLength]);

  function colorPixel({ target }) {
    if (document.querySelector('.selected')) {
      const selected = document.querySelector('.selected');
      if (target.style.backgroundColor === selected.style.backgroundColor) {
        target.style.backgroundColor = 'unset';
      } else {
        target.style.backgroundColor = selected.style.backgroundColor;
      }
    }
  }

  const tableBoard = line.map((value) => (
    <div key={ value } className="line">
      { Array.from({length: boardLength}, () => (
        <div
        className="pixel pixel-colors"
        onClick={ colorPixel }
        >
        </div>)) }
    </div>
  ))

  function clearBoard() {
   let pixels = [...document.querySelectorAll('.pixel-colors')];
   pixels = pixels.map((value) => {
     value.style.backgroundColor = 'unset'
     return value;
   })
  }
  
  return (
    <div>
      { tableBoard }
      <div>
        <button
          className="button-clear"
          onClick={ clearBoard }
        >Clear Board</button>
      </div>
    </div>
  )
}

export default PixelBoard
