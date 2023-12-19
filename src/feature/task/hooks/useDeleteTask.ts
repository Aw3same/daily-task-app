import { useAppDispatch } from '@/lib/hooks/useStore'
import { TaskId, deleteTaskById } from '@/store/task/slice'

export function useDeleteTask() {
    const dispatch = useAppDispatch()
    const deleteTask = (id: TaskId) => {
        dispatch(deleteTaskById(id))
    }
    
    return { deleteTask }
}