'use client'
import React, { useState } from 'react'
import TopRatingBanner from './TopRatingBanner'
import { fetchdata } from '@/app/api/KdramaApi'
import { useSuspenseQuery } from '@tanstack/react-query'
import { TMDBResponse } from '@/app/types/dramaData'
import KdramaList from './KdramaList'
import { totalPages } from '@/app/api/KdramaApi'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BannerReco from './BannerReco'

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);

    const { data } = useSuspenseQuery<TMDBResponse>({
        queryKey: ['Kdrama', currentPage],
        queryFn: ()=> fetchdata(currentPage)
    })

    function paginationImage(action: string) {
        if (action === "previous" && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            return
        } else if(action === "next" && currentPage <  totalPages) {
            setCurrentPage(prev => prev + 1);
        } else if (action === "lastpage") {
            setCurrentPage(totalPages)
        }

        return currentPage
    }

    console.log(data)


    return (
        <main className='pb-5'>
            <TopRatingBanner/>
            
            {/**Airing kdrama ui */}
            <div className='px-4 xl:px-20 py-5'>
                <div className='flex justify-between items-center px-2'>
                    <h1 className='font-mono font-bold text-sm sm:text-2xl'>Airing K-Dramas</h1>
                    <input type="text" name="" id="" className='w-36 sm:w-60 outline-none border p-2 rounded-lg' placeholder='Search kdramas'/>
                </div>
                <KdramaList drama={data} />

                <div className='flex gap-2 mt-3 items-center justify-end'>
                    <button className='py-1 px-2 rounded-lg border' onClick={()=> paginationImage('previous')}><ChevronLeft /></button>
                    {currentPage > 1 && (
                        <p className='py-1 px-2  border' onClick={()=> paginationImage('previous')}>{`${currentPage - 1}`}</p>
                    )}
                    <p className='py-1 px-2 border font-semibold'>{currentPage}</p>
                    {currentPage < totalPages && currentPage > 1 && (
                        <p className='py-1 px-2  border' onClick={()=> paginationImage('lastpage')}>...{totalPages}</p>
                    )}
                    <button className='py-1 px-2 rounded-lg border' onClick={()=> paginationImage('next')}><ChevronRight /></button>
                </div>
            </div>

            <BannerReco/>
        </main>
    )
}
