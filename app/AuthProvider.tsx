'use client'
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useTabs } from './state/DynamicTab'
import { userLoggedIn } from './state/Auth'

interface ApiResponseData {
    message: string;
    user: string;
}

interface authProps {
    children: React.ReactNode
}

const fetchAuth = async(): Promise<ApiResponseData> => {
    try {
        const response = await axios.get("http://localhost:5000/authenticate/me", { withCredentials: true })
        return response.data
    } catch (error: any) {
        if (error.response && error.response.status === 401 || 403) {
                return { message: 'Unauthorized', user: '' }; 
        }
        console.error("Error: ", error)
        throw new Error("Failed to authenticate")
    }
}

export default function AuthProvider({ children }: authProps) {
    const { setTab } = useTabs()
    const { setLoggedIn } = userLoggedIn()

    const { data, isLoading, error } = useQuery<ApiResponseData>({
        queryKey: ['Verification'],
        queryFn: fetchAuth
    })

    useEffect(() => {
        if (data) {
            if (data.message === 'Unauthorized' || !data.user) {
                setTab("Home");
                setLoggedIn(false);
            } else if (data.message === "You are authorized") {
                setLoggedIn(true);
            }
        }
    }, [data, setTab, setLoggedIn]);

    if(isLoading) return (
        <div className='h-screen flex justify-center items-center bg-white text-black'>
            <h1>Loading...</h1>
        </div>
    )

    if(error) return (
        <div className='h-screen flex justify-center items-center bg-white text-black'>
            <h1>Error to authenticate</h1>
        </div>
    )

    return <>{children}</>
}