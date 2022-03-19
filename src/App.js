//import './App.css';
import React from "react";

const todos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Tomar curso de react", completed: false},
  {text: "Llorar con la llorona", completed: false},
]

function App() {
  return (
    <>
     {/* <TodoCounter /> */} 
      <h2>Has completado 2 de 3 tareas</h2>
      {/*<TodoSearch/>*/}
      <input placeholder="cebolla"/>
      {/*<TodoList>
        {todos.map(todo=>(
          <TodoItem/>
        ))}
      </TodoList>*/}
      {/*<CreateTodoButton />*/}
      <button>boton</button>
    </>
  );
}

export default App;
