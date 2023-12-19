import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


export interface Task {
  title: string
  done: boolean
}

export type TaskId = number

export interface TaskState extends Task {
  id: TaskId
}

const initialState: TaskState[] = [
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

export const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    deleteTaskById: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      return state.filter(task => task.id !== id)
    },

    // addTask: (state, action) => {
    //   state.tasks.push(action.payload)
    // },
    // deleteTask: (state, action) => {
    //   state.tasks = state.tasks.filter(task => task.id !== action.payload)
    // },
    // editTask: (state, action) => {
    //   state.tasks = state.tasks.map(task => {
    //     if (task.id === action.payload.id) {
    //       return {
    //         ...task,
    //         title: action.payload.title,
    //       }
    //     }
    //     return task
    //   })
    // },
  },
})

export default taskSlice.reducer

export const { deleteTaskById } = taskSlice.actions
