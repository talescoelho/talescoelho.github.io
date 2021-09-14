import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Project.css';

function Projects() {
  return (
    <main>
      Projects
      <div className="container-projects">
        <Link to="/projects/todolist" >
          <button className="page-button">Todo List</button>
        </Link>
      </div>
    </main>
  )
}

export default Projects
