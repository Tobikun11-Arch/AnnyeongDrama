import axios from "axios";

export let totalPages = 0
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const fetchdata = async(page: number) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
            params: {
                api_key: API_KEY,
                language: 'en-US', 
                with_origin_country: 'KR',
                with_status: 'Returning Series',
                "first_air_date.gte": "2025-01-01",
                "first_air_date.lte": "2025-12-31",
                vote_count_gte: 10, 
                page: page
            },
        });

        let filteredResults = response.data.results.filter(
            (drama: { poster_path: string | null; name: string }) =>
                drama.poster_path
        );

        totalPages = response.data.total_pages
          
        return filteredResults
    } catch (error) {
        console.error('Error fetching genres:', error);
        return []
    }
}


export const fetchPopular = async() => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/tv`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`,
            },
            params: {
                api_key: API_KEY,
                language: 'en-US', 
                with_origin_country: 'KR',
                with_status: 'Returning Series',
                "first_air_date.gte": "2025-01-01",
                "first_air_date.lte": "2025-12-31",
                vote_count_gte: 10, 
            },
        });

        let filteredResults = response.data.results.filter(
            (drama: { poster_path: string | null; name: string }) =>
                drama.poster_path
        );
          
        return filteredResults
    } catch (error) {
        console.error('Error fetching genres:', error);
        return []
    }
}