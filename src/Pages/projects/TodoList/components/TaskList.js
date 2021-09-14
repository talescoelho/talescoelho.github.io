import React from 'react'

function TaskList({ tasks, addClass }) {
  return (
    <ul className="task-list">
      {
        tasks.map((task, index) => (
          <li
            className={`list-item ${task.complete} ${task.selected}`}
            key={ index }
            onClick={ () => addClass(task.position) }
            value={ task.position }
          >
            { task.task }
          </li>
        ))
      }
    </ul>
  )
}

export default TaskList
