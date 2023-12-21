import { IconButton } from '@/ui/components/Buttons'
import { TaskState } from '@/store/task/slice'
import {
  ArrowUturnLeftIcon,
  CheckIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid'
import { useTaskActions } from '../hooks/useTaskActions'
import { useRef, useState } from 'react'
import { iconClasses, inputClasses } from '@/ui/styles'

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
    <li className='grid grid-cols-2 items-center' data-testid='task'>
      {isEditing ? (
        <input
          className={inputClasses}
          value={editedTitle}
          onChange={e => {
            setEditedTitle(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            setIsEditing(false)
          }}
          ref={inputEditTitle}
          data-testid='edit-task-input'
        />
      ) : (
        <div className='flex gap-3 items-center'>
          <CheckIcon
            className={`-p-1 rounded-full ${
              task.done
                ? 'bg-green-500 dark:bg-green-400'
                : 'bg-gray-500 dark:bg-gray-400'
            } ${iconClasses}`}
            aria-label='Mark as done task'
          />
          <span className={`${task.done ? 'line-through' : ''}`}>
            {task.title}
          </span>
        </div>
      )}
      <div className='flex p-2 gap-1'>
        <IconButton
          onClick={() => markAsDone(task.id)}
          className={`${
            task.done
              ? 'bg-gray-400 hover:bg-gray-300'
              : 'bg-green-400 hover:bg-green-300'
          }`}
          data-testid='mark-as-done'
        >
          {task.done ? (
            <ArrowUturnLeftIcon
              className={`${iconClasses}`}
              aria-label='Undo task'
            />
          ) : (
            <CheckIcon className={iconClasses} aria-label='Mark as done' />
          )}
        </IconButton>
        <IconButton
          onClick={() => setIsEditing(!isEditing)}
          className={`bg-amber-300 dark:bg-amber-200`}
        >
          <PencilSquareIcon className={iconClasses} aria-label='Edit task' />
        </IconButton>
        <IconButton
          onClick={() => deleteTask(task.id)}
          className={`bg-red-500 dark:bg-red-400`}
          data-testid='edit-task-button'
        >
          <TrashIcon
            className={iconClasses}
            aria-label='Delete task'
            data-testid='delete-task-button'
          />
        </IconButton>
      </div>
    </li>
  )
}
