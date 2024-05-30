'use client'
import React, { useState, useEffect } from 'react'

export default function ProductList() {
    const [produits, setProduits] = useState([]);
    const [menuVisible, setMenuVisible] = useState(false);

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
                setProduits(dataJSON);
            })
            .catch(error => {
                console.error('Error fetching produits:', error);
            });
    }

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='lg:flex'>

            {/* Menu Filtre */}
            <div className="bg-gray-100 p-4 w-1/3 sm:hidden lg:block hidden">
                <h2 className="text-3xl font-bold mt-10 mb-6">Filtres</h2>

                <div className='mb-10'>
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-bold mb-4">Remise</h2>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.7 21.7"><path d="M6.724,0,3.694,3.031l-.663.663L0,6.724l.663.663L3.694,4.357l.663-.663L7.387.663Z" transform="translate(10.85 5.626) rotate(45)" fill="#000"></path></svg>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center font-extralight">
                        <div className="bg-white p-4">
                            <p className="text-lg ">10%</p>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">30%</h3>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">40%</h3>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">50%</h3>
                            <p className="text-gray-800"></p>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-bold mb-4">Genre</h2>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.7 21.7"><path d="M6.724,0,3.694,3.031l-.663.663L0,6.724l.663.663L3.694,4.357l.663-.663L7.387.663Z" transform="translate(10.85 5.626) rotate(45)" fill="#000"></path></svg>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center font-extralight">
                        <div className="bg-white p-4">
                            <p className="text-lg ">Femme</p>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">Homme</h3>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">Enfant</h3>
                            <p className="text-gray-800"></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Burger */}
            <div className="bg-gray-100 p-4 w-1/3 sm:hidden lg:hidden hidden">
                <h2 className="text-3xl font-bold mt-10 mb-6">Filtres</h2>

                <div className='mb-10'>
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-bold mb-4">Remise</h2>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.7 21.7"><path d="M6.724,0,3.694,3.031l-.663.663L0,6.724l.663.663L3.694,4.357l.663-.663L7.387.663Z" transform="translate(10.85 5.626) rotate(45)" fill="#000"></path></svg>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center font-extralight">
                        <div className="bg-white p-4">
                            <p className="text-lg ">10%</p>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">30%</h3>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">40%</h3>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">50%</h3>
                            <p className="text-gray-800"></p>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-bold mb-4">Genre</h2>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21.7 21.7"><path d="M6.724,0,3.694,3.031l-.663.663L0,6.724l.663.663L3.694,4.357l.663-.663L7.387.663Z" transform="translate(10.85 5.626) rotate(45)" fill="#000"></path></svg>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center font-extralight">
                        <div className="bg-white p-4">
                            <p className="text-lg ">Femme</p>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">Homme</h3>
                            <p className="text-gray-800"></p>
                        </div>
                        <div className="bg-white p-4 ">
                            <h3 className="text-lg ">Enfant</h3>
                            <p className="text-gray-800"></p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="bg-white">

                <div className="mx-12 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <nav>
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
                                </div>
                            </li>
                            <li className="text-sm">
                                <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    Produit
                                </a>
                            </li>
                        </ol>
                    </nav>
                    <h2 className="text-4xl m-5 font-bold">Produits</h2>

                    <div className='sticky top-0 '>
                        <button onClick={toggleMenu} className="lg:hidden bg-black my-5 py-[10px] transition-all text-white w-6/12" type="button">
                            <span className="flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 10 13.2"><g id="Group_3" data-name="Group 3" transform="translate(10 0.6) rotate(90)">
                                    <path id="Line_3" data-name="Line 3" d="M12,1.225H0a.6.6,0,0,1-.6-.6.6.6,0,0,1,.6-.6H12a.6.6,0,1,1,0,1.2Z" transform="translate(0 7.5)" fill="#fff">
                                    </path>
                                    <path id="Line_3-2" data-name="Line 3" d="M12,1.225H0a.6.6,0,0,1-.6-.6.6.6,0,0,1,.6-.6H12a.6.6,0,1,1,0,1.2Z" transform="translate(0 1.25)" fill="#fff">
                                    </path>
                                    <ellipse id="Oval" cx="1.875" cy="1.8" rx="1.875" ry="1.8" transform="translate(1.745 10) rotate(-90)" fill="#fff">
                                    </ellipse>
                                    <ellipse id="Oval-2" data-name="Oval" cx="1.875" cy="1.8" rx="1.875" ry="1.8" transform="translate(6.545 3.75) rotate(-90)" fill="#fff">
                                    </ellipse>
                                </g>
                                </svg>
                                <p className='px-2'> Filtrer</p>
                            </span>
                        </button>
                    </div>


                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                        {produits.map((produit) => (
                            <a key={produit.id} href={"produit/detail/" + produit.id} className="group">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={produit.image}
                                        alt={produit.name}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{produit.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{produit.price}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
