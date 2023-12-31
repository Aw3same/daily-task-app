import { Middleware, configureStore } from '@reduxjs/toolkit'
import taskReducer from './task/slice'

const persistedLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
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
export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch