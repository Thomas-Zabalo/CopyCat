import React from 'react'

const navigation = [
    { name: 'Outlet', href: '#', current: true },
    { name: 'Nouveautés', href: '#', current: false },
    { name: 'Seconde Main', href: '#', current: false },
    { name: 'Journal', href: '#', current: false },
]
let navLinks = [];

navigation.forEach((item, index) => {
    if (index !== 0) {
        navLinks.push(<span key={index} className="text-white"> | </span>);
    }

    navLinks.push(
        <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className="text-white hover:text-gray-200"
        >
            {item.name}
        </a>
    );
});

export default function NavActu() {
    return (
        <div className="flex justify-between bg-neutral-700 px-6 py-2 text-sm font-xs">
            <div className="flex items-baseline space-x-4">
              {navLinks}
            </div>

            <div>
                <p className='text-white Arial'>
                    Livraison offerte dès 50€ | Retours gratuits en France
                </p>
            </div>
        </div>
    )
}
