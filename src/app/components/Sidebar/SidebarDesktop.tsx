'use client';
import { SidebarProps } from '@/app/interfaces/general';
import React from 'react'


const SidebarDesktop: React.FC<SidebarProps> = ({mobile, pages}) => {
    return (
        <aside className={`border-r border-gray-1 py-10 h-full bg-white w-56 relative drop-shadow-lg ${mobile && "rounded-tr-lg rounded-br-lg"}`}>
            <div className='flex flex-col h-full'>
                <div className='flex justify-center cursor-pointer'>
                    <img src="/assets/images/logo.png" className='h-24 w-30'/>
                </div>
                <div className='mt-14 flex flex-col gap-y-8'>
                    {pages.map((page, index) => {
                        return (
                            <div className="relative cursor-pointer pl-8 pr-4" key={index}>                                                 
                                <p className="text-base">{page.name}</p>     
                            </div >
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}

export default SidebarDesktop;