import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';

function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
   } = React.useContext(TodoContext);

    return(
        <>
      <TodoCounter /> 
      <TodoSearch />
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
          {!!openModal && (
            <Modal>
             <TodoForm />
            </Modal>
          )}  

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </>
    )
}

export {AppUI};