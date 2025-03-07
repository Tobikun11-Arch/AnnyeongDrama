"use client"
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { Bell } from 'lucide-react';
import Image from 'next/image';
import NavBar from '../nav/NavBar';
import { useTabs } from '@/app/state/DynamicTab';
import axios from 'axios';
import { userLoggedIn } from '@/app/state/Auth';
import { Toaster, toast } from "sonner";

export default function LoggedIn() {
    const [ isOpen, setOpen ] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { setTab } = useTabs()
    const { setLoggedIn } = userLoggedIn()

    //For closing the dropdown automatic if user doesn't use it
    useEffect(()=> {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [isOpen])

    //Handle signout
    async function handleSignout() {
        try {
            const response = await axios.post('http://localhost:5000/Signout', {}, { withCredentials: true })
            if(response.status === 200) {
                setTimeout(() => {
                    setLoggedIn(false)
                }, 1000);
                toast.success("Signout successful", {
                    duration: 3000,
                    description: "You have been signed out. See you again soon!", 
                });
                setTab("Home")
            } 
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    return (
        <div className='flex justify-evenly items-center'>
            <Toaster position='top-right'/>
            <Logo />
            <NavBar/>
            <div className='flex gap-2 items-center'>
                <Bell size={25}/>
                <div className='relative' ref={dropdownRef}>
                    <div className='w-7 h-7 overflow-hidden relative rounded-full' onClick={()=> setOpen(!isOpen)}>
                        <Image
                            fill
                            src={'/user_profile_placeholder.jpg'} 
                            alt='user profile'
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL='/placeholder.png'
                        />
                    </div>
                    {isOpen && (
                        <div className='absolute font-medium right-0 top-8 rounded-lg py-2 px-4 bg-white shadow-md text-black w-32 flex flex-col justify-center'>
                            <p className='hover:text-blue-600' onClick={()=> setTab('MyAccount')}>My account</p>
                            <p>Bookmarks</p>
                            <p>Favorites</p>
                            <p onClick={handleSignout}>Sign out</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}