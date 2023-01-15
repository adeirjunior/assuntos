import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'
import { HTML } from './assets'
import { useEffect } from 'react'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category
}) {
  return (
    <section className="mb-16">
      <div className="bg-dark w-full pt-4 pb-12 flex flex-col items-center text-light selection:bg-light selection:text-dark">
        <Link href={`posts/${slug}`}>
          <div className="px-10 max-w-xs group">
            <div className="bg-light w-full h-28 rounded-2xl grid place-content-center">
              <HTML tailwind="group-hover:scale-110 ease-in transition"/>
            </div>
            <div>
            <h2 className="text-2xl font-extrabold my-8">{title}</h2>
            <p>{excerpt}</p>
            </div>
            <Date tailwind="my-6" dateString={date} />
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </Link>
      </div>
      <svg data-name="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="fill-dark"></path>
      </svg>
    </section>
  )
}
