import React from "react";
import "./TodoItem.css"

function TodoItem(props){
    return(
        <li className="listItem">
            <span 
            className={`listChecked ${props.completed && 'listChecked-completed'}`}
            onClick={props.onComplete}
            >
                ✔
            </span>
            <p className={`listText ${props.completed && 'listText-completed'}`}>{props.text}</p>
            <span 
            className="listDelete"
            onClick={props.onDelete}
            >
                x
            </span>
        </li>
    )
}

export {TodoItem};