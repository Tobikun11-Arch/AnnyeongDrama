import React from 'react'

interface LabelProps {
    htmlFor: string
    type: string
    name: string
    id: string
    placeholder: string
    children: React.ReactNode
}

export default function Label({ htmlFor, type, name, id, placeholder, children }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className="block">
            <p>{children}</p>
            <input
                type={type}
                name={name}
                id={id}
                className="w-full p-2 outline-none rounded-lg border"
                placeholder={placeholder}
            />
        </label>
    )
}