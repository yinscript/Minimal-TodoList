import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheck, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, index, deleteTodo, editTodo, toggleComplete, moveUp, moveDown }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>
                {task.completed ? <FontAwesomeIcon icon={faCheck} className="check-icon" /> : null}
                {task.task}
            </p>
            <div className='icons'>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
                <FontAwesomeIcon className="move-up-icon" icon={faArrowUp} onClick={() => moveUp(index)} />
                <FontAwesomeIcon className="move-icon" icon={faArrowDown} onClick={() => moveDown(index)} />
            </div>
        </div>
    );
};
