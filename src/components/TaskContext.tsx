'use client'

import React, { createContext, useContext, useState } from 'react';
import Task from '../lib/Task';
import { generateId } from '../lib/TaskIdGenerator';

interface TaskContextType {
  tasks: Task[];
  createTask: () => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
}

type ProviderProps = {
  children: React.ReactNode
}

const TaskContext = createContext<TaskContextType | null>(null);

const TaskProvider = ({ children }: ProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const createTask = () => {
    setTasks([...tasks, new Task(generateId(), 'todo', '')]);
  };
  const deleteTask = (id: string) => {
    let newTasks: Task[] = [];
    for (let task of tasks) {
      if (id !== task.id) {
        newTasks.push(task);
      }
    }
    setTasks([...newTasks]);
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
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
}

const useTaskContext = () => useContext(TaskContext) as TaskContextType;

export { TaskProvider, useTaskContext };
