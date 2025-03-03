"use client"
import React from 'react'
import LoggedIn from '../components/header/LoggedIn'
import NotLoggedIn from '../components/header/NotLoggedIn'
import { userLoggedIn } from '../state/Auth'

export default function Header() {
    const { isLoggedIn } = userLoggedIn()

    return (
        <header className='bg-gray-900 w-full font-semibold text-white px-4 md:px-24 py-2'>
           {isLoggedIn ? <LoggedIn/> : <NotLoggedIn/>}
        </header>
    )
}