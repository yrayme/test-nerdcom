import { useEffect, useState } from "react"
import { Pages, ArticlesTableProps, Transactions, TransactionsTableProps, TypesTransactions, Articles, DataProps } from "../interfaces/general";
import { getFormatDate } from "../utils/getFormatDate";
import axios from "axios";

export const useMenu = () => {
    const [menu, setMenu] = useState<Pages>({
        id: 1,
        name: "Articulos"
    });
    const [open, setopen] = useState(false);
    const [dataEdit, setDataEdit] = useState();

    const [pagActual, setPagActual] = useState<number>(0); 
    const takeCount: number = 10;

    const [dataArticles, setDataArticles] = useState<Articles[]>([
        {
            id: 1,
            description: "Cuadernos",
            dateStart: getFormatDate(new Date()),
            dateEnd: getFormatDate(new Date()),
            amount: "20",
            cost: "1$",
            status: "Disponible",
        },
        {
            id: 2,
            description: "Marcadores",
            dateStart: getFormatDate(new Date()),
            dateEnd: getFormatDate(new Date()),
            amount: "30",
            cost: "5$",
            status: "Disponible",
        },
        {
            id: 3,
            description: "Audifonos",
            dateStart: getFormatDate(new Date()),
            dateEnd: getFormatDate(new Date()),
            amount: "50",
            cost: "20$",
            status: "Disponible",
        },
    ])

    let [articles, setArticles] = useState<ArticlesTableProps>({ items: dataArticles, total: 3 });
    const [dataATransactions, setDataTransactions] = useState<Transactions[]>([
        {
            id: 1,
            description: "Venta de cuadernos",
            type: "Comercial",
            article: "Cuaderno",
            date: getFormatDate(new Date()),
            amount: "20",
            cost: "1$",
            status: "Disponible"
        },
        {
            id: 2,
            description: "Venta de Marcadores",
            type: "Comercial",
            article: "Cuaderno",
            date: getFormatDate(new Date()),
            amount: "30",
            cost: "5$",
            status: "Disponible"
        },
        {
            id: 3,
            description: "Venta de Audifonos",
            type: "Comercial",
            article: "Cuaderno",
            date: getFormatDate(new Date()),
            amount: "50",
            cost: "20$",
            status: "Disponible"
        },
    ])
    
    let [transactions, setTransactions] = useState<TransactionsTableProps>({ items: dataATransactions, total: 3 }); 
    const [data, setData] = useState<DataProps>({
        name: "articles",
        data: articles
    });

    useEffect(() => {
        switch (menu.id) {
            case 1:
                setData({
                    name: "articles",
                    data: articles
                });
                break;
            case 2:
                setData({
                    name: "transactions",
                    data: transactions
                });
                break;
        
            default:
                break;
        }
    }, [menu])

    useEffect(() => {
        setData({
            name: "articles",
            data: articles
        });
    }, [articles])
    
    

    useEffect(() => {
        setData({
            name: "transactions",
            data: transactions
        });
    }, [transactions])
    

    useEffect(() => { 
        getApi();
    }, [])

    const getApi = async() => {
        try {
            const { data } = await axios.get("ruta/api");
            return data
        } catch (error) {
            return Promise.reject(error);
        }
    }
    
    const getEdit = (data: any) => {
        setDataEdit(data);
        setopen(true);
    }

    const getDelete = (id: number, name: string) => {
        if (name === "articles") {
            const updatedArray = articles.items.filter((obj) => obj.id !== id);
            setArticles({
                items: updatedArray,
                total: articles?.items.length - 1,
            });
        }else {
            const updatedArray = transactions.items.filter((obj) => obj.id !== id);
            setTransactions({
                items: updatedArray,
                total: articles?.items.length - 1,
            });
        }
    }

    return {
        menu,
        setMenu,
        setPagActual,
        pagActual,
        takeCount,
        getEdit,
        data,
        open, 
        setopen,
        articles,
        setArticles,
        dataEdit,
        setDataEdit,
        getDelete,
        transactions,
        setTransactions,
    }
}