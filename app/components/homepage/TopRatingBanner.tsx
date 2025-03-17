import Image from 'next/image'
import React from 'react'

export default function TopRatingBanner() {
    return (
        <div className='w-full mt-3 font-bold font-mono text-white h-48 bg-gray-900 flex flex-col justify-center pl-10'>
            <h1 className='text-xl md:text-4xl'>AnnyeongDrama</h1>
            <h4 className='text-gray-300 text-sm'>Stay updated with the latest K-Dramas.</h4>
        </div>
    )
}
