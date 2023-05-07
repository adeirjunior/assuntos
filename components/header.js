import Link from 'next/link'
import { Moon, Sun } from './assets'
import { useTheme } from 'next-themes'
import Search from './search'

export default function Header({ data }) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex justify-between items-center py-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/" className="hover:underline">
          Assuntos.dev
        </Link>
      </h2>
      <div className="flex ">
        <div className="flex mr-6">
          <Search data={data} />
        </div>

        <span
          className="cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <Sun className="fill-dark dark:fill-light" />
          ) : (
            <Moon className="fill-dark dark:fill-light" />
          )}
        </span>
      </div>
    </header>
  )
}
