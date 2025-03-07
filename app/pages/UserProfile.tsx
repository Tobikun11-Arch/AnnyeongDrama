import React from 'react'
import { useUserData } from '../state/UserData'
import Image from 'next/image'
import { PenLine } from 'lucide-react';

export default function UserProfile() {
    const { userdata } = useUserData()

    return (
        <main className='p-6'>
            {userdata.map((user, index)=> (
                <div key={`${user.Username}-${index}`} >
                    <section className='w-full flex justify-between'>
                        <div className='flex gap-2 justify-center'>
                            <div className='relative h-24 w-24 overflow-hidden rounded-full'>
                                <Image
                                    fill
                                    src={'/placeholder.png'}
                                    alt={`${user.Username} Profile`}
                                    loading='lazy'
                                    blurDataURL='/placeholder.png'
                                />
                            </div>
                            <div>
                            <h1>{user.Username}</h1>
                            <h4 className=''>Watching: {user.Watching ? user.Watching : 'Add title'}</h4>
                            </div>
                        </div>

                        <div className='flex flex-col justify-between items-end'>
                            <div className='flex gap-2'>
                                <h1>{user.Following} following</h1> 
                                <h1>{user.Follower} follower</h1>
                            </div>
                            <button className='border border-gray-300 py-1 w-32'>Edit</button>
                        </div>
                    </section>
                    
                    <div className='flex flex-col justify-center items-center mt-10 py-2'>
                        <h1 className='font-italic font-semibold text-2xl mb-2'>About me</h1>
                        {user.AboutMe ? (
                            <h1 className='text-gray-500 text-lg'>{user.AboutMe}</h1>
                        ) : (
                            <div className='flex items-center gap-1'>
                                <h1 className='text-gray-500 text-lg'>Add a short bio.</h1>
                                <PenLine size={15} className='mt-1'/>
                            </div>
                        )}
                    </div>

                    <h1 className='mt-5 text-2xl font-bold font-mono'>Recommmendations</h1>
                    <div>

                    </div>
                </div>
            ))}
        </main>
    )
}
