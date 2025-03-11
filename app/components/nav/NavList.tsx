import React from 'react'

interface NavListProps {
    children: React.ReactNode
    onclick: ()=> void
}

export default function NavList({ children, onclick }: NavListProps) {
    return (
        <li className='hover:text-red-600' onClick={onclick}>{children}</li>
    )
}
