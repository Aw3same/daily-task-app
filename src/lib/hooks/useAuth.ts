import { useContext } from 'react'
import { AuthContext } from '@/lib/context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { clearAllCookies, setCookie } from '@/lib/services/cookieService'

export function useAuth() {
  const { token, setToken } = useContext(AuthContext)
  const navigate = useNavigate()

  function signIn(username: string, _password: string) {
    // Replace this with a real sign in request
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        setToken('my-awesome-token')
        setCookie('token', 'my-awesome-token')
        navigate('/task')

        resolve(`¡Welcome, ${username}!`)
      }, 1000)
    })
  }

  function signOut() {
    setToken(null)
    clearAllCookies()
  }

  return {
    signIn,
    signOut,
    // isLoginLoading,
    // hasLoginError,
    isUserLogged: Boolean(token),
  }
}
