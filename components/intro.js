import { Logo, Moon, Sun, Search as SearchIcon } from "./assets"
import { useTheme } from "next-themes"
import Search from "./search"

export default function Intro({data}) {
  const {theme, setTheme} = useTheme()

  return (
    <section className="flex-col flex items-center bg-light dark:bg-darker">
      <Logo className="w-60 mt-8 mb-6 sm:mt-12 sm:mb-0 lg:mt-20 lg:scale-125 fill-dark dark:fill-light"/>
      <nav className="bg-dark w-full">
      <svg className="fill-light dark:fill-darker" data-name="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
      </svg>
      <div className="flex justify-between pt-4 pb-8 px-6">
        <div className="flex">
          <Search data={data}/>
        </div>
        
        <span className="cursor-pointer" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun className="fill-light"/> : <Moon className="fill-light"/>}
        </span>
      </div>
      </nav>
    </section>
  )
}
