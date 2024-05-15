'use client';
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Carousel from "@/ui/components/carousel/Carousel";
import Recommendation from "@/ui/components/Recommendation";
import Categorie from "@/ui/components/Categorie";

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
            <button className="flex justify-center items-center text-white bg-black group rounded-full border border-transparent py-3 transition-colors hover:bg-[#e93f21] hover:dark:bg-[#e93f21] mt-5">
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
          <h2 className="text-[#e93f21] text-5xl m-5 font-bold">Share your nature</h2>
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
        {/* Catégorie */}
        <section>
          <Categorie />
        </section>

        {/* Carousel Article  */}
        <section className="p-24">
          <Carousel />
        </section>

        {/* Recommendation */}
        <section className="bg-[#c5ccd7] py-24 px-10">
          <Recommendation />
        </section>

        {/* Carousel Catégorie/Article */}
        <section className="p-24">
          <Carousel />
        </section>




      </main>
    </div >
  );
}
