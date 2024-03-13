'use client';
import { TableProps } from '@/app/interfaces/general';
import React from 'react'
import { AiOutlineDelete, AiOutlineEdit  } from "react-icons/ai";


const Table: React.FC<TableProps> = ({ name, body, pagActual, setPagActual, getDelete, getEdit, takeCount }) => {
    
    return (
        <div className=''>
            <div className={`drop-shadow-lg rounded-xl`}>
                <div className='overflow-x-auto rounded-xl'>
                    <table className='min-w-full divide-y border table-auto p-20'>
                        <thead className='bg-primary-light border border-primary-light'>
                            <tr className='border'>
                                {columns[name].map((col: any, index: number) => {
                                    return (
                                        <th key={index} className='py-2 font-semibold border sm:text-base text-sm px-4'>{col.name}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            { body && body?.items.length > 0 ? ( 
                                body?.items.map((row: any, rowIndex: number) => {
                                        return (
                                            <tr key={rowIndex} className={`py-2 border`}>
                                                {columns[name].map((column: any) => {
                                                    const value = row[column.id];
                                                    return (
                                                        column.id === "actions" && value ? (
                                                            <td className='flex gap-3 items-center justify-center py-3' key={column.id}>
                                                                <div className='cursor-pointer' onClick={() => getEdit(row)}>
                                                                    <AiOutlineDelete className='h-4 w-4 text-red-700'/>
                                                                </div>
                                                                <div className='cursor-pointer' onClick={() => getDelete(row)}>
                                                                    <AiOutlineEdit  className='h-4 w-4 text-blue-500'/>
                                                                </div>
                                                            </td>
                                                        ) : (
                                                            <td key={column.id} className={`text-start py-3 text-sm border px-4`} >{value}</td>
                                                        )
                                                    )
                                                })}
                                            </tr>                                        
                                        )
                                    })
                            ) : (
                                <tr className="h-96 text-center">
                                <td colSpan={columns[name].length} className="text-lg">
                                    <p className="text-gray-400">
                                        Data no encontrada
                                    </p>
                                </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex justify-end'>
                <Pagination
                    takeCount={takeCount}
                    total={body?.total}
                    pagActual={pagActual}
                    setPagActual={setPagActual}
                />
            </div>            
        </div>
    )
}

export default Table;
