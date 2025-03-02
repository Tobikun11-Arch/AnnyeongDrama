import React from 'react'
import Image from 'next/image'
import { useTabs } from '@/app/state/DynamicTab' 

export default function Logo() {
    const { setTab } = useTabs()

    return (
        <div className='flex gap-1 items-center' onClick={()=> setTab('Home')}>
            <div className='w-12 h-12 overflow-hidden relative rounded-full'>
                <Image
                    fill
                    src={'/placeholder.webp'} 
                    alt='AnnyeongDrama Logo'
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/placeholder.webp'
                />
            </div>
            <h1>AnnyeongDrama</h1>
        </div>
    )
}
