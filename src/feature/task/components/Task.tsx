import { IconButton } from '@/lib/components/Buttons'
import { TaskState } from '@/store/task/slice'
import { CheckIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useDeleteTask } from '../hooks/useDeleteTask'

export function Task({ task }: { task: TaskState }) {
  const { deleteTask } = useDeleteTask()
  return (
    <li className='flex items-center gap-5'>
      {task.done && (
        <CheckIcon className='p-1 rounded-full bg-green-500 dark:bg-green-400 h-[18px] w-[18px] text-white peer-focus:text-gray-900' />
      )}
      <span className={`${task.done ? 'line-through' : ''}`}>{task.title}</span>
      <IconButton onClick={() => deleteTask(task.id)}>
        <TrashIcon
          className='pointer-events-none h-[18px] w-[18px] text-black dark:text-white peer-focus:text-gray-900'
          aria-label='Delete task'
        />
      </IconButton>
    </li>
  )
}
