import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (evento) => {
        setNewTodoValue(evento.target.value)
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To-Do</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar zanahorias para el almuerzo"
            />
            <div className="div-button-can-add">
                <button
                    type="button"
                    className="form-button btn-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="form-button btn-add"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
            
        </form>
    );
}

export {TodoForm};