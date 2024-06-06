import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../reducers/tasksReducer';

/**
 * Composant pour afficher une tâche individuelle.
 */
const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <span onClick={() => dispatch(toggleTask(task.id))}>
        {task.description}
      </span>
      <button onClick={() => dispatch(deleteTask(task.id))}>Supprimer</button>
    </div>
  );
};

export default Task;
