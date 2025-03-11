import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const fetchdata = async() => {
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
                sort_by: 'first_air_date.desc', 
                with_status: 'Returning Series',
            },
        });

        console.log("response: ", response.data.page)
          
        return response.data.results
    } catch (error) {
        console.error('Error fetching genres:', error);
        return []
    }
}