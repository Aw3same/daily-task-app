import { useAppSelector } from '@/lib/hooks/useStore';
import { TaskList } from '../components/TaskList';
import { CreateNewTask } from '../components/CreateNewTask';

export function TaskPage() {
  const totalTask = useAppSelector(state => state.tasks).length

  return (
    <div className='flex flex-col items-center justify-center max-w-7xl'>
      <div className='flex gap-5'>
        <h1 className='text-lg font-semibold'>Tasks</h1>
        <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-sky-500 text-gray-800 dark:bg-sky-400 dark:text-white font-semibold'>{totalTask}</span>
        </div>
      <TaskList />
      <CreateNewTask />

    </div>
  )
}
