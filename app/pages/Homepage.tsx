'use client'
import React, { JSX } from 'react'
import Header from '../layout/Header'
import { useTabs } from '../state/DynamicTab'
import SignUp from '../auth/SignUp'
import SignIn from '../auth/SignIn'
import Page from '../components/homepage/page'
import Footer from '../layout/Footer'

export default function Homepage() {
    const { isTab } = useTabs()

    const tabComponents: Record<string, JSX.Element> = {
        'SignUp': <SignUp/>,
        'SignIn': <SignIn/>
    }

    return (
        <div className='flex flex-col min-h-screen bg-white cursor-default'>
            <Header/>
            <main className='flex-grow w-full text-black'>
                {tabComponents[isTab] || <Page />}
            </main>
            <Footer />
        </div>
    )
}