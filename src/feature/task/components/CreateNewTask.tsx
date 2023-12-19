import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { useTaskActions } from '../hooks/useTaskActions'

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
    <div className='relative w-56'>
      <input
        className='block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
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
      />
      <PlusCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 ' />
    </div>
  )
}
