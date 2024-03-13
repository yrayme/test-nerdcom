import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { ModalTransactionProps } from '../../../interfaces/general';
import { IoClose } from "react-icons/io5";
import Input from './Input';
import Select from './Select';
import { useTransaction } from '../../../hooks/useTransaction';

const ModalTransaction: React.FC<ModalTransactionProps> = ({ open, setOpen, edit, transactions, setTransactions, setDataEdit, articles, setArticles }) => {
    const { inputValue, onChangeInput, status, handleSubmit, setInputValue, typesTransactions } = useTransaction(transactions, setTransactions, setOpen, edit, setDataEdit, articles, setArticles);
    const empty = {
        id: transactions?.items.length + 1,
        description: "",
        type: "",
        article: "",
        date: "",
        amount: "",
        cost: "",
        status: "",
    }
    return (
        <div>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {}}>
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex justify-between items-center'>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-xl font-semibold text-black"
                                        >
                                            {edit ? "Editar Transacción" : "Agregar Transacción"}
                                        </Dialog.Title>
                                        <div onClick={() => {setOpen(false); setInputValue(empty); setDataEdit()}}>
                                            <IoClose className="h-4 w-4 text-black cursor-pointer"/>
                                        </div>
                                    </div>
                                    <hr className='mt-2 mb-4'/>
                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                        <Input
                                            label="Descripción"
                                            id="description"
                                            type='text'
                                            name="description"
                                            value={inputValue.description}
                                            onChange={onChangeInput}
                                        />
                                        <Select
                                            label="Tipo de transacción"
                                            type='text'
                                            name="type"
                                            value={inputValue.type}
                                            onChange={onChangeInput}
                                            options={typesTransactions}
                                        />
                                        <Select
                                            label="Artículo"
                                            type='text'
                                            name="article"
                                            value={inputValue.article}
                                            onChange={onChangeInput}
                                            options={articles.items}
                                        />
                                        <Input
                                            label="Fecha de documento"
                                            id="date"
                                            type='date'
                                            name="date"
                                            value={inputValue.date}
                                            onChange={onChangeInput}
                                        />
                                        <Input
                                            label="Cantidad"
                                            id="amount"
                                            type='number'
                                            name="amount"
                                            value={inputValue.amount}
                                            onChange={onChangeInput}
                                        />
                                        <Input
                                            label="costo"
                                            id="cost"
                                            type='text'
                                            name="cost"
                                            value={inputValue.cost}
                                            onChange={onChangeInput}
                                        />
                                        <Select
                                            label="Estado"
                                            type='text'
                                            name="status"
                                            value={inputValue.status}
                                            onChange={onChangeInput}
                                            options={status}
                                        />
                                    </div>
                                    <div className='flex justify-end mt-4'>
                                        <button className='bg-red-600 p-2 px-4 rounded-md text-white font-medium' onClick={() => handleSubmit()}>
                                            {edit ? "Actualizar" : "Guardar"}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default ModalTransaction;
