import React from 'react'

interface InputError {
    children: React.ReactNode
}

export default function InputError({ children }: InputError) {
    return (
        <p className='text-red-500 h-0 text-sm'>{children}</p>
    )
}
