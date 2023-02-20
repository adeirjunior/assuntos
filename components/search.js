import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { search } from '../lib/search'
import { Search as SearchIcon } from './assets';

export default function Search({data}) {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => search(data, termoPesquisa, setResultados), [termoPesquisa])

  return (
    <div>
      <input
        type="text"
        className='w-80 outline-none rounded-md px-4 py-1'
        value={termoPesquisa}
        onChange={(event) => setTermoPesquisa(event.target.value)}
        placeholder="Pesquisar"
      />
      <div className='relative mt-4'>
        <ul className={`absolute transition-opacity rounded-md ${termoPesquisa !== '' ? 'bg-slate-600' : 'opacity-0 bg-none'} top-0 left-0 overflow-hidden`}>
          {resultados.map(({slug, name}, index) => (
          <Link href={`posts/${slug}`}>
            <div className='p-4 hover:bg-slate-400'>
              {termoPesquisa !== '' && <li key={index} className='text-light'>{name}</li>}
            </div>
          </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
