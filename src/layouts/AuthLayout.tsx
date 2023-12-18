import { useAuth } from '@/lib/hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface Props {
  redirectPath: string
  children?: JSX.Element
}

export const AuthLayout = ({ redirectPath, children }: Props) => {
  const location = useLocation()
  const { isUserLogged } = useAuth()

  return isUserLogged ? (
    children ?? <Outlet />
  ) : (
    <Navigate to={redirectPath} replace state={{ from: location }} />
  )
}
