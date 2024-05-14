'use client'
import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Message() {
    const close = () => {
        const hidden = document.getElementById("hidden");
        if (hidden) {
            hidden.style.display = "none";
        }
    };

    return (
        <div id="hidden" className="relative flex items-center justify-center py-3 px-3 bg-gray-100">
            <div className="font-semibold text-center">
                Notre entrepôt fait peau neuve pour mieux vous servir. Pendant cette période, les livraisons peuvent être légèrement retardées.
            </div>
            <button onClick={close} className="absolute right-0 mr-5">
                <XCircleIcon className="h-6 w-6 text-black hover:text-gray-600" />
            </button>
        </div>
    );
}

