import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-image">
        <div className="pt-24 pl-7">
          <h1 className="text-5xl leading-relaxed">
            La multi-activité,
            <br />
            au cœur de notre collection
            <br />
            printemps-été 2024
          </h1>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            <button class="text-white bg-black group rounded-full border border-transparent px-2 py-3 transition-colors hover:bg-orange-600 hover:dark:bg-orange-600 m-5">
              Nouvelle collection
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none px-2">
                -&gt;
              </span>
            </button>


          </div>
        </div>
      </div>

      <main className="">

      </main>
    </div >
  );
}
