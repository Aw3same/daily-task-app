import { IconButton } from '@/lib/components/Buttons'
import { TaskState } from '@/store/task/slice'
import { CheckIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useTaskActions } from '../hooks/useTaskActions'

export function Task({ task }: { task: TaskState }) {
  const { deleteTask, markAsDone } = useTaskActions()
  return (
    <li className='grid grid-cols-3 items-center place-items-center'>
      <IconButton onClick={() => markAsDone(task.id)}>
        <CheckIcon
          className={`-p-1 rounded-full ${ task.done ? 'bg-green-500 dark:bg-green-400': 'bg-gray-500 dark:bg-gray-400'} h-[18px] w-[18px] text-white peer-focus:text-gray-900`}
          aria-label='Mark as done task'
        />
      </IconButton>
      <span className={`${task.done ? 'line-through' : ''} text-black dark:text-white`}>{task.title}</span>
      <IconButton onClick={() => deleteTask(task.id)}>
        <TrashIcon
          className='pointer-events-none h-[18px] w-[18px] text-black dark:text-white peer-focus:text-gray-900'
          aria-label='Delete task'
        />
      </IconButton>
    </li>
  )
}
