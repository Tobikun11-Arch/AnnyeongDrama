import React from 'react'
import { TMDBResponse } from '@/app/types/dramaData' 

export default function NewRelease({ Release }: { Release: TMDBResponse }) {

    const sortedData = [...Release].sort((a, b) => {
        const dateA = a.first_air_date ? new Date(a.first_air_date).getTime() : 0;
        const dateB = b.first_air_date ? new Date(b.first_air_date).getTime() : 0;
    
        return dateB - dateA; // Newest first
    });
    
    console.log(sortedData);
      

    return (
        <div>
           <div>
                <h1 className='text-2xl font-semibold'>New Release</h1>
                <h4>What are your thoughts on this? Share your thoughts with the Community</h4>
           </div>

           <div className='Image components'>
                <h1>Images</h1>
           </div>
        </div>
    )
}