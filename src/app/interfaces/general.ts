export interface SidebarProps {
    pages: Pages[];
    mobile?: boolean;
}

export interface Pages {
    id: number;
    name: string;
}

export type PaginationProps = {
    pagActual: number;
    setPagActual: React.Dispatch<React.SetStateAction<number>>;
    total: number | undefined;
    takeCount: number;
};

export interface Columns {
    articles: { id: string; name: string }[];
    transactions: { id: string; name: string }[];
    [key: string]: any;
}

export interface TableProps {
    name: string;
    body: ArticlesTableProps | TransactionsTableProps;
    pagActual: number;
    setPagActual: React.Dispatch<React.SetStateAction<number>>;
    getDelete: (data: any) => void;
    getEdit: (data: any) => void;
    takeCount: number;
}

export interface ArticlesTableProps {
    items: Articles[];
    total: number;
}

export interface TransactionsTableProps {
    items: Transactions[];
    total: number;
}


export interface Articles {
    id: number;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    amount: number;
    cost: string;
    status: string;
}

export interface Transactions{
    id: number;
    description: string;
    type: {
        id: number;
        name: string;
    };
    article: {
        id: number;
        name: string;
    };
    date: Date;
    amount: number;
    cost: string;
    status: string;
}
  
export interface TypesTransactions {
    id: number;
    name: string;
};
