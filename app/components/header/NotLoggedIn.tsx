import React from 'react'
import Button from '../common/Button'
import Logo from './Logo'
import { useTabs } from '@/app/state/DynamicTab'

export default function NotLoggedIn() {
    const { setTab } = useTabs()

    return (
        <div className='flex justify-around items-center'>
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
