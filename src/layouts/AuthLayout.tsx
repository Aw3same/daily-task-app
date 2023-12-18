import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface Props {
	redirectPath: string
	children?: JSX.Element
}

export const AuthLayout = ({ redirectPath, children }: Props) => {
	const location = useLocation()
	// const { user } = useUser()

    const user = false

	const isAllowed = Boolean(user)  

	return isAllowed ? (
		children ?? <Outlet />
	) : (
		<Navigate to={redirectPath} replace state={{ from: location }} />
	)
}
