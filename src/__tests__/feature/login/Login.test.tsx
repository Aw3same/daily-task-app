import { renderWithProviders } from '@/__tests__/utils/test-utils'
import App from '@/App'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import * as router from 'react-router-dom'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  return {
    ...((await vi.importActual('react-router-dom')) as any),
    useNavigate: () => mockedUsedNavigate,
  }
})

describe('Login', () => {
  const user = userEvent.setup()

  it('Render Login Form', () => {
    renderWithProviders(<App />)
    const loginForm = screen.getByTestId('login-form')

    expect(loginForm).toBeInTheDocument()
  })
  
  it('Navigate to /task when user is logged', async () => {
    const navigate = vi.spyOn(router, 'useNavigate')

    renderWithProviders(<App />)
    screen.debug()

    const usernameInput = screen.getByTestId('username-input')

    user.type(usernameInput, 'user')

    const passwordInput = screen.getByTestId('password-input')
    user.type(passwordInput, 'password')

    const loginBtn = screen.getByTestId('login-btn')
    user.click(loginBtn)

    const taskPage = screen.findByTestId('task-page')

    waitFor(() => {
      expect(navigate).toHaveBeenCalledTimes(1)
      expect(taskPage).toBeInTheDocument()
    })
  })
})
