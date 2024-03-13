import { Columns } from "@/interfaces/general"

export const useTable = () => {   
    const columns: Columns = {
        "articles": [
            {
                id: "id",
                name: "ID"
            },
            {
                id: "description",
                name: "Descripción"
            },
            {
                id: "datestart",
                name: "Fecha de Ingreso"
            },
            {
                id: "dateEnd",
                name: "Fecha de vencimiento"
            },
            {
                id: "amount",
                name: "Cantidad"
            },
            {
                id: "cost",
                name: "Costo"
            },
            {
                id: "status",
                name: "Estado"
            },
            {
                id: "actions",
                name: "Acciones"
            }
        ],
        "transactions": [
            {
                id: "id",
                name: "ID"
            },
            {
                id: "description",
                name: "Descripción"
            },
            {
                id: "type",
                name: "Tipo de transacción"
            },
            {
                id: "article",
                name: "Articulo"
            },
            {
                id: "date",
                name: "Fecha de documento"
            },
            {
                id: "amount",
                name: "Cantidad"
            },
            {
                id: "cost",
                name: "Costo"
            },
            {
                id: "status",
                name: "Estado"
            },
            {
                id: "actions",
                name: "Acciones"
            }
        ],
    }

    return {
        columns,
    }
}
