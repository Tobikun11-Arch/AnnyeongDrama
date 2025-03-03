import React from 'react'

interface LinkProps {
    href: string
    children: string
}

export default function LinkList({ href, children }:LinkProps) {
    return (
        <a href={href} className='hover:text-blue-600'>{children}</a>
    )
}