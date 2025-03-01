import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    bgColor: string
}

export default function Button({ children, bgColor }: ButtonProps) {
    return (
        <button className={`${bgColor} w-20 py-2 flex justify-center items-center hover:text-red-600`}>
            {children}
        </button>
    )
}