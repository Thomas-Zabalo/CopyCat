import React from 'react';
import Slider from "react-slick";

export default function CarouselEng() {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        infinite: true,
    };

    return (
        <div>
            <h2 className='text-black text-4xl mb-10 font-bold'>
                Découvrez nos engagements
                <br />
                pour 2024
            </h2>

            <div className='relative'>
                <div className="slider-container trait">
                    <Slider {...settings}>
                        <div className="p-4 flex flex-col justify-end">
                            <div className="transition-height h-56 p-2 bg-purple-50 w-full">
                                <div className="w-full">Active Size</div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col justify-end">
                            <div className="transition-height h-56 p-2 bg-purple-50 w-full">
                                <div className="w-full">Inactive Size</div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col justify-end">
                            <div className="transition-height h-56 p-2 bg-purple-50 w-full">
                                <div className="w-full">Active Size</div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col justify-end">
                            <div className="transition-height h-56 p-2 bg-purple-50 w-full">
                                <div className="w-full">Inactive Size</div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
