import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  title: string
  done: boolean
}

export type TaskId = number

export interface TaskState extends Task {
  id: TaskId
}

const DEFAULT_STATE: TaskState[] = [
  {
    id: 1,
    title: 'Task 1',
    done: false,
  },
  {
    id: 2,
    title: 'Task 2',
    done: true,
  },
  {
    id: 3,
    title: 'Task 3',
    done: false,
  },
]

const initialState: TaskState[] = (() => {
  const persistedState = localStorage.getItem('reduxState')
  if (persistedState) {
    return JSON.parse(persistedState).tasks
  }
  return DEFAULT_STATE
})()

JSON.parse(localStorage.getItem('reduxState') || '[]') || DEFAULT_STATE

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      return state.filter(task => task.id !== id)
    },
  },
})

export default taskSlice.reducer

export const { deleteTaskById } = taskSlice.actions
