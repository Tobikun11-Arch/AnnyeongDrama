import React from 'react'
import NavList from './NavList'
import { useTabs } from '@/app/state/DynamicTab'

export default function NavBar() {
    const { setTab } = useTabs()

    return (
        <nav>
            <ul className='hidden sm:flex gap-10'>
                <NavList onclick={()=> setTab("Recommendations")}>Recommendations</NavList>
                <NavList onclick={()=> setTab("Community")}>Community</NavList>
                <NavList onclick={()=> setTab("Challenge")}>Weekly Challenge</NavList>
            </ul>
        </nav>
    )
}
