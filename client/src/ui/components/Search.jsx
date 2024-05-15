import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Search() {
    return (
        <label className="relative block">
            <input className="placeholder-italic placeholder-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Rechercher" type="text" name="search" />
            <MagnifyingGlassIcon className="absolute h-3 w-3 text-black top-1/2 transform -translate-y-1/2 left-3" />
        </label>
    )
}