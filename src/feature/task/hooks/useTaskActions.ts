import { useAppDispatch } from '@/lib/hooks/useStore'
import { TaskId, deleteTaskById, addNewTask } from '@/store/task/slice'

export function useTaskActions() {
  const dispatch = useAppDispatch()

  const addTask = (title: string) => {
    dispatch(addNewTask({ title, done: false }))
  }

  const deleteTask = (id: TaskId) => {
    dispatch(deleteTaskById(id))
  }

  return { deleteTask, addTask }
}
