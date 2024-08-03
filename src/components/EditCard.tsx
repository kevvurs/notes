'use client'

import React, { useState } from 'react'
import Task from '../lib/Task';

interface EditCardProps {
  initialTask: Task;
  updateTask: (task: Task) => void;
}

export default function EditCard(props: EditCardProps) {
  const { initialTask, updateTask } = props;
  const [title, setTitle] = useState(initialTask.title);
  const [description, setDescription] = useState(initialTask.description);
  const save = () => updateTask(new Task(initialTask.id, title, description));
  return (
    <div>
      <input type='text' value={title} onChange={
        (ev) => setTitle(ev.target.value)
      }/>
      <textarea rows={4} cols={15} onChange={
        (ev) => setDescription(ev.target.value)
      }>
        {description}
      </textarea>
      <button onClick={save}>
        Save
      </button>
    </div>
  );
}
