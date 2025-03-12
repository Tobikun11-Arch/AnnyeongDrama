import React from 'react'
import { TMDBResponse } from '@/app/types/dramaData'
import Image from 'next/image'

interface AiringProps {
    drama: TMDBResponse
}

export default function KdramaList({ drama }: AiringProps) {

    return (
        <div className="overflow-x-auto overflow-visible w-full">
            <div className="grid grid-cols-12 xl:grid-cols-6 gap-4 mt-3 min-w-max xl:min-w-full">
                {drama.map((airing, index) => (
                    <div key={`${airing}-${index}`} className='mb-5 xl:mb-0'>
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
        </div>
    )
}