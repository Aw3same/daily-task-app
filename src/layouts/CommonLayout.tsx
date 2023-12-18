import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const CommonLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-1 min-h-max p-8 bg-slate-100 dark:bg-neutral-800'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
