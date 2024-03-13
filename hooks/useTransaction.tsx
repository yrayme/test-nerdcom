import { useEffect, useState } from "react"
import { ArticlesTableProps, Transactions, TransactionsTableProps, TypesTransactions } from "../interfaces/general"

export const useTransaction = (transactions: TransactionsTableProps, setTransactions: React.Dispatch<React.SetStateAction<TransactionsTableProps>>, setOpen: React.Dispatch<React.SetStateAction<boolean>>, edit: Transactions, setDataEdit: any, articles: ArticlesTableProps, setArticles: React.Dispatch<React.SetStateAction<ArticlesTableProps>>,) => {
    const [inputValue, setInputValue] = useState({
        id: transactions?.items.length + 1,
        description: "",
        type: "",
        article: "",
        date: "",
        amount: "",
        cost: "",
        status: "",
    })
    const status = [
        {
            id: 1,
            name: "Disponible"
        },
        {
            id: 2,
            name: "No Disponible"
        }
    ]
    

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

    useEffect(() => {
        if (edit){
            setInputValue(edit);
        }
    }, [edit])
    

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        if (validateObject(inputValue)){
            if (edit) {
                const update = updateObjectById(transactions.items, inputValue.id, inputValue);
                setTransactions({
                    items: update,
                    total: transactions?.items.length + 1,
                });
            }else{
                setTransactions({
                    items: transactions?.items.concat(inputValue),
                    total: transactions?.items.length + 1,
                });
            }
            
            const updateAmountArticle = articles.items.find(obj => obj.description === inputValue.article);
            if (updateAmountArticle) {
                updateAmountArticle["amount"] = String(parseInt(updateAmountArticle["amount"]) - parseInt(inputValue.amount));
                const updateArticle = updateObjectById(articles.items, updateAmountArticle.id, updateAmountArticle);
                setArticles({
                    items: updateArticle,
                    total: articles?.items.length,
                });
            }
            setInputValue({
                id: transactions?.items.length + 1,
                description: "",
                type: "",
                article: "",
                date: "",
                amount: "",
                cost: "",
                status: "",
            });
            setOpen(false);
            setDataEdit();
        }
    }

    const validateObject = (obj: { [key: string]: number | string}) => {
        for (const key in obj) {
          if (obj[key] === "") {
            return false;
          }
        }
        return true;
    };

    const updateObjectById = (array: any[], id: number, updatedObject: any): any[] => {
        return array.map((obj) => (obj.id === id ? { ...obj, ...updatedObject } : obj));
    }

    return {
        inputValue,
        onChangeInput,
        status,
        handleSubmit,
        setInputValue,
        typesTransactions
    }
}