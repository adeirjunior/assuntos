import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { search } from '../lib/search'

export default function Search({data}) {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);
  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  useEffect(() => search(data, termoPesquisa, setResultados), [termoPesquisa])

  return (
    <div>
      <input
        type="text"
        className='w-44 sm:w-80 outline-none rounded-md px-4 py-1 text-dark dark:text-white'
        value={termoPesquisa}
        onChange={(event) => setTermoPesquisa(event.target.value)}
        placeholder="Pesquisar"
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
      />
      <div className='relative mt-4'>
        <ul className={`max-h-56 overflow-y-scroll scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin absolute transition-opacity rounded-md ${focused ? 'bg-slate-600' : 'opacity-0 bg-none'} top-0 left-0 overflow-hidden`}>
          {resultados.map(({slug, name}, index) => (
          <Link href={`posts/${slug}`}>
            <div className='p-4 hover:bg-slate-400'>
              <li key={index} className='text-light'>{name}</li>
            </div>
          </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
