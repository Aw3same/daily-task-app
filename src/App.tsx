import './App.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { CommonLayout } from '@/layouts/CommonLayout'
import { AuthLayout } from '@/layouts/AuthLayout'
import { LoginPage } from '@/feature/login/pages/LoginPage'


function App() {
  const router = createBrowserRouter([
		{
			element: <CommonLayout />,
			children: [
				{
					path: 'login',
					element: <LoginPage />
				},				
				{
					path: 'task',
					element: <AuthLayout redirectPath='/login' />,
					children: [
						{
							index: true,
							element: <p>Task page</p>,
						},

					]
				},			
				{
					path: '*',
					element: <Navigate to='/task' replace />
				}
			]
		}
	])
	return <RouterProvider router={router} />

}

export default App
