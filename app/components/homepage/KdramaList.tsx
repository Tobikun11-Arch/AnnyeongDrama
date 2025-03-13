'use client'
import React, { useState } from 'react'
import { TMDBResponse } from '@/app/types/dramaData'
import Image from 'next/image'
import Link from 'next/link'

interface AiringProps {
    drama: TMDBResponse
}

export default function KdramaList({ drama }: AiringProps) {

    return (
        <div className="overflow-x-auto overflow-visible w-full">
            <div className="grid grid-cols-20 xl:grid-cols-10 gap-3 mt-3 min-w-max xl:min-w-full p-2">
                {drama.map((airing, index) => (
                    <Link key={`${airing}-${index}`} href={`/ADramaUser/${airing.id}`} passHref className='mb-5 xl:mb-0 bg-white shadow-md rounded-lg'>
                        <div className='w-full h-72 xl:h-52 relative rounded-lg'>
                            <Image
                                fill
                                loading='lazy'
                                src={`https://image.tmdb.org/t/p/w500${airing.poster_path}`}
                                alt={`${airing.name} poster`}
                                placeholder='blur'
                                blurDataURL='/placeholder.png'
                                className='rounded-t-lg'
                            />
                            <div className="absolute inset-0 hover:bg-black/40 rounded-t-lg" />
                        </div>
                        <div className='pt-2 px-2 pb-4'>
                            <h1 className="text-md font-bold">
                                {airing.name.length > 16 ? `${airing.name.substring(0, 13)}..` : airing.name}
                            </h1>
                            <p className='text-gray-400 font-semibold text-xs'> {new Date(airing.first_air_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            })}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}