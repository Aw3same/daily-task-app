import { AuthContext } from '@/lib/context/AuthContext'
import { useAuth } from '@/lib/hooks/useAuth'
import { render } from '@testing-library/react'
import { vi } from 'vitest'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
	return {
		...((await vi.importActual('react-router-dom')) as any),
		useNavigate: () => mockedUsedNavigate
	}
})
describe('useAuth', () => {
  it('should return an object with "signIn", "signOut", and "isUserLogged" properties', () => {
    const WrapperComponent = () => {
      return (
        <AuthContext.Provider value={{ token: null, setToken: vi.fn() }}>
          <TestComponent />
        </AuthContext.Provider>
      )
    }

    const TestComponent = () => {
      const auth = useAuth()
      expect(auth).toHaveProperty('signIn')
      expect(auth).toHaveProperty('signOut')
      expect(auth).toHaveProperty('isUserLogged')
      return null
    }

    render(<WrapperComponent />)
   })  
})
