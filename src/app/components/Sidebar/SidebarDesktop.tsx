'use client';
import React from 'react'
import { SidebarProps } from '../../../../interfaces/general';


const SidebarDesktop: React.FC<SidebarProps> = ({mobile, pages, setMenu, menu}) => {
    return (
        <aside className={`border-r border-gray-1 py-10 h-full bg-white w-56 relative drop-shadow-lg ${mobile && "rounded-tr-lg rounded-br-lg"}`}>
            <div className='flex flex-col h-full'>
                <div className='flex justify-center cursor-pointer'>
                    <img src="/assets/images/logo.png" className='h-24 w-30'/>
                </div>
                <div className='mt-14 flex flex-col gap-y-8'>
                    {pages.map((page, index) => {
                        return (
                            <div className={`relative cursor-pointer pl-8 pr-4 ${menu.id === page.id && "text-red-600"} `} key={index} onClick={() => setMenu(page)}>                                                 
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