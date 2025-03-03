import React from 'react'

interface InputProps {
    type: string
    placeholder?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>

}

export default function Input({ type, placeholder, onChange }: InputProps) {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} className='w-full h-10 bg-gray-200 rounded-md p-2 outline-none'/>
    )
}
