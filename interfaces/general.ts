export interface SidebarProps {
    pages: Pages[];
    mobile?: boolean;
    setMenu: React.Dispatch<React.SetStateAction<Pages>>;
    menu: Pages;
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
    getDelete: (id: number, name: string) => void;
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
    dateStart: string;
    dateEnd: string;
    amount: string;
    cost: string;
    status: string;
    actions?: boolean;
}

export interface Transactions{
    id: number;
    description: string;
    type: string;
    article: string;
    date: string;
    amount: string;
    cost: string;
    status: string;
}
  
export interface TypesTransactions {
    id: number;
    name: string;
};

export interface DataProps {
    name: string;
    data: ArticlesTableProps | TransactionsTableProps;
}

export interface InputProps {
    id: string;
    type: string;
    label: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;    
    value: string | number;
    options?: {id: string, name: string}[]; 
}

export interface SelectProps {
    type: string;
    label: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;    
    value: string | number;
    options: {id: number, name?: string, description?: string}[]; 
}


export interface ModalArticleProps {    
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    edit?: any;
    articles: ArticlesTableProps,
    setArticles: React.Dispatch<React.SetStateAction<ArticlesTableProps>>,
    setDataEdit: any;
}
  
export interface ModalTransactionProps {    
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    edit?: any;
    transactions: TransactionsTableProps,
    setTransactions: React.Dispatch<React.SetStateAction<TransactionsTableProps>>,
    setDataEdit: any;
    articles: ArticlesTableProps,
    setArticles: React.Dispatch<React.SetStateAction<ArticlesTableProps>>,
}
  