import { HTML, Logo, Search, Sun } from "./assets"
export default function Intro() {
  return (
    <section className="flex-col flex items-center">
      <Logo tailwind="w-60 mt-8 mb-6"/>
      <nav className="bg-dark w-full">
      <svg data-name="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="fill-light"></path>
      </svg>
      <div className="flex justify-between pt-4 pb-8 px-6">
        <Search />
        <Sun />
      </div>
      </nav>
    </section>
  )
}
