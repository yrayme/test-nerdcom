import React, { useEffect, useState} from "react";
import clsx from "clsx";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import { PaginationProps } from "../../../../interfaces/general";


export const Pagination: React.FC<PaginationProps> = ({
    takeCount,
    total,
    pagActual,
    setPagActual,
}) => {
    const [Pagination, setPagination] = useState<JSX.Element[]>([]);
    useEffect(() => {
        CreatePagination();
    }, [total, pagActual]);

    const CreatePagination = () => {
        const pagination = [];
        const totalPages = Math.floor((Number(total) - 1) / Number(takeCount)) + 1;
        for ( let i = 0; i < totalPages; i++ ) {
            i <= 4 && pagination.push(getPages(i));
        }
        if (totalPages > 4) pagination.push(<div>....</div>);
        if (totalPages > 5) pagination.push(getPages(totalPages - 1));
        setPagination(pagination);
    };

    const getPages = (i: number) => {
        return (
        <div
            key={i}
            className={clsx(
            "px-2 cursor-pointer font-medium text-base flex items-center justify-center",
            pagActual === i
                ? "w-6 h-6 bg-primary rounded text-white "
                : "text-black"
            )}
            onClick={() => setPagActual(i)}
        >
            {i + 1}
        </div>
        )
    }

    const totalPag = Math.floor((Number(total) - 1) / Number(takeCount)) + 1;

    return (
        <div>
            {totalPag >= 1 && (
                <div className="mt-2 flex justify-between items-center">
                    <div className="flex flex-row justify-start p-2 border-none rounded-md gap-x-2">
                        <div
                            className={clsx(
                                {
                                    "cursor-pointer font-bold f-18 text-primary": pagActual > 0,
                                },
                                {
                                    "cursor-default font-bold f-18 text-gray-1": pagActual == 0,
                                },
                                    "flex items-center"
                            )}
                            onClick={() => {
                                if (pagActual > 0) {
                                    setPagActual((prev: number) => prev - 1);
                                }
                            }}
                        >
                            <div
                                className={clsx(
                                    "mr-3 h-5 w-5 ",
                                    {
                                        "cursor-pointer font-bold f-18 text-primary": pagActual > 0,
                                    },
                                    {
                                        "cursor-default font-bold f-18 text-gray-1": pagActual == 1,
                                    }
                                )}
                            >
                                <IoIosArrowBack className="h-5 w-5 transform"/>
                            </div>
                        </div>
                        <div className="flex gap-x-2">{Pagination.map((pag) => pag)}</div>
                        <div
                            className={clsx(
                                {
                                    "cursor-pointer font-bold f-18  text-primary": pagActual < totalPag - 1,
                                },
                                {
                                    "cursor-default font-bold f-18  text-gray-1": pagActual === totalPag - 1,
                                },
                                    "flex items-center"
                            )}
                            onClick={() => {
                                if (pagActual < totalPag - 1) {
                                    setPagActual((prev: number) => prev + 1);
                                }
                            }}
                        >
                            <div
                                className={clsx(
                                    "ml-3 h-5 w-5 ",
                                    {
                                        " text-primary": pagActual < totalPag - 1,
                                    },
                                    {
                                        " text-dark-60": pagActual == totalPag - 1,
                                    }
                                    )}
                            >
                                <IoIosArrowForward name="ArrowDownIcon" className="h-5 w-5 transform"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <p className="text-sm md:text-base text-gray-1">
                            {`Página ${pagActual + 1} de ${totalPag}`}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
