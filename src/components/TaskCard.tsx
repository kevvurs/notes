'use client'

import React, { useState } from 'react';
import EditCard from './EditCard';
import Task from '../lib/Task';

interface TaskCardProps {
  task: Task;
  updateTask: (task: Task) => void;
}

export default function TaskCard(props: TaskCardProps) {
  const { task, updateTask } = props;
  const [isEditing, setIsEditing] = useState(true);
	return (
		<div className="w-1/5 p-2 m-2">
      {isEditing ? 
        <EditCard initialTask={task} updateTask={updateTask} />
        :
        <><h1>{task.title}</h1>
          <p>{task.description}</p>
        </>
      }
		</div>
	);
}
