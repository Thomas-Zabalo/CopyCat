import React from 'react'
import { GlobeAltIcon, MapPinIcon, HeartIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import Search from './Search';
import Link from 'next/link';


const navigation = [
  { name: 'Homme', href: '/produit', current: true },
  { name: 'Femme', href: '/produit', current: false },
  { name: 'Enfant', href: '/produit', current: false },
  { name: 'Chaussures', href: '/produit', current: false },
  { name: 'Sacs et équipements', href: '/produit', current: false },
  { name: 'Activités', href: '/produit', current: false },
]

export default function Nav() {
  return (
    <div className="min-h-full flex flex-col justify-center my-5 ms-4">
      <div className="flex h-16 items-center justify-between">

        {/* Menu catégories */}
        <div className="flex items-baseline space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className="text-gray-500 hover:text-gray-600 text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Logo Lafuma */}
        <div className="flex justify-center items-center">
          <Link href="/#">
            <img
              className="h-auto w-auto"
              src="https://www.lafuma.com/logo-4Aj.svg"
              alt="Your Company"
            />
          </Link>
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
          <div className="bg-[#e93f21]  p-10">
            <ShoppingBagIcon className="h-6 w-6 text-white hover:text-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

