import React from 'react'
import Button from '../common/Button'
import Logo from './Logo'
import { useTabs } from '@/app/state/DynamicTab'
import Image from 'next/image'

export default function NotLoggedIn() {
    const { setTab } = useTabs()

    return (
        <div className='flex justify-around items-center'>
             <div className='block md:hidden w-10 h-10 overflow-hidden relative rounded-full'>
                <Image
                    fill
                    src={'/AnnyeongDramaLogo.png'} 
                    alt='AnnyeongDrama Logo'
                    loading='lazy'
                    placeholder='blur'
                    blurDataURL='/placeholder.png'
                />
            </div>
           <Logo />
           <div className='flex gap-2'>
                <Button onClick={()=> setTab('SignIn')}>
                    Sign in
                </Button>
                <Button onClick={()=> setTab('SignUp')}>
                    Sign up
                </Button>
           </div>
        </div>
    )
}
