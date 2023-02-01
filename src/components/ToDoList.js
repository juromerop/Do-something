import React from 'react'
import '../styles/ToDoList.css'

function ToDoList(props) {
  return (
    <div className="ToDoList">
      <h2 className="ToDoList-title">Lista de tareas</h2>
      <ul className="ToDoList-list">
        <li className="ToDoList-item">
          <input type="checkbox" />
          <p>Comprar leche</p>
        </li>
        <li className="ToDoList-item">
          <input type="checkbox" />
          <p>Comprar pan</p>
        </li>
        <li className="ToDoList-item">
          <input type="checkbox" />
          <p>Comprar huevos</p>
        </li>
      </ul>
    </div>
  )
}

export default ToDoList