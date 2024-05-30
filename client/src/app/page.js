'use client';
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Carousel from "@/ui/components/carousel/Carousel";
import Recommendation from "@/ui/components/main/Recommendation";
import Categorie from "@/ui/components/main/Categorie";
import CarouselCat from "@/ui/components/carousel/CarouselCat";
import Article from "@/ui/components/main/Article";
import Banner from "@/ui/components/main/Banner";
import CarouselEng from "@/ui/components/carousel/CarouselEng";
import Gallery from "@/ui/components/main/Gallery";

export default function Home() {
  return (
    <div>
      <div className="bg-image h-64 flex items-center">
        <div className="lg:pt-24 lg:pl-28 sm:ml-8 sm:pt-12 w-2/5">
          <h1 className="lg:text-5xl sm:text-4xl font-bold leading-none text-xl pl-5 pt-5">
            La multi-activité,
            <br />
            au cœur de notre collection
            <br />
            printemps-été 2024
          </h1>

          <div className="lg:mb-32 sm:mb-12 mb-0 pl-5 text-center lg:max-w-5xl lg:w-full  lg:text-left">
            <button className="flex justify-center items-center text-white bg-black group px-2 lg:text-xl lg:px-4 rounded-full border border-transparent sm:py-3 py-1 text-xs transition-colors hover:bg-[#e93f21] hover:dark:bg-[#e93f21] mt-5">
              Nouvelle collection
              <span className="items-center inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none px-2">
                <ArrowRightIcon className="h-5 w-5" />
              </span>
            </button>
          </div>

        </div>
      </div>

      <section className="bg-gray-200">
        <div className="flex flex-col items-center justify-center text-center columns-1 lg:py-32 py-12">
          <h2 className="text-[#e93f21] lg:text-4xl sm:text-4xl lg:m-5 sm:m-2 font-bold text-2xl">Share your nature</h2>
          <p className="lg:text-xl text-[12px] pt-4">
            La nature est notre essentiel.
            <br />
            L’éco-responsabilité a toujours été notre moyen de la protéger.
            <br />
            Bien plus qu’une feuille de route, c’est notre philosophie.
          </p>
        </div>
      </section>

      <main className="lg:mt-24">
        {/* Catégorie */}
        <section>
          <Categorie />
        </section>

        {/* Carousel Article  */}
        <section className="lg:p-10">
          <Carousel />
        </section>

        {/* Recommendation */}
        <section className="bg-[#c5ccd7] lg:py-24 lg:px-10 py-5">
          <Recommendation />
        </section>

        {/* Carousel Catégorie/Article */}
        <section className="lg:p-24 sm:p-12 px-5 mb-5">
          <CarouselCat />
        </section>

        <section className="lg:mt-24 lg:mb-36">
          <Banner />
        </section>

        <section className="lg:p-24 sm:mx-24">
          <Article />
        </section>

        <section className="bg-[#edf0f9] lg:p-24 sm:p-12 px-5 mb-5">
          <CarouselEng />
        </section>

        <section className="lg:py-12">
          <Gallery />
        </section>
      </main>
    </div >
  );
}
