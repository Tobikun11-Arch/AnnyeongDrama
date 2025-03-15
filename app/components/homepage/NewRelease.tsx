import React from 'react'
import { TMDBResponse } from '@/app/types/dramaData' 
import Link from 'next/link';
import Image from 'next/image';

export default function NewRelease({ Release }: { Release: TMDBResponse }) {

    const sortedData = [...Release].sort((a, b) => {
        const dateA = a.first_air_date ? new Date(a.first_air_date).getTime() : 0;
        const dateB = b.first_air_date ? new Date(b.first_air_date).getTime() : 0;
    
        return dateB - dateA; // Newest first
    });
    
    const SliceData = sortedData.slice(0,5)
      
//Show the data now in ui like news temp on erasers
    return (
        <div>
           <div>
                <h1 className='text-2xl font-semibold'>New Release</h1>
                <h4>What are your thoughts on this? Share your thoughts with the Community</h4>
           </div>

           <div className="grid md:grid-cols-5 gap-3 mt-3 min-w-max xl:min-w-full p-2">
                {SliceData.map((airing, index) => (
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