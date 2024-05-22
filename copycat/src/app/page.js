import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Carousel from "@/ui/components/carousel/Carousel";

export default function Home() {
  return (
    <div>
      <div className="bg-image">
        <div className="pt-24 pl-8">
          <h1 className="text-5xl  font-bold leading-none">
            La multi-activité,
            <br />
            au cœur de notre collection
            <br />
            printemps-été 2024
          </h1>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <button className="items-center text-white bg-black group rounded-full border border-transparent py-3 transition-colors hover:bg-orange-600 hover:dark:bg-orange-600 mt-5">
              Nouvelle collection
              <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none px-2">
                <ArrowRightIcon className="h-5 w-5" /> {/* Ajoutez la classe pour spécifier la taille de l'icône */}
              </span>
            </button>
          </div>

        </div>
      </div>

      <section className="bg-gray-200">
        <div className="flex flex-col items-center justify-center text-center columns-1 py-32">
          <h2 className="text-orange-600 text-5xl m-5 font-bold">Share your nature</h2>
          <p className="text-xl">
            La nature est notre essentiel.
            <br />
            L’éco-responsabilité a toujours été notre moyen de la protéger.
            <br />
            Bien plus qu’une feuille de route, c’est notre philosophie.
          </p>
        </div>
      </section>

      <main className="mt-24">
        {/* Image section  */}
        {/* Possibilité composant */}
        <section className="grid grid-cols-3 gap-12">
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

        </section>

        <section className="py-2">
          <Carousel />
        </section>


        <section className="flex gap-1 justify-between bg-blue-100 py-24 px-52">
          <div className="relative flex flex-col justify-end">
            <figure className="relative">
              <a href="#">
                <picture>
                  <img src="/assets/velo_2.webp" title="" alt="" loading="lazy" width="680" height="800" />
                </picture>
              </a>
            </figure>
            <p className="absolute bottom-0 left-0 text-3xl font-semibold m-8">
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
            <p className="text-white absolute bottom-0 left-0 text-3xl font-semibold m-8">
              Dryway :
              <br />confort, légèrete
              <br />et respirabiltié
            </p>
          </div>
        </section>



      </main>
    </div >
  );
}
