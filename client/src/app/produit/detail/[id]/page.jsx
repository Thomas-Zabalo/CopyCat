'use client';
import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';

export default function Detail(params) {
  const { id } = useParams()
  const reviews = { href: '#', average: 4, totalCount: 117 };
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    console.log(params)

    const url = 'http://localhost:80/api/produit/' + id;
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
        console.log(dataJSON)
        setProduits(dataJSON);
      })
      .catch(error => {
        console.error('Error fetching produits:', error);
      });
  }

  return (
    <div className="bg-white">
      <h1>Détails du produit {id}</h1>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="/#" className="text-sm underline font-medium text-gray-900">
                  Home
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
                <a href="/produit" className="text-sm underline font-medium text-gray-900">
                  Produit
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a href={produits.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {produits.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className='flex flex-col lg:flex-row'>
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:w-1/2">
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={produits.image}
                alt={produits.image}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* produits info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:w-1/2 lg:pb-24 lg:pt-16">
            <div className="lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{produits.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0">
              <h2 className="sr-only">produits information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{produits.price} €</p>
            </div>

            <div className="py-10 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className='font-bold text-2xl pb-6'>Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{produits.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div >
  );
}