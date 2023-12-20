import { IconButton } from '@/lib/components/Buttons'
import { TaskState } from '@/store/task/slice'
import {
  ArrowUturnLeftIcon,
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid'
import { useTaskActions } from '../hooks/useTaskActions'
import { useRef, useState } from 'react'

export function Task({ task }: { task: TaskState }) {
  const { deleteTask, markAsDone, editTask } = useTaskActions()
  const inputEditTitle = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && editedTitle !== '') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== task.title) {
        editTask(task.id, editedTitle)
      }

      if (editedTitle === '') deleteTask(task.id)

      setIsEditing(false)
    }

    if (e.key === 'Escape') {
      setEditedTitle(task.title)
      setIsEditing(false)
    }
  }

  return (
    <li className='grid grid-cols-2 items-center'>

      {isEditing ? (
        <input
          className='block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
          value={editedTitle}
          onChange={e => {
            setEditedTitle(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            setIsEditing(false)
          }}
          ref={inputEditTitle}
        />
      ) : (
        <div className='flex gap-3 items-center'>
          <CheckIcon
            className={`-p-1 rounded-full ${
              task.done
                ? 'bg-green-500 dark:bg-green-400'
                : 'bg-gray-500 dark:bg-gray-400'
            } h-[18px] w-[18px] text-white peer-focus:text-gray-900`}
            aria-label='Mark as done task'
          />
          <span
            className={`${
              task.done ? 'line-through' : ''
            }`}
          >
            {task.title}
          </span>
        </div>
      )}
      <div className='flex p-2 gap-1'>
        <IconButton onClick={() => markAsDone(task.id)} className={`${task.done? 'bg-gray-400 hover:bg-gray-300' : 'bg-green-400 hover:bg-green-300'}`}>
          {task.done ? <ArrowUturnLeftIcon className='h-[18px] w-[18px]' aria-label='Undo task'/> : <CheckIcon className='h-[18px] w-[18px]' aria-label='Mark as done'/> }
        </IconButton>
        <IconButton
          onClick={() => setIsEditing(!isEditing)}
          className={`bg-amber-300 dark:bg-amber-200`}
        >
          <PencilSquareIcon
            className='pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900'
            aria-label='Edit task'
          />
        </IconButton>
        <IconButton
          onClick={() => deleteTask(task.id)}
          className={`bg-red-500 dark:bg-red-400`}
        >
          <TrashIcon
            className='pointer-events-none h-[18px] w-[18px] peer-focus:text-gray-900'
            aria-label='Delete task'
          />
        </IconButton>
      </div>
    </li>
  )
}
