import { useAuth } from '../hooks/useAuth'
import { Button } from './Buttons'

export function Navbar() {
  const { isUserLogged, signOut } = useAuth()
  return (
    <header className='sticky top-0 py-3 z-50 right-0 left-0 bg-white border-gray-200 shadow px-2 sm:px-4 rounded dark:bg-zinc-900'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <div>
          <span className='text-3xl font-semibold tracking-wide text-gray-900 dark:text-white'>Daily Task App</span>
        </div>
        {isUserLogged && (
          <Button
            // className='bg-yellow-500 hover:bg-yellow-400'
            onClick={signOut}
          >
            {' '}
            Sign Out
          </Button>
        )}
      </div>
    </header>
  )
}
