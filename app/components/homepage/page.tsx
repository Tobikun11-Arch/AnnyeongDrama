'use client'
import React, { useState } from 'react'
import TopRatingBanner from './TopRatingBanner'
import { fetchdata } from '@/app/api/KdramaApi'
import { useSuspenseQuery } from '@tanstack/react-query'
import { TMDBResponse } from '@/app/types/dramaData'
import KdramaList from './KdramaList'
import { totalPages } from '@/app/api/KdramaApi'

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);

    const { isLoading, data } = useSuspenseQuery<TMDBResponse>({
        queryKey: ['Kdrama', currentPage],
        queryFn: ()=> fetchdata(currentPage)
    })

    if(isLoading) {
        return <h1>Loading</h1>
    }

    function paginationImage(action: string) {
        if (action === "previous" && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            return
        } else if(action === "next" && currentPage <  totalPages) {
            setCurrentPage(prev => prev + 1);
        }

        return currentPage
    }

    

    return (
        <main>

            <TopRatingBanner/>
            
            <div className='px-52 py-5'>
                <h1 className='font-mono font-semibold text-xl'>Airing K-Dramas</h1>
                <KdramaList drama={data} />

                <div className='flex gap-3 mt-5'>
                    <button onClick={()=> paginationImage('previous')}>Previous</button>
                    <p>{currentPage}</p>
                    <button onClick={()=> paginationImage('next')}>Next</button>
                </div>
            </div>

        </main>
    )
}
