import { useAppDispatch } from '@/lib/hooks/useStore'
import { TaskId, deleteTaskById, addNewTask, markTaskAsDone, editTaskTitle, resetToDefault } from '@/store/task/slice'

export function useTaskActions() {
  const dispatch = useAppDispatch()

  const addTask = (title: string) => {
    dispatch(addNewTask({ title, done: false }))
  }
  const editTask = (id: TaskId, title: string) => {
    dispatch(editTaskTitle({ id, title }))
  }

  const markAsDone = (id: TaskId) => {
    dispatch(markTaskAsDone(id))
  }

  const deleteTask = (id: TaskId) => {
    dispatch(deleteTaskById(id))
  }

  const emptyTasks = () => {
    dispatch(resetToDefault())
  }

  return { deleteTask, addTask, markAsDone, editTask, emptyTasks }
}
