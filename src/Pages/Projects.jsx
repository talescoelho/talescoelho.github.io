import React from 'react'
import { Link } from 'react-router-dom';
import todoList from './projects/TodoList/todoList.png';
import PixelArt from './projects/PixelArt/PixelArt.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Project.css';

function Projects() {
  return (
    <main>
      <Carousel>
        <Carousel.Item>
          <img src={ todoList } alt="todo List" className="d-block w-100" />
          <Carousel.Caption>
            <Link to="/projects/todolist">
              <h1 className="title-project">
                Todo List
              </h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ PixelArt } alt="todo List" className="d-block w-100" />
          <Carousel.Caption>
            <Link to="/projects/pixelart">
              <h1 className="title-project">
                Pixel Art
              </h1>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
  )
}

export default Projects
