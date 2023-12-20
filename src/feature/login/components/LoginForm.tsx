import { Button } from '@/lib/components/Buttons'
import { useAuth } from '@/lib/hooks/useAuth'
import {
  ArrowRightIcon,
  AtSymbolIcon,
  KeyIcon,
} from '@heroicons/react/20/solid'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoginForm() {
  const { signIn, isUserLogged } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isUserLogged) {
      // redirect to home page
      navigate('/task')
    }
   }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    signIn(username, password)
  }

  return (
    <form className='space-y-3 max-w-2xl' onSubmit={handleSubmit}>
      <div className='flex-1 rounded-lg bg-white dark:bg-zinc-700 px-6 pb-4 pt-8'>
        <h1 className='mb-3 text-2xl'>Please log in to continue.</h1>
        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-md font-medium '
              htmlFor='username'
            >
              Username
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='username'
                type='text'
                name='username'
                placeholder='Enter your username'
                required
              />
              <AtSymbolIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-md font-medium text-gray-900  dark:text-white'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500'
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                required
                minLength={6}
              />
              <KeyIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>
        <LoginButton />
      </div>
    </form>
  )
}

function LoginButton() {
  return (
    <Button className='my-8 w-full'>
      Log in <ArrowRightIcon className='ml-auto h-5 w-5 text-gray-50' />
    </Button>
  )
}
