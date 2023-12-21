import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { useTaskActions } from '../hooks/useTaskActions'
import { iconInputClass, inputClasses } from '@/ui/styles'

export function CreateNewTask() {
  const [inputValue, setInputValue] = useState('')
  const { addTask } = useTaskActions()

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter' && inputValue !== '') {
      addTask(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className='flex flex-col'>
      <div className='relative w-96'>
        <input
          className={inputClasses}
          id='newTask'
          type='text'
          name='newTask'
          placeholder='What do you want to do?'
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          autoFocus
          data-testid='new-task-input'
        />
        <PlusCircleIcon className={iconInputClass} />
      </div>
      <span className='text-xs ml-2 text-slate-500'>
        Type and press enter to add a new task
      </span>
    </div>
  )
}
