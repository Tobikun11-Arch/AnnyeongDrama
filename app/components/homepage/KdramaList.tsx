import React from 'react'
import { TMDBResponse } from '@/app/types/dramaData'
import Image from 'next/image'
import { Ellipsis } from 'lucide-react'

interface AiringProps {
    drama: TMDBResponse
}

export default function KdramaList({ drama }: AiringProps) {

    return (
        <div className="overflow-x-auto overflow-visible w-full">
            <div className="grid grid-cols-12 xl:grid-cols-6 gap-4 mt-3 min-w-max xl:min-w-full p-2">
                {drama.map((airing, index) => (
                    <div key={`${airing}-${index}`} className='mb-5 xl:mb-0 bg-white shadow-md rounded-lg'>
                        <div className='w-full h-72 relative rounded-lg'>
                            <Image
                                fill
                                loading='lazy'
                                src={`https://image.tmdb.org/t/p/w500${airing.poster_path}`}
                                alt={`${airing.name} poster`}
                                placeholder='blur'
                                blurDataURL='/placeholder.png'
                                className='rounded-t-lg'
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60 rounded-t-lg" />
                            <Ellipsis className='absolute top-1 right-2' color='white'/>
                        </div>
                        <div className='pt-2 px-2 pb-4'>
                            <h1 className='text-md font-bold '>{airing.name}</h1>   
                            <p className='text-gray-400 font-semibold text-xs'> {new Date(airing.first_air_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}