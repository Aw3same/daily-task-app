import { useAppSelector } from '@/lib/hooks/useStore'

export function TaskCounter() {
  const tasks = useAppSelector(state => state.tasks)
  const totalTask = tasks.length
  const doneTask = tasks.filter(task => task.done).length
  const pendingTask = totalTask - doneTask
  
  return (
    <div className='flex gap-5 text-black dark:text-white' data-testid='task-counter'>
      <TotalTaskCounter totalTask={totalTask} />
      <PendingTaskCounter pendingTask={pendingTask} />
      <DoneTaskCounter doneTask={doneTask} />
    </div>
  )
}

function TotalTaskCounter({ totalTask }: { totalTask: number }) {
  return (
    <div className='flex gap-5'>
      <h1 className='text-lg font-semibold'>Total Tasks</h1>
      <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-sky-500 text-gray-800 dark:bg-sky-400 dark:text-white font-semibold' data-testid='total-tasks'>
        {totalTask}
      </span>
    </div>
  )
}

function PendingTaskCounter({ pendingTask }: { pendingTask: number }) {
  return (
    <div className='flex gap-5'>
      <h1 className='text-lg font-semibold'>Pending</h1>
      <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-amber-500 text-gray-800 dark:bg-amber-400 dark:text-white font-semibold' data-testid='pending-tasks'>
        {pendingTask}
      </span>
    </div>
  )
}

function DoneTaskCounter({ doneTask }: { doneTask: number }) {
  return (
    <div className='flex gap-5'>
      <h1 className='text-lg font-semibold'>Completed</h1>
      <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-green-500 text-gray-800 dark:bg-green-400 dark:text-white font-semibold' data-testid='done-tasks'>
        {doneTask}
      </span>
    </div>
  )
}
