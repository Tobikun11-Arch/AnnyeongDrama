import React, { useEffect } from 'react'
import TopRatingBanner from './TopRatingBanner'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

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
    }
}

export default function Page() {
    const { data } = useQuery({
        queryKey: ['Kdrama'],
        queryFn: fetchdata
    })

    console.log("data: ", data)

    return (
        <div>
            <TopRatingBanner/>
            <button className='bg-black text-white flex justify-center items-center' onClick={fetchdata}>Test data</button>
        </div>
    )
}
