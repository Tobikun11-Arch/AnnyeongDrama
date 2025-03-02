import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    bgColor?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, bgColor, onClick }: ButtonProps) {
    return (
        <button className={`${bgColor} w-20 py-2 flex justify-center items-center hover:text-red-600`} onClick={onClick}>
            {children}
        </button>
    )
}