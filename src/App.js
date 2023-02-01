import './App.css';
import React from 'react';
import ToDoCounter from './components/ToDoCounter';
import ToDoSearch from './components/ToDoSearch';
import ToDoList from './components/ToDoList';
import ToDoItem from './components/ToDoItem';
import CreateToDoButton from './components/CreateToDoButton';

function App() {
  return (
    <React.Fragment>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {[1, 2, 3].map(toDo => (
          <ToDoItem key={toDo} text={`ToDo ${toDo}`} />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
