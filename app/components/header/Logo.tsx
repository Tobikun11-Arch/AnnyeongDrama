import React from 'react'
import Image from 'next/image'
 
export default function Logo() {
    return (
        <div className='flex gap-1 items-center'>
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
