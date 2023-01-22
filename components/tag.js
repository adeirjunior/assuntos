import Link from 'next/link'
import React from 'react'
import Avatar from './avatar'

function Tag({tagName, author}) {
  return (
    <Link href="#">
        <div className="border-light border-2 px-6 rounded-full py-2 inline-table">
            <h5 className="text-sm font-bold">{tagName}</h5>
        </div>
    </Link>
  )
}

export default Tag