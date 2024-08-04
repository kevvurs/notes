'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTaskContext } from './TaskContext';
import Task from '../lib/Task';

interface EditCardProps {
  initialTask: Task;
  updateTask: (task: Task) => void;
}

export default function EditCard(props: EditCardProps) {
  const { initialTask, updateTask } = props;
  const { deleteTask } = useTaskContext();
  const [title, setTitle] = useState(initialTask.title);
  const [description, setDescription] = useState(initialTask.description);
  const [isDeleting, setIsDeleting] = useState(false);
  const deleteTaskRef = useRef<number | undefined>(undefined);
  const save = () => updateTask(new Task(initialTask.id, title, description));
  useEffect(() => {
    if (isDeleting) {
      const deleteTaskId = window.setTimeout(() => {
        deleteTask(initialTask.id);
      }, 3000);
      deleteTaskRef.current = deleteTaskId;
    } else {
      window.clearTimeout(deleteTaskRef.current);
      deleteTaskRef.current = undefined;
    }
    return () => window.clearTimeout(deleteTaskRef.current);
  }, [isDeleting, deleteTask, initialTask]);
  return (
    <div className="flex flex-col min-h-48">
      <input className="bg-nord4 border-0 focus:outline-0 text-lg font-medium my-1"
             type='text' value={title} onChange={
        (ev) => setTitle(ev.target.value)
      }/>
      <textarea className="grow bg-nord4 border-0 focus:outline-0 my-1"
                rows={4} cols={15} placeholder="Notes" onChange={
        (ev) => setDescription(ev.target.value)
      } defaultValue={description} />

      <div className="flex-row">
        <button className="bg-nord9 w-16 mr-1 py-1 px-2 text-nord5 font-normal"
                onClick={save}>
          Save
        </button>
        <button className="bg-nord11 w-16 mr-1 py-1 px-2 text-nord5 font-normal
                           active:transition-colors active:bg-nord1 ease-linear duration-3000"
                onMouseDown={(ev) => setIsDeleting(true)}
                onMouseUp={(ev) => setIsDeleting(false)}>
          Delete
        </button>
      </div>
    </div>
  );
}
