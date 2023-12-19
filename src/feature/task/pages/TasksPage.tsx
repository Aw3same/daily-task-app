import { TaskList } from '../components/TaskList';
import { CreateNewTask } from '../components/CreateNewTask';
import { TaskCounter } from '../components/TaskCounter';

export function TaskPage() {


  return (
    <div className='flex flex-col items-center justify-center gap-6'>
      <TaskCounter />
      <TaskList />
      <CreateNewTask />
    </div>
  )
}
