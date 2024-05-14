'use client'
import { XCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

export default function Message() {
    const close = () => {
        const closeButton = document.getElementsByTagName("close");
        if (closeButton) {
            const hidden = document.getElementById("hidden");
            hidden.style.display = "none";
        }
    };

    return (
        <div id="hidden" className="flex items-center justify-between py-3 px-3 bg-gray-100">
            <div className="font-semibold justify-center">
                Notre entrepôt fait peau neuve pour mieux vous servir. Pendant cette période, les livraisons peuvent être légèrement retardées.
            </div>
            <button onClick={close}>
                <XCircleIcon className="h-6 w-6 text-black hover:text-gray-600 absolute" />
            </button>
        </div>
    );
}
