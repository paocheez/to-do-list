import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar curso de react", completed: false},
  {text: "Llorar con la llorona", completed: false},
]

function App() {
  return (
    <>
      <TodoCounter /> 
      <TodoSearch/>
      <TodoList>
        {todos.map(todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
