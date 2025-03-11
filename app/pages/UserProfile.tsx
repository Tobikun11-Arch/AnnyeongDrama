"use client"
import React, { useState } from 'react'
import { useUserData } from '../state/UserData'
import Image from 'next/image'
import { PenLine, Play } from 'lucide-react';
import EditProfile from '../components/user-profile/EditProfile';
import Recommendations from '../components/user-profile/Recommendations';
export default function UserProfile() {
    const { userdata } = useUserData()
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false);
    }
    
    function openModal() {
        setIsOpen(true);
    }

    return (
        <main className='p-3 sm:p-4'>
            {userdata.map((user, index)=> (
                <div key={`${user.Username}-${index}`} >
                    <section className='w-full flex flex-col sm:flex-row justify-between lg:px-32 pb-4 text-sm'>

                        <div className='flex gap-2 sm:justify-center'>
                            <div className='relative h-24 w-24 overflow-hidden rounded-full'>
                                <Image
                                    fill
                                    src={`${user.ProfileImg ? user.ProfileImg : '/user_profile_placeholder.jpg'}`}
                                    alt={`${user.Username} Profile`}
                                    loading='lazy'
                                    blurDataURL='/placeholder.png'
                                />
                            </div>
                            <div>
                                <h1 className='font-semibold sm:text-xl'>{user.Username}</h1>
                                <div className='flex items-center'>
                                    <Play size={16} className='mt-0.5'/>
                                    <h4 className='font-semibold text-red-500'>{user.Watching}</h4>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 sm:gap-0 justify-between items-end'>
                            <div className='flex gap-4 font-semibold sm:text-lg'>
                                <h1>{user.Following} following</h1> 
                                <h1>{user.Follower} follower</h1>
                            </div>
                            <button className='border border-gray-300 py-1 sm:py-2 w-24 sm:w-32 hover:bg-blue-600 hover:text-white flex gap-2 items-center text-sm justify-center rounded-lg' onClick={openModal}>
                                <PenLine size={15} className='mt-0.5'/>
                                Edit
                            </button>
                        </div>
                        <EditProfile isOpen={isOpen} closeModal={closeModal}/>

                    </section>
                    <hr />
                    <div className='flex flex-col justify-center items-center mt-5 py-2'>
                        <h1 className='font-italic font-semibold text-2xl mb-1'>About me</h1>
                        <div className='flex items-center gap-1'>
                            <h1 className='text-gray-500 text-sm md:px-36 lg:px-52 text-center'>{user.AboutMe ? user.AboutMe : 'Add a short bio.'}</h1>
                        </div>
                    </div>

                    <h1 className='mt-8 text-2xl font-bold font-mono'>Recommmendations</h1>
                    <Recommendations/>
                </div>
            ))}
        </main>
    )
}
