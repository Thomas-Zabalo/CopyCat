import React from 'react'
import Link from 'next/link';

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
        <Link
            key={item.name}
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className="text-white hover:text-gray-200"
        >
            {item.name}
        </Link>
    );
});

export default function NavActu() {
    return (
        <div className="lg:flex sm:hidden hidden justify-between bg-[#30302f] px-6 py-2 text-sm font-xs">
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
