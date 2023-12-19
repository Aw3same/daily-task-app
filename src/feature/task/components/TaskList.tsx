import { useAppSelector } from '@/lib/hooks/useStore'
import { Task } from './Task'

export function TaskList() {
  const tasks = useAppSelector(state => state.tasks)

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}
