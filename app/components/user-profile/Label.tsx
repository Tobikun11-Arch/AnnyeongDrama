import React from 'react'

interface LabelProps {
    htmlFor: string
    type: string
    name: string
    id: string
    placeholder: string
    children: React.ReactNode
    onchange: React.ChangeEventHandler<HTMLInputElement>
    value: string
}

export default function Label({ htmlFor, type, name, id, placeholder, children, onchange, value }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className="block">
            <p>{children}</p>
            <input
                type={type}
                name={name}
                id={id}
                className="w-full p-2 outline-none rounded-lg border"
                placeholder={placeholder}
                value={value}
                onChange={onchange}
            />
        </label>
    )
}