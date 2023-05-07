import Avatar from '../components/avatar'
import Date from '../components/date'
import PostTitle from '../components/post-title'
import Image from 'next/image'
import { urlForImage } from '../lib/sanity'

export default function PostHeader({ title, category: source, date, author }) {
  const src = source?.picture?.asset?._ref
  const image = src ? (
    <Image
      className="w-auto group-hover:scale-110 h-full left-1/2 -translate-x-1/2 transition-all"
      alt={`Cover Image for ${title}`}
      src={urlForImage(src).url()}
      sizes="100vw"
      fill="contain"
    />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="my-8 md:mb-16 sm:mx-0 relative w-full h-96">{image}</div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6 md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  )
}
