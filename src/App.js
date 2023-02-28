import "./App.css";
import React from "react";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import ToDoCounter from "./components/ToDoCounter";
import ToDoSearch from "./components/ToDoSearch";
import ToDoList from "./components/ToDoList";
import ToDoItem from "./components/ToDoItem";
import CreateToDoButton from "./components/CreateToDoButton";
import ToDoTitle from "./components/ToDoTitle";

function App() {
  return (
    <React.Fragment>
      <Grid2 container spacing={2}>
        <Grid2 xs={8}>
          <ToDoTitle />
          <ToDoCounter />
        </Grid2>
        <Grid2 xs={4}>
          <ToDoSearch />
          <ToDoList>
            {[1, 2, 3].map((toDo) => (
              <ToDoItem key={toDo} text={`ToDo ${toDo}`} />
            ))}
          </ToDoList>
          <CreateToDoButton />
        </Grid2>
      </Grid2>
    </React.Fragment>
  );
}

export default App;
