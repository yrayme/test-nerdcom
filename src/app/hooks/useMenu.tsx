import { useState } from "react"
import { Articles, Pages, ArticlesTableProps, Transactions, TransactionsTableProps, TypesTransactions } from "@/interfaces/general";

export const useMenu = () => {
    const [menu, setMenu] = useState<Pages>();
    const [pagActual, setPagActual] = useState<number>(0);  
    const takeCount: number = 10;

    const [dataArticles, setDataArticles] = useState<Articles[]>([
        {
            id: 1,
            description: "Cuadernos",
            dateStart: new Date(),
            dateEnd: new Date(),
            amount: 20,
            cost: "1$",
            status: "Disponible"
        },
        {
            id: 2,
            description: "Marcadores",
            dateStart: new Date(),
            dateEnd: new Date(),
            amount: 30,
            cost: "5$",
            status: "Disponible"
        },
        {
            id: 3,
            description: "Audifonos",
            dateStart: new Date(),
            dateEnd: new Date(),
            amount: 50,
            cost: "20$",
            status: "Disponible"
        },
    ])
    let [typesTransactions] = useState<TypesTransactions[]>([
        {
            id: 1,
            name: "Comercial",
        },
        {
            id: 2,
            name: "Financiera"
        }
    ]);

    let [articles, setArticles] = useState<ArticlesTableProps>({ items: dataArticles, total: 3 });
    const [dataATransactions, setDataTransactions] = useState<Transactions[]>([
        {
            id: 1,
            description: "Cuadernos",
            type: {
                id: 1,
                name: "Comercial"
            },
            article: {
                id: 1,
                name: "Cuadernos"
            },
            date: new Date(),
            amount: 20,
            cost: "1$",
            status: "Disponible"
        },
        {
            id: 2,
            description: "Marcadores",
            type: {
                id: 1,
                name: "Comercial"
            },
            article: {
                id: 1,
                name: "Cuadernos"
            },
            date: new Date(),
            amount: 30,
            cost: "5$",
            status: "Disponible"
        },
        {
            id: 3,
            description: "Audifonos",
            type: {
                id: 1,
                name: "Comercial"
            },
            article: {
                id: 1,
                name: "Cuadernos"
            },
            date: new Date(),
            amount: 50,
            cost: "20$",
            status: "Disponible"
        },
    ])
    
    let [transactions, setTransactions] = useState<TransactionsTableProps>({ items: dataATransactions, total: 3 });

    
    const getEdit = () => {

    }
    return {
        menu,
        setMenu,
        setPagActual,
        pagActual,
        takeCount,
        getEdit,
        transactions,
        articles,
    }
}