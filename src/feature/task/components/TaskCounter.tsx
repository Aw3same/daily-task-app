import { useAppSelector } from '@/lib/hooks/useStore'

export function TaskCounter() {
  const totalTask = useAppSelector(state => state.tasks).length
  const doneTask = useAppSelector(state =>
    state.tasks.filter(task => task.done)
  ).length
  const pendingTask = totalTask - doneTask
  return (
    <div className='flex gap-5 text-black dark:text-white'>
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
      <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-sky-500 text-gray-800 dark:bg-sky-400 dark:text-white font-semibold'>
        {totalTask}
      </span>
    </div>
  )
}

function PendingTaskCounter({ pendingTask }: { pendingTask: number }) {
  return (
    <div className='flex gap-5'>
      <h1 className='text-lg font-semibold'>Pending</h1>
      <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-amber-500 text-gray-800 dark:bg-amber-400 dark:text-white font-semibold'>
        {pendingTask}
      </span>
    </div>
  )
}

function DoneTaskCounter({ doneTask }: { doneTask: number }) {
  return (
    <div className='flex gap-5'>
      <h1 className='text-lg font-semibold'>Completed</h1>
      <span className='flex items-center justify-center px-2 py-1 w-6 h-6  rounded-full bg-green-500 text-gray-800 dark:bg-green-400 dark:text-white font-semibold'>
        {doneTask}
      </span>
    </div>
  )
}
