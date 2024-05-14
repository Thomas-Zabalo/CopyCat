import React from 'react'
import { GlobeAltIcon, MapPinIcon, HeartIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import Search from '../Search';

const navigation = [
  { name: 'Homme', href: '#', current: true },
  { name: 'Femme', href: '#', current: false },
  { name: 'Enfant', href: '#', current: false },
  { name: 'Chaussures', href: '#', current: false },
  { name: 'Sacs et équipements', href: '#', current: false },
  { name: 'Activités', href: '#', current: false },
]

export default function Nav() {
  return (
    <div className="min-h-full flex flex-col justify-center my-6 ms-4">
      <div className="flex h-16 items-center justify-between">

        {/* Menu catégories */}
        <div className="flex items-baseline space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className="text-black hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Logo Lafuma */}
        <div className="flex justify-center items-center">
          <a href="#">
            <img
              className="h-auto w-auto"
              src="https://www.lafuma.com/logo-4Aj.svg"
              alt="Your Company"
            />
          </a>
        </div>

        {/* Zone de recherche */}
        <div>
          <Search />
        </div>

        {/* Widget site*/}
        <div className="flex items-center space-x-4">
          <GlobeAltIcon className="h-6 w-6 text-black hover:text-gray-600" />
          <MapPinIcon className="h-6 w-6 text-black hover:text-gray-600" />
          <HeartIcon className="h-6 w-6 text-black hover:text-gray-600" />
          <UserIcon className="h-6 w-6 text-black hover:text-gray-600" />
          <div className="bg-orange-600  p-10">
            <ShoppingBagIcon className="h-6 w-6 text-white hover:text-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}