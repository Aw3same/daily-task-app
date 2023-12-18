import App from '@/App'
import { render } from '@testing-library/react'

describe('App', () => {
  it('Render App', () => {
    render(<App />)

    expect(true).toBe(true)
  })
})
