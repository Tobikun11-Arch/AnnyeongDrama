import React from 'react'
import { TMDBResponse } from '@/app/types/dramaData'
import Image from 'next/image'

interface AiringProps {
    drama: TMDBResponse
}

export default function KdramaList({ drama }: AiringProps) {

    return (
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 mt-3'>
            {drama.map((airing, index) => (
                <div key={`${airing}-${index}`}>
                    <div className='w-full h-72 relative'>
                        <Image
                            fill
                            loading='lazy'
                            src={`https://image.tmdb.org/t/p/w500${airing.poster_path}`}
                            alt={`${airing.name} poster`}
                            placeholder='blur'
                            blurDataURL='/placeholder.png'
                        />
                    </div>
                <h1>{airing.name}</h1>   
                </div>
            ))}
        </div>
    )
}