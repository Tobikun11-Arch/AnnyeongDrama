'use client'
import React, { useEffect, useState } from 'react'
import { TMDBResponse } from '@/app/types/dramaData'
import Image from 'next/image'
import Link from 'next/link'

interface AiringProps {
    drama: TMDBResponse
}

export default function KdramaList({ drama }: AiringProps) {
    const [ search, setSearch ] = useState<string>('')
    const [filteredDramas, setFilteredDramas] = useState<TMDBResponse>(drama)

    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const searchResults = drama.filter((airing) =>
                airing.name.toLowerCase().includes(search.toLowerCase())
            )
            setFilteredDramas(searchResults)
        }
    }

    useEffect(()=> {
        if(search.length <= 0) {
            setFilteredDramas(drama)
        }
    }, [search])

    return (
        <>
        <div className='flex justify-between items-center px-2'>
            <h1 className='font-mono font-bold text-sm sm:text-2xl'>Airing K-Dramas</h1>
            <input 
                type="text" 
                name="drama" 
                id="drama" 
                className='w-36 sm:w-64 outline-none border p-2 rounded-lg' 
                placeholder='Search kdramas' 
                onKeyDown={handleSearch}
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setSearch(e.target.value)}
            />
        </div>
        <div className="overflow-x-auto overflow-visible w-full">
            <div className="grid grid-cols-20 xl:grid-cols-10 gap-3 mt-3 min-w-max xl:min-w-full p-2">
            {filteredDramas.length > 0 ? (
                    filteredDramas.map((airing, index) => (
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
                    ))
                    ) : (
                        <p className="text-center text-gray-500 mt-4 col-span-full">No results found.</p>
                    )}
            </div>
        </div>
        </>
    )
}