import React from 'react'
import TopRatingBanner from './TopRatingBanner'
import { fetchdata } from '@/app/api/KdramaApi'
import { useSuspenseQuery } from '@tanstack/react-query'
import { TMDBResponse } from '@/app/types/dramaData'
import KdramaList from './KdramaList'



export default function Page() {
    const { isLoading, data } = useSuspenseQuery<TMDBResponse>({
        queryKey: ['Kdrama'],
        queryFn: fetchdata
    })

    if(isLoading) {
        return <h1>Loading</h1>
    }
    
    console.log("Data: ", data)

    return (
        <main>
            <TopRatingBanner/>
            
            <h1>Now Airing K-Dramas</h1>
            <KdramaList drama={data} />

        </main>
    )
}
