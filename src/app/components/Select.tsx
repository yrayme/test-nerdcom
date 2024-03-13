import React from 'react'
import { SelectProps } from '../../../interfaces/general';

const Select: React.FC<
    SelectProps & React.InputHTMLAttributes<HTMLInputElement>
>  = ({
    label,
    name,
    options,
    onChange,
    value,
}) => {
    return (
        <div className="flex flex-col gap-y-2.5 relative">
          {label && (
            <label
              htmlFor="location"
              className="block text-sm font-medium text-black mt-0.5">
              {label}
            </label>
          )}
            <div className="relative inline-flex">
                <select
                    autoComplete="off"
                    id={name}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        onChange && onChange(e);
                    }}
                    className="w-full bg-white border border-gray-1 text-black py-3 px-4 focus:outline-none h-12 text-sm placeholder-gray-1 rounded-md"
                >

                    <option value={""} disabled>
                        {""}
                    </option>
                    {options && options.map((item, index) => {
                        return (
                            <option key={index} value={item.name}>
                                {item.name || item.description}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    )
}

export default Select;
