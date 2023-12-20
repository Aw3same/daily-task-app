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
    markTaskAsDone: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      return state.map(task => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }
        return task
      })
    },
    editTaskTitle: (state, action: PayloadAction<{ id: TaskId, title: string }>) => {
      const { id, title } = action.payload
      return state.map(task => {
        if (task.id === id) {
          return { ...task, title }
        }
        return task
      })
    },
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      return state.filter(task => task.id !== id)
    },
    resetToDefault: () => {
      return DEFAULT_STATE
    }
  },
})

export default taskSlice.reducer

export const { deleteTaskById, addNewTask, markTaskAsDone, editTaskTitle, resetToDefault } = taskSlice.actions
