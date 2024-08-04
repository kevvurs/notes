'use client'

import React, { useState, useRef } from 'react'
import { useTaskContext } from './TaskContext';
import TaskCard from './TaskCard';

export default function TaskBoard() {
  const boardRef = useRef(null);
  const { tasks, createTask } = useTaskContext();
  const addTask = (event: React.MouseEvent<HTMLDivElement>) => {
    if (boardRef.current && event.target === boardRef.current) {
      createTask();  
    }
  };
  return (
    <div className="min-h-96"
         ref={boardRef}
         onClick={addTask}>
      {tasks.length == 0 &&
        <div className="flex flex-wrap justify-center">
          <p className="text-2xl opacity-75">
            Click to add a note.
          </p>
        </div>
      }
      {tasks.length > 0 &&
        <div className="flex flex-wrap justify-start">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))} 
        </div>
      }
    </div>
  );
}
