import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar curso de react", completed: false},
  {text: "Llorar con la llorona", completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length>=1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      /> 
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
