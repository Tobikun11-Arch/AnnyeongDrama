import React from 'react'
import Image from 'next/image'
import { useTabs } from '@/app/state/DynamicTab' 

export default function Logo() {
    const { setTab } = useTabs()

    return (
        <div className='flex gap-1 items-center' onClick={()=> setTab('Home')}>
            <div className='w-10 h-10 overflow-hidden relative rounded-full'>
                <Image
                    fill
                    src={'/placeholder.png'} 
                    alt='AnnyeongDrama Logo'
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/placeholder.png'
                />
            </div>
            <h1 className='hidden sm:block'>AnnyeongDrama</h1>
        </div>
    )
}
