import React, { useState } from 'react'

function Colors() {
  const [palette, setPalette] = useState([
    {
      id: 0,
      backgroundColor: 'white',
      selected: '',
    },
    {
      id: 1,
      backgroundColor: 'red',
      selected: '',
    },
    {
      id: 2,
      backgroundColor: 'blue',
      selected: '',
    },
    {
      id: 3,
      backgroundColor: 'green',
      selected: '',
    },
  ])

  function selectedColor(id) {
    setPalette(palette.map((value) => {
      if (value.id === id) {
        value.selected = 'selected';
      } else {
        value.selected = '';
      }
      return value
    }))
  }

  return (
    <div>
      { palette.map((value) => (
        <div
          className={ `pixel ${value.selected}` }
          style={ { backgroundColor: value.backgroundColor } }
          onClick={ () => selectedColor(value.id) }
        >
        </div>
      )) }
    </div>
  )
}

export default Colors
