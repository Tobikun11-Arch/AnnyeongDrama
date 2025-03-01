import React from 'react'
import NavList from './NavList'

export default function NavBar() {
    return (
        <nav>
            <ul className='flex gap-10'>
                <NavList>Recommendations</NavList>
                <NavList>Community</NavList>
                <NavList>Weekly Challenge</NavList>
            </ul>
        </nav>
    )
}
