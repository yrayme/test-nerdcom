import React from 'react'
import { InputProps } from '../../../interfaces/general';

const Input: React.FC<
    InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
        label,
        id,
        type,
        name,
        onChange,
        value,
    }) => {
    return (
        <div className="flex flex-col gap-y-2">
            {label && (
                <div>
                    <label
                        className="text-sm font-medium"
                    >
                        {label}
                    </label>
                </div>
            )}      
            <div className="relative">
                <input 
                    id={id}
                    type={type}
                    name={name}
                    className="px-4 py-3 w-full border border-gray-1 rounded-lg text-sm placeholder:text-sm"
                    autoComplete="off"
                    onChange={(e) => {
                        onChange && onChange(e);
                    }}
                    value={value}
                />
            </div>  
        </div>
    )
}

export default Input;
