import React from 'react'
import NavBar from '../nav/NavBar'
import { X } from 'lucide-react'
import { useMenu } from '@/app/state/Menu'

export default function MenuList() {
    const { setMenu } = useMenu()

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
            <X className='top-4 right-4 absolute' color='black' onClick={()=> setMenu(false)}/>
            <div className="flex flex-col items-center">
                <nav className='text-black'>
                    <NavBar/>
                </nav>
            </div>
        </div>
    )
}
