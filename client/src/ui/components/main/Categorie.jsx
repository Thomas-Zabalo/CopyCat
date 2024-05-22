import React from 'react'

export default function Categorie() {
    return (
        <div className='grid grid-cols-3 lg:gap-12 sm:gap-6'>
            <div className="flex flex-col items-center justify-center">
                <figure className="">
                    <a href="#">
                        <picture>
                            <img src="/assets/randonnee.webp" title="" alt="" loading="lazy" width="640" height="800" />
                        </picture>
                    </a>
                </figure>
                <p className="text-3xl font-semibold mt-2">Randonnée</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <figure className="">
                    <a href="#">
                        <picture>
                            <img src="/assets/bivouac.webp" title="" alt="" loading="lazy" width="640" height="800" />
                        </picture>
                    </a>
                </figure>
                <p className="text-3xl font-semibold mt-2">Bivouac</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <figure className="">
                    <a href="#">
                        <picture>
                            <img src="/assets/velo_1.webp" title="" alt="" loading="lazy" width="640" height="800" />
                        </picture>
                    </a>
                </figure>
                <p className="text-3xl font-semibold mt-2">Vélo</p>
            </div>
        </div>
    )
}
