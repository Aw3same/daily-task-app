import { Middleware } from '@reduxjs/toolkit'

const middlewares: Middleware[] = []
const mockStore = configureStore(middlewares)

const initialState = {}
export const store = mockStore(initialState)

export const actions = store.getActions()