import React from 'react'

export default function Recommendation() {
    return (
        <div class="grid lg:gap-12 sm:gap-6 lg:grid-cols-2 gap-6">
            <div className="relative flex flex-col justify-end">
                <figure className="relative">
                    <a href="#">
                        <picture>
                            <img src="/assets/velo_2.webp" title="" alt="" loading="lazy" width="680" height="800" />
                        </picture>
                    </a>
                </figure>
                <p className="absolute bottom-0 left-0 lg:text-3xl sm:text-sm font-semibold lg:m-10 m-4">
                    Sac à dos Active,
                    <br />les plus légers
                    <br />et polyvalents
                </p>
            </div>
            <div className="relative flex flex-col justify-end">
                <figure className="relative">
                    <a href="#">
                        <picture>
                            <img src="/assets/velo_3.webp" title="" alt="" loading="lazy" width="680" height="800" />
                        </picture>
                    </a>
                </figure>
                <p className="text-white absolute bottom-0 left-0 lg:text-3xl sm:text-sm font-semibold lg:m-10 m-4">
                    Dryway :
                    <br />confort, légèrete
                    <br />et respirabiltié
                </p>
            </div>
        </div>
    )
}
