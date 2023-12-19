import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  title: string
  done: boolean
}

export type TaskId = string

export interface TaskState extends Task {
  id: TaskId
}

const DEFAULT_STATE: TaskState[] = []

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
    addNewTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload
      const newTask: TaskState = {
        ...task,
        id: crypto.randomUUID(),
      }
      return [...state, newTask]
    },
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      return state.filter(task => task.id !== id)
    },
  },
})

export default taskSlice.reducer

export const { deleteTaskById, addNewTask } = taskSlice.actions
