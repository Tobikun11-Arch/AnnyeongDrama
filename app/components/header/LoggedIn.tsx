import React from 'react'
import Logo from './Logo'
import { Bell } from 'lucide-react';
import Image from 'next/image';
import NavBar from '../nav/NavBar';

export default function LoggedIn() {
    return (
        <div className='flex justify-evenly items-center'>
            <Logo />
            <NavBar/>
            <div className='flex gap-2 items-center'>
                <Bell size={25}/>
                <div className='w-7 h-7 overflow-hidden relative rounded-full'>
                    <Image
                        fill
                        src={'/placeholder.webp'} 
                        alt='AnnyeongDrama Logo'
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL='/placeholder.webp'
                    />
                </div>
            </div>
        </div>
    )
}
