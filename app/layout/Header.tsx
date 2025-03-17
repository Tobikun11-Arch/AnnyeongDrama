"use client"
import React from 'react'
import LoggedIn from '../components/header/LoggedIn'
import NotLoggedIn from '../components/header/NotLoggedIn'
import { userLoggedIn } from '../state/Auth'

export default function Header() {
    const { isLoggedIn } = userLoggedIn()

    return (
        <header className='bg-gray-900 w-full font-semibold text-white py-2 sticky top-0 z-50'>
           {isLoggedIn ? <LoggedIn/> : <NotLoggedIn/>}
        </header>
    )
}