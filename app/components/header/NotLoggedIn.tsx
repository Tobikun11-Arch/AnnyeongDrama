import React from 'react'
import Button from '../common/Button'
import Logo from './Logo'

export default function NotLoggedIn() {
    return (
        <div className='flex justify-between items-center'>
           <Logo />
           <div className='flex gap-2'>
                <Button bgColor=''>
                    Sign in
                </Button>
                <Button bgColor=''>
                    Sign up
                </Button>
           </div>
        </div>
    )
}
