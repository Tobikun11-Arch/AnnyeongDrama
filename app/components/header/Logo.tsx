import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTabs } from '@/app/state/DynamicTab' 
import { useUserData } from '@/app/state/UserData'

export default function Logo() {
    const { setTab } = useTabs()
    const { userdata } = useUserData()

    return (
        <div className={`hidden md:flex items-center`} onClick={()=> setTab('Home')}>
            <div className='w-10 h-10 overflow-hidden relative rounded-full'>
                <Image
                    fill
                    src={'/AnnyeongDramaLogo.png'} 
                    alt='AnnyeongDrama Logo'
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/placeholder.png'
                />
            </div>
            <h1 className='hidden md:block'>AnnyeongDrama</h1>
        </div>
    )
}
