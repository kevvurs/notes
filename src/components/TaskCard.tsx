'use client'

import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';
import EditCard from './EditCard';
import Task from '../lib/Task';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard(props: TaskCardProps) {
  const { task } = props;
  const { updateTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(true);
  const handleUpdate = (task: Task) => {
    setIsEditing(false);
    updateTask(task);
  }
	return (
		<div className="bg-nord4 rounded w-full md:w-96 p-2 m-4">
      {isEditing ? 
        <EditCard initialTask={task} updateTask={handleUpdate} />
      :
        <div className="flex flex-col min-h-48">
          <h1 className="text-nord0 text-lg font-medium my-1">
            {task.title}
          </h1>
          <hr className="border-nord5 py-1"/>
          <p className="text-nord0 grow my-1">
            {task.description}
          </p>
          <button className="bg-nord9 w-16 mr-1 py-1 px-2 text-nord5 font-normal"
                  onClick={(ev) => setIsEditing(true)}>
            Edit
          </button>
        </div>
      }
		</div>
	);
}
