import React from 'react'

interface NavListProps {
    children: React.ReactNode
}

export default function NavList({ children }: NavListProps) {
    return (
        <li className='hover:text-red-600'>{children}</li>
    )
}
