import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";


export default function Carousel() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:80/api/produit';
    getProduit(url);
  }, []);

  function getProduit(url) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(dataJSON => {
        let produit = dataJSON.slice(0, 8);
        setProduits(produit);
      })
      .catch(error => {
        console.error('Error fetching produits:', error);
      });
  }


  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: false,
  };

  return (
    <div className="slider-container p-10">
      <div className='relative'>
        <Slider {...settings}>
          {produits.map((produit) => (
            <Link key={produit.id} href={"produit/detail/" + produit.id} className="group p-5 hover:opacity-75">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={produit.image}
                  alt={produit.name}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <h3 className="mt-4 lg:text-xl sm:text-sm text-gray-700 font-bold">{produit.name}</h3>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
