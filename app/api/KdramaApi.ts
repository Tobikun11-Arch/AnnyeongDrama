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
        const filteredResults = response.data.results.filter(
            (drama: { poster_path: any; }) => drama.poster_path
        );
        
        const limitedResults = filteredResults.slice(0, 12);
        totalPages = response.data.total_pages
          
        return limitedResults
    } catch (error) {
        console.error('Error fetching genres:', error);
        return []
    }
}