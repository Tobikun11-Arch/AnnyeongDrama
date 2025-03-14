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
 const genreNames = Drama[2].genre_ids.map(id => genresMap[id]).filter(Boolean).join(", ");

  return (
    <div className='px-4 xl:px-20 mt-5'>
      <div className="relative font-nunito w-full px-5 py-8 h-[700px] rounded-xl">
        <Image 
          src={`https://image.tmdb.org/t/p/original${Drama[2].backdrop_path}`} 
          alt="Banner" 
          fill
          className="absolute inset-24 rounded-xl"
        />
        <div className="absolute inset-0 bg-black/40 rounded-xl" />
          <div className='absolute bottom-4 left-4 text-white'>
            <h1 className='text-3xl font-bold font-mono'>{Drama[2].name}</h1>
            <h1>{Drama[2].overview}</h1>
            <h1>{genreNames}</h1>
          </div>
      </div>  
    </div>
  )
}
