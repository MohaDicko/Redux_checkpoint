import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

/**
 * Composant pour afficher la liste des tâches.
 */
const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
