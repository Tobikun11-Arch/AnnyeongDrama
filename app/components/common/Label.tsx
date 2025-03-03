import React from 'react'

interface labelProps {
    htmlFor: string
    children: React.ReactNode
}

export default function Label({ htmlFor, children }: labelProps) {
    return (
        <label htmlFor={htmlFor} className='font-semibold font-mono text-gray-900'>{children}</label>
    )
}