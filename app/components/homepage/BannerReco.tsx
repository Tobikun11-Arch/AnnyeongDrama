import Image from 'next/image'
import React from 'react'
import { TMDBResponse } from '@/app/types/dramaData'

interface BannerProps {
  Drama: TMDBResponse
}

const genresMap: Record<number, string> = {
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western"
};

export default function BannerReco({ Drama }: BannerProps) {
 const genreNames = Drama[0].genre_ids.map(id => genresMap[id]).filter(Boolean).join(", ");

  return (
    <div className='py-5'>
      <div className="relative font-nunito w-full px-5 py-8 h-[37.5rem] rounded-xl">
        <Image 
          loading='lazy'
          placeholder='blur'
          blurDataURL='/placeholder.png'
          src={`https://image.tmdb.org/t/p/original${Drama[0].backdrop_path}`} 
          alt="Banner" 
          fill
          className="absolute inset-24 rounded-xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-xl"/>

        <div className='absolute bottom-36 left-24 text-white font-bold flex flex-col gap-2'>
          <div>
            <h1 className='text-[3.125rem] font-mono'>{Drama[0].name}</h1>
            <h1 className='text-red-600'>{genreNames}</h1>
          </div>
          <h1 className='w-2/5 mt-5 text-gray-300'>{Drama[0].overview}</h1>
        </div>

        <div className='trailer absolute right-12 bottom-20 text-white'>
          <div className='relative w-48 h-72'>
            <Image 
              loading='lazy'
              placeholder='blur'
              blurDataURL='/placeholder.png'
              src={`https://image.tmdb.org/t/p/original${Drama[0].poster_path}`} 
              alt="Banner" 
              fill
              className="absolute inset-24"
            />
          </div>
        </div>

      </div>
    </div>  
  )
}
