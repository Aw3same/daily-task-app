
import { createContext, ReactNode, useMemo, useState } from 'react'
import { getCookie } from '@/lib/services/cookieService'

type Props = {
  children: ReactNode
}

interface AuthenticationContext {
  token: string | null
  setToken: (token: string | null) => void
}

const initialValue = {
  token: getCookie('token') || null,
  setToken: () => {},
}

const AuthContext = createContext<AuthenticationContext>(initialValue)

const AuthProvider = ({ children }: Props) => {  
  const [token, setToken] = useState<string | null>(initialValue.token)

  const value = useMemo(
    () => ({
      token,
      setToken,
      
    }),
    [token, setToken]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export { AuthContext, AuthProvider }
