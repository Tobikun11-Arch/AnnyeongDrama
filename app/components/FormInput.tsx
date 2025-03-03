import React from 'react'

interface FormInputProps {
    children: React.ReactNode
}

export default function FormInput({ children }: FormInputProps) {
    return (
        <div className='flex flex-col'>
            {children}
        </div>
    )
}
