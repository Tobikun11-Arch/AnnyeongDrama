import React from 'react'
import TopRatingBanner from './TopRatingBanner'
import axios from 'axios'
import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
import { TMDBResponse } from '@/app/types/dramaData'
import KdramaList from './KdramaList'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const fetchdata = async() => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18&with_origin_country=KR`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            }
        })
        return response.data.results
    } catch (error) {
        console.error('Error fetching genres:', error);
        return []
    }
}

export default function Page() {
    const { isLoading, data } = useSuspenseQuery<TMDBResponse>({
        queryKey: ['Kdrama'],
        queryFn: fetchdata
    })

    if(isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <main>
            <TopRatingBanner/>
            
            <h1>Now Airing K-Dramas</h1>
            <KdramaList drama={data} />

        </main>
    )
}
