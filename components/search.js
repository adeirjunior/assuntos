import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { search } from '../lib/search'
import DropdownPortal from './dropdown-portal'

export default function Search({ data }) {
  const [termoPesquisa, setTermoPesquisa] = useState('')
  const [resultados, setResultados] = useState([])
  const [focused, setFocused] = useState(false)
  const [mouseOver, setMouseOver] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(mouseOver)
  const onMouseEnter = () => setMouseOver(true)
  const onMouseLeave = () => setMouseOver(false)

  useEffect(() => search(data, termoPesquisa, setResultados), [termoPesquisa])

  return (
    <div>
      <input
        type="text"
        className="w-44 sm:w-80 outline-none rounded-md px-4 py-1 text-dark dark:text-white"
        value={termoPesquisa}
        onChange={(event) => setTermoPesquisa(event.target.value)}
        placeholder="Pesquisar"
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
      />
      <div className="relative mt-4">
        <ul
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={() => onMouseLeave()}
          className={`overflow-y-scroll scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin absolute transition-opacity rounded-md ${
            focused ? 'bg-slate-600' : 'opacity-0 bg-none'
          } top-0 left-0 overflow-hidden`}
        >
          {focused && (
            <>
              {resultados.slice(0, 6).map(({ slug, name }, index) => (
                <Link key={index} href={`/posts/${slug}`}>
                  <div
                    onClick={() => setFocused(false)}
                    className="p-4 hover:bg-slate-400 "
                  >
                    <li className="text-light">{name}</li>
                  </div>
                </Link>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  )
}
