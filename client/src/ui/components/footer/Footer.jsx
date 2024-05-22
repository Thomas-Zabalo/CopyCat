import React from 'react';
import NewsLetter from './NewsLetter';

export default function Footer() {
    return (
        <div className="bg-white dark:bg-gray-900 mt-80">
            <NewsLetter />
            <div className="mx-auto w-full max-w-screen-xl pt-28">
                <div className="footer-reassurance-6iD">
                    <div className="richContent-root-m-U">
                        <div className="row-contained-Oxp row-root-L38">
                            <div style={{ borderWidth: '1px', borderStyle: 'none', borderRadius: '0px', margin: '0px', padding: '0px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                                <div className="text-root-aN9" role="presentation" style={{ borderWidth: '1px', borderStyle: 'none', borderRadius: '0px', margin: '0px', padding: '0px' }}>
                                    <div>
                                        <a className="reassurance-item" href="https://help.lafuma.com/hc/fr/articles/6795302236829-Modes-de-livraison" target="_blank">
                                            <span className="item-container">
                                                <span className="image-container">
                                                    <img src="" alt="Delivery truck" />
                                                </span>
                                                <span className="flex text-white text-container">
                                                    <span className="text">Livraison standard offerte</span>
                                                    <span className="text">Dès 50€ d’achat</span>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">        
                    </a>
                </div>
            </div>
        </div>
    );
}
