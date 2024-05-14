import React from 'react'

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
    <div className="min-h-full flex flex-col justify-center my-4">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center justify-center w-full space-x-4">

          {/* Menu catégories */}
          <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className="text-gray-600 hover:text-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo Lafuma */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://www.lafuma.com/logo-4Aj.svg"
              alt="Your Company"
            />
          </div>

          {/* Zone de recherche */}

          {/* Widget site*/}

        </div>
      </div>
    </div>



  );
}