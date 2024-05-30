import React from 'react'

export default function NewsLetter() {
    return (
        <div className='relative'>
            <div className='absolute lg:py-20 lg:pl-20 sm:py-10 sm:pl-5 right-0 bottom-0 w-11/12 bg-black translate-y-1/4' >
                <h2 className='text-white text-4xl mb-10 font-bold underline'>Rejoignez la communauté et bénéficiez de 10€ offerts*</h2>
                <p className='text-white'>Inscrivez-vous à la newsletter pour suivre nos actualités et bénéficiez de 10€ offerts sur votre prochaine commande*. Vous recevrez votre offre de bienvenue dans un délai de 24h après votre inscription.</p>
                <div className="lg:mb-10 lg:max-w-5xl lg:w-full sm:mb-10 lg:text-left">
                    <form action="#">
                        <div className="mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white focus:ring-primary-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Saisissez votre e-mail" type="email" id="email" required="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
