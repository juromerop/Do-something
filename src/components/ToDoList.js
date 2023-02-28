import React from "react";
import "../styles/ToDoList.css";
import Switch from "@mui/material/Switch";

function ToDoList(props) {
  return (
    <div className="ToDoList">
      <h2 className="ToDoList-title">Lista de tareas</h2>
      <ul className="ToDoList-list">
        <li className="ToDoList-item">
          <p>
            Comprar leche <Switch />
          </p>
        </li>
        <li className="ToDoList-item">
          <p>
            Comprar pan <Switch />
          </p>
        </li>
        <li className="ToDoList-item">
          <p>
            Comprar huevos <Switch />
          </p>
        </li>
      </ul>
    </div>
  );
}

export default ToDoList;
