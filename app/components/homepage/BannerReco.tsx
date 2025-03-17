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
    <div className='pb-5 pt-8'>
      <div className="relative font-nunito w-full px-5 py-8 h-96 xl:h-[37.5rem] rounded-xl">
        <Image 
          loading='lazy'
          placeholder='blur'
          blurDataURL='/placeholder.png'
          src={`https://image.tmdb.org/t/p/w1920_and_h1080_bestv2${Drama[0].backdrop_path}`}
          alt="Banner" 
          fill
          className="absolute inset-24 rounded-xl object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/80 rounded-xl"/>

        <div className='absolute xl:top-36 xl:left-24 text-white font-bold flex flex-col gap-2'>
          <div>
            <h1 className='text-xl md:text-[3.125rem] font-mono'>{Drama[0].name}</h1>
            <h1 className='text-red-600'>{genreNames}</h1>
          </div>
          <h1 className='w-full pr-4 sm:pr-0 sm:w-3/4 md:w-2/5 mt-5 text-gray-300 text-xs xl:text-xl'>{Drama[0].overview.substring(0, 450)}- </h1>
        </div>

        <div className='trailer absolute md:right-5 md:bottom-5 xl:right-12 xl:bottom-12 text-white'>
          <div className='hidden md:block relative w-36 h-48 xl:w-48 xl:h-72'>
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
