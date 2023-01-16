import Image from 'next/image'
import React, {useState} from 'react'
import { urlForImage } from '../lib/sanity'
import Link from 'next/link'

function PostCard({
    title, 
    category: source, 
    excerpt,
    slug
}) {
    const [state, setState] = useState(false)
    const src = source?.picture?.asset?._ref
    const image = src ? (
        <Image
          className="w-14 group-hover:scale-110 h-auto transition-all"
          width={2000}
          height={1000}
          alt={`Cover Image for ${title}`}
          src={urlForImage(src).url()}
          sizes="100vw"
        />
    ) : (
      <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
    )
    const handleClick = () => {
        setState(!state)
    }
  return (
    <div className="w-60 relative bg-light dark:bg-dark group m-auto transition-all h-80 border-4 rounded-3xl overflow-hidden border-dark dark:border-dark">
        <Link href={`/posts/${slug}`}>
            <div className="text-dark dark:text-light cursor-pointer">
                <div className="grid place-content-center group-hover:scale-105 py-6">
                    {image}
                </div>
                <div className="px-6">
                    <h2 className='text-lg my-2 font-bold'>{title}</h2>
                    <p className='text-xs'>{excerpt}</p>
                </div>
            </div>
        </Link>
        
        <div style={{clipPath: `circle(${state === true ? '150%' : '35%' } at -4% -4%)`}} className="bg-dark dark:bg-darker text-light absolute transition-all top-0 left-0 w-full h-full">
            <span onClick={() => handleClick()} className="font-bold cursor-pointer  text-2xl absolute px-6 py-4">i</span>
            <h3 className="text-2xl font-semibold text-center py-4">Tags</h3>
        </div>
    </div>
  )
}

export default PostCard