import Link from 'next/link'
import { Moon, Search, Sun } from './assets'
import { useTheme } from 'next-themes'

export default function Header() {
  const {theme, setTheme} = useTheme()

  return (
    <header className='flex justify-between items-center py-12'>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Assuntos.dev
        </Link>
      </h2>
      <div className='flex '>
        <div className="flex mr-6">
        <input className="dark:text-light mr-4 px-2 bg-light dark:bg-darker focus:outline-none" placeholder="Search..." type="text" />
          <span>
            <Search className="fill-dark dark:fill-light cursor-pointer"/>
          </span>
          
        </div>
        
        <span className="cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="fill-dark dark:fill-light"/> : <Moon className="fill-dark dark:fill-light"/>}
        </span>
      </div>
      
    </header>
    
  )
}
