import React from 'react';
import Slider from "react-slick";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CarouselCat() {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        infinite: true,
    };

    // Définis les informations pour chaque élément de ton carrousel
    const carouselItems = [
        {
            imageSrc: "/assets/velo_2.webp",
            title: "Sac à dos Active, les plus légers et polyvalents"
        },
        {
            imageSrc: "/assets/velo_2.webp",
            title: "Sac à dos Active, les plus légers et polyvalents"
        },
        {
            imageSrc: "/assets/velo_2.webp",
            title: "Sac à dos Active, les plus légers et polyvalents"
        },
        {
            imageSrc: "/assets/velo_2.webp",
            title: "Sac à dos Active, les plus légers et polyvalents"
        },
        // Ajoute d'autres éléments de ton carrousel ici
    ];

    return (
        <div className='px-5'>
            <h2 className='text-[#e93f21] lg:text-4xl text-2xl lg:mb-10 mt-8 font-bold'>
                Des produits polyvalents
                <br />
                pour les longs week-end de mai
            </h2>

            <div className='relative'>
                <div className="slider-container trait">
                    <Slider {...settings}>
                        {/* Utilise une boucle pour générer dynamiquement les éléments de ton carrousel */}
                        {carouselItems.map((item, index) => (
                            <div key={index} className="p-4 box">
                                <div className="child p-2">
                                    <figure className="relative">
                                        <a href="#">
                                            <picture>
                                                <img src={item.imageSrc} title="" alt="" loading="lazy" width="680" height="800" style={{ objectFit: 'contain' }} />
                                            </picture>
                                        </a>
                                    </figure>
                                    <p className="absolute bottom-0 left-0 text-3xl font-semibold m-10">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="lg:mb-32 grid text-center lg:w-full sm:mb-0 lg:grid-cols-4 lg:text-left">
                <button className="flex justify-center items-center text-white bg-black group rounded-full border border-transparent py-3 transition-colors hover:bg-[#e93f21] hover:dark:bg-[#e93f21] mt-5">
                    Découvrir
                    <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none px-2">
                        <ArrowRightIcon className="h-5 w-5" />
                    </span>
                </button>
            </div>
        </div>
    );
}
