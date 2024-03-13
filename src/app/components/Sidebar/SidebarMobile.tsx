'use client';
import React, { Fragment, useContext, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import SidebarDesktop from './SidebarDesktop';
import { IoMenu } from "react-icons/io5";
import { SidebarProps } from '@/interfaces/general';



const SidebarMobile: React.FC<SidebarProps> = ({ pages }) => {
    const [isShowing, setIsShowing] = useState(false);
    
    return (
        <div className='flex gap-x-5 items-center'>
            <div onClick={() => setIsShowing((isShowing) => !isShowing)}>
                <IoMenu />
            </div>
            <Transition appear show={isShowing} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsShowing(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black opacity-50" />
                    </Transition.Child>
                        
                    <div className="fixed left-0 top-0 h-full w- bg-white z-50 w-48 rounded-tr-lg rounded-br-lg">
                        <Dialog.Panel className="h-screen">
                            <SidebarDesktop pages={pages} mobile/>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
export default SidebarMobile;
