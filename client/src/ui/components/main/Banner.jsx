import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Banner() {
    return (
        <div className='relative'>
            <div className="banner"></div>
            <div className='lg:absolute mx-4 pt-10 lg:pl-20 right-0 bottom-0 lg:w-1/2 bg-white lg:translate-y-1/2 lg:mr-6 sm:p-12 lg:text-banner ' >
                <h2 className='text-[#e93f21] text-4xl mb-10 font-bold'>Limited Emission, une collection upcyclée</h2>
                <p>L’upcycling est un mode de conception alternatif qui fait le choix de matières existantes pour fabriquer de nouveaux produits. Au cœur de notre atelier, à Annecy, nos équipes mettent toute leur expertise au service des aventures outdoor de notre communauté pour réparer vos produits.</p>
                <div className="lg:mb-32 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
                    <button className="flex justify-center items-center text-white bg-black group rounded-full border border-transparent py-3 transition-colors hover:bg-[#e93f21] hover:dark:bg-[#e93f21] mt-5">
                        Decouvrir
                        <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none px-2">
                            <ArrowRightIcon className="h-5 w-5" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
