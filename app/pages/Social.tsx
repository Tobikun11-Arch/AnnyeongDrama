"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { IUser } from '../types/userData'
import { SubProfile } from '../components/custom/SubProfile';

export interface ApiResponseData {
    message: string;
    user: IUser[];
}

export default function Social() {
    const [ search, setSearch ] = useState<string>('')
    const [ searchError, setError ] = useState<string | null>(null)
    const [ isUser, setUser ] = useState<ApiResponseData | null>(null)

    //search user function
    const handleSearchUser = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && search.trim()) {
            try {
                const response = await axios.get(`http://localhost:5000/api/visit?username=${search}`, {
                    withCredentials: true
                })
                setError(null)
                console.log(response.data)
                setUser(response.data)
            } catch (error: any) {
                if(error.response && error.response.status === 404) {
                    setError("User not found")
                } else {
                    console.error("Error searching user ", error)
                    setError("An error occurred. Please try again.")
                }   
            }
        }
    }
    
    return (
        <main className='p-4'>
            <input 
                type="text" 
                placeholder='connect with friends' 
                value={search} 
                onChange={(e)=> setSearch(e.target.value)} 
                className='border outline-none px-2 py-1 w-48'
                onKeyDown={handleSearchUser}
            />
            <p>{searchError}</p>
            
           <SubProfile 
                user={isUser} 
           />
        </main>
    )
}
