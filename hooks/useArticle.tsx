import { useEffect, useState } from "react"
import { Articles, ArticlesTableProps } from "../interfaces/general"

export const useArticle = (articles: ArticlesTableProps, setArticles: React.Dispatch<React.SetStateAction<ArticlesTableProps>>, setOpen: React.Dispatch<React.SetStateAction<boolean>>, edit: Articles, setDataEdit: any) => {
    const [inputValue, setInputValue] = useState({
        id: articles?.items.length + 1,
        description: "",
        dateStart: "",
        dateEnd: "",
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
                const update = updateObjectById(articles.items, inputValue.id, inputValue);
                setArticles({
                    items: update,
                    total: articles?.items.length,
                });
            }else{
                setArticles({
                    items: articles?.items.concat(inputValue),
                    total: articles?.items.length + 1,
                });
            }
            setInputValue({
                id: articles?.items.length + 1,
                description: "",
                dateStart: "",
                dateEnd: "",
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
    }
}