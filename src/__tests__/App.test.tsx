import App from '@/App'
import { screen } from '@testing-library/react'
import { renderWithProviders } from './utils/test-utils'

describe('App', () => {
  it('Render App title on Navbar', () => {
    renderWithProviders(<App />)

    const appTitle = screen.getByText(/Daily Task App/i)

    expect(appTitle).toBeInTheDocument()
  })

  it('Render Login Form', () => {
    renderWithProviders(<App />)

    const loginForm = screen.getByTestId('login-form')

    expect(loginForm).toBeInTheDocument()
  })
})
