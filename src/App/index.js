import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

/*
const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar curso de react", completed: false},
  {text: "Reparar la bicicleta", completed: true},
]
*/


function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
