import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './task/slice'

const persistedLocalStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action)
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    return result
}

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistedLocalStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch