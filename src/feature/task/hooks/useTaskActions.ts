import { useAppDispatch } from '@/lib/hooks/useStore'
import { TaskId, deleteTaskById, addNewTask, markTaskAsDone } from '@/store/task/slice'

export function useTaskActions() {
  const dispatch = useAppDispatch()

  const addTask = (title: string) => {
    dispatch(addNewTask({ title, done: false }))
  }

  const markAsDone = (id: TaskId) => {
    dispatch(markTaskAsDone(id))
  }

  const deleteTask = (id: TaskId) => {
    dispatch(deleteTaskById(id))
  }

  return { deleteTask, addTask, markAsDone }
}
