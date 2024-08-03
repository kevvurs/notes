'use client'

import React, { useState, useRef } from 'react'
import TaskCard from './TaskCard';
import Task from '../lib/Task';

export default function TaskBoard() {
  const boardRef = useRef(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const createTask = (event: React.MouseEvent<HTMLDivElement>) => {
    if (boardRef.current && event.target === boardRef.current) {
      setTasks([...tasks, new Task(tasks.length, 'todo', '')]);  
    }
  };
  const updateTask = (newTask: Task) => {
    let newTasks: Task[] = [];
    for (let task of tasks) {
      if (newTask.id === task.id) {
        newTasks.push(newTask);
      } else {
        newTasks.push(task);
      }
    }
    setTasks([...newTasks]);
  };
  return (
    <div className="min-h-96"
         ref={boardRef}
         onClick={createTask}>
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
            <TaskCard key={task.id} task={task} updateTask={updateTask} />
          ))} 
        </div>
      }
    </div>
  );
}
