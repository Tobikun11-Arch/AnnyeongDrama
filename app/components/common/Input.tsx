import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    type: string
    placeholder?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, placeholder, onChange, ...rest }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full h-10 bg-gray-200 rounded-md p-2 outline-none"
            {...rest}
        />
    );
});

export default Input;
