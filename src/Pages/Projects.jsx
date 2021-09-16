import React from 'react'
import { Link } from 'react-router-dom';
import todoList from './projects/TodoList/todoList.png';
import PixelArt from './projects/PixelArt/PixelArt.png';
import '../styles/Project.css';

function Projects() {
  return (
    <main>
      <div className="container-projects">
        <Link to="/projects/todolist" className="link-project">
          <h1 className="title-project">
            Todo List
          </h1>
          <div className="card-project">
            <img src={ todoList } alt="todo List" />
          </div>
        </Link>
        <Link to="/projects/pixelart" className="link-project">
          <h1 className="title-project">
            Pixel Art
          </h1>
          <div className="card-project">
            <img src={ PixelArt } alt="todo List" />
          </div>
        </Link>
      </div>
    </main>
  )
}

export default Projects
