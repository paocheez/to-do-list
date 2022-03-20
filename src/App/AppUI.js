import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI() {
    return(
        <>
      <TodoCounter /> 
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          error, 
          loading, 
          searchedTodos,
          toggleCompleteTodo,
          deleteTodo,
         }) => (
          <TodoList>
            {error && <p>Desespérate, hubo un error</p>}
            {loading && <p>Estamos cargando, no desesperes</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
    )
}

export {AppUI};