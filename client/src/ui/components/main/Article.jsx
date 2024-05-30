import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Article() {
    return (
        <div>
            <div className="flex items-center justify-center text-center">
                <h2 className="text-4xl m-5 font-bold">Nos guides conseils</h2>
            </div>

            <div>
                <div className="mt-6 grid lg:grid-cols-3 gap-x-6 gap-12 sm:grid-cols xl:gap-x-8">
                    <div className="group relative bg-[#f3f3f3] ">
                        <div className="">
                            <img src="https://www.lafuma.com/media/wysiwyg/Lafuma/Guides-conseils/guidemob-sport-outdoor.jpg?auto=webp&format=pjpg&quality=85" title="" alt="" loading="lazy" width="800" height="600" />
                        </div>
                        <div className="flex flex-col mt-4 justify-between p-8">
                            <div>
                                <h3 className="text-black lg:m-2 lg:text-2xl sm:text-xs font-bold">
                                    Nos 8 bonnes raisons de se mettre au sport outdoor
                                </h3>
                                <p className="mt-1 lg:text-lg sm:text-xs">Si vous hésitiez encore à mettre plus de nature dans votre vie, voici 8 bonnes raisons de se mettre au sport outdoor. Nos modes de vie contemporain, souvent sédentaires et axés sur la technologie, ont augmenté nos problèmes de santé. Dans ce contexte, se tourner vers les sports de pleine nature fait partie de la solution. Revitalisante et bénéfique, l’activité physique outdoor offre une myriade d’avantages pour la santé physique et mentale.</p>
                            </div>
                            <button className="mt-3 flex items-center group rounded-full border border-transparent transition-colors hover:text-[#e93f21]">
                                Lire l'article
                                <span className="pl-2 items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    <ArrowRightIcon className="h-5 w-5" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative bg-[#f3f3f3] ">
                        <div className="">
                            <img src="https://www.lafuma.com/media/wysiwyg/Lafuma/Guides-conseils/vignette-reparation.jpg?auto=webp&format=pjpg&quality=85" title="" alt="" loading="lazy" width="800" height="600" />
                        </div>
                        <div className="flex flex-col mt-4 justify-between p-8">
                            <div>
                                <h3 className="text-black m-2 text-2xl font-bold">
                                    Comment faire réparer vos produits Lafuma ?
                                </h3>
                                <p className="mt-1 text-lg">À l’heure du tout-jetable, réparer notre équipement pour le garder aussi longtemps que possible est essentiel. Lafuma propose d'offrir la réparation accessible à tous afin d'allonger la durée de vie de vos produits et réduire notre impact. Découvrez la démarche à suivre pour envoyer un produit à réparer dans nos ateliers.</p>
                            </div>
                            <button className="mt-3 flex group rounded-full border border-transparent transition-colors hover:text-[#e93f21]">
                                Lire l'article
                                <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    <ArrowRightIcon className="h-5 w-5" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative bg-[#f3f3f3] ">
                        <div className="">
                            <img src="https://www.lafuma.com/media/wysiwyg/Lafuma/Guides-conseils/headermob-microaventures.jpg?auto=webp&format=pjpg&quality=85" title="" alt="" loading="lazy" width="800" height="600" />
                        </div>
                        <div className="flex flex-col mt-4 justify-between p-8">
                            <div>
                                <h3 className="text-black m-2 text-2xl font-bold">
                                    3 idées de micro-aventures
                                </h3>
                                <p className="mt-1 text-lg">La micro-aventure a le vent en poulpe. Expérience à vivre à deux pas de chez soi, elle est facile à mettre en place et moins chère qu’un aller-retour à Bali. Votre portefeuille et notre planète s’en porteront mieux, et vous, vous en prendrez quand même plein les mirettes en découvrant les mille et une pépites outdoor autour de chez vous.</p>
                            </div>
                            <button className="mt-3 flex group rounded-full border border-transparent transition-colors hover:text-[#e93f21]">
                                Lire l'article
                                <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    <ArrowRightIcon className="h-5 w-5" />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="my-10 flex items-center justify-center text-center">
                <div className=" grid text-center lg:mb-0 lg:text-left w-72">
                    <button className="flex justify-center items-center text-white bg-black group rounded-full border border-transparent py-3 transition-colors hover:bg-[#e93f21] hover:dark:bg-[#e93f21] mt-5">
                        Voir nos guides conseils
                        <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none px-2">
                            <ArrowRightIcon className="h-5 w-5" />
                        </span>
                    </button>
                </div>
            </div>

        </div>

    )
}
