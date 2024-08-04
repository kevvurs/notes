import { TaskProvider } from '../components/TaskContext';
import TaskBoard from '../components/TaskBoard';

export default function Home() {
  return (
    <main className='w-full min-h-screen bg-nord0'>
      <h1>Do the damn thing.</h1>
      <hr />
      <div className='bg-nord2'>
        <TaskProvider>
          <TaskBoard />
        </TaskProvider>
      </div>
      <hr />
    </main>
  );
}
