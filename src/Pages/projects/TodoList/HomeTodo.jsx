import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import './HomeTodo.css';

function HomeTodo() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    if (localStorage.todoList) {
      const todoList = JSON.parse(localStorage.getItem('todoList'));
      setTaskList(todoList);
    }
  }, [])

  function upPosition() {
    const selected = document.querySelector('.selected');
    if (selected.value > 0) {
      setTaskList(taskList.map((value) => {
        if (value.position === selected.value) {
          value.position -= 1;
        } else if (value.position === selected.value - 1) {
          value.position += 1;
        }
        return value;
      }))
    }
  }

  function downPosition() {
    const selected = document.querySelector('.selected');
    if (selected.value < taskList.length) {
      setTaskList(taskList.map((value, index) => {
        if (value.position === selected.value) {
          value.position += 1;
        } else if (value.position === selected.value + 1) {
          value.position -= 1;
        }
        return value;
      }))
    }
  }

  function addClass(position) {
    setTaskList(taskList.map((value) => {
      if (value.position === position && value.selected === 'selected') {
        if (value.complete === 'complete') {
          value.complete = '';
        } else {
          value.complete = 'complete';
        }
      } 
      value.selected = '';
      if (value.position === position) {
        value.selected = 'selected';
      }
      return value;
    }))
  }

  function saveTasks() {
    localStorage.setItem('todoList', JSON.stringify(taskList));
  }

  return (
    <div className="home-todo">
      <div className="upper-todo">
        <input
          type="text"
          value={ task }
          placeholder="Tarefa"
          onChange={ ({ target }) => setTask(target.value) }
        />
        <div className="container-buttons-upper">
          <button
            className="add-task-button"
            onClick={ () => {
              setTaskList([...taskList, {
                id: taskList.reduce((acc, value) => Math.max(acc, value.id), 0) + 1,
                position: taskList.reduce((acc, value) => Math.max(acc, value.position), 0) + 1,
                task,
                complete: '', 
                selected: '',
              },]);
              setTask('')
            } }
          >
            Nova Tarefa
          </button>
          <button
            className="change-button"
            onClick={ upPosition }
          >
            UP
          </button>
          <button
            className="change-button"
            onClick={ downPosition }
          >
            DN
          </button>
        </div>
        <TaskList tasks={ taskList.sort((a, b) => a.position - b.position) } addClass={ addClass } />
      </div>
      <div className="filter-buttons">
        <button
          className="change-button"
          onClick={ () => {
            setTaskList(taskList.filter((value) => !value.complete).map((value, index) => {
              value.position = index + 1;
              return value;
            }));
            }
          }
        >
          Apagar Completas
        </button>
        <button
          className="change-button"
          onClick={ () => setTaskList(taskList.filter((value) => !value.selected)) }
          >
          Apagar Tarefa
        </button>
        <button
          className="change-button"
          onClick={ () => setTaskList([]) }
          >
          Apagar Todas
        </button>
        <button
          className="change-button"
          onClick={ saveTasks }
        >
          Salvar Tarefas
        </button>
      </div>
    </div>
  )
}

export default HomeTodo;
