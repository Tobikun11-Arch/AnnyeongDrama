import React from 'react'
import { Ring } from "@uiball/loaders";

export default function AdramaLoading() {
    return (
        <div className='h-screen flex justify-center items-center bg-white text-black'>
             <Ring size={35} lineWeight={5} speed={2} color="blue" />
        </div>
    )
}
