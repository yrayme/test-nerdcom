'use client';
import Image from "next/image";
import SidebarDesktop from "./components/Sidebar/SidebarDesktop";
import SidebarMobile from "./components/Sidebar/SidebarMobile";
import Table from "./components/Table/Table";
import { useSidebar } from "../../hooks/useSidebar";
import { useMenu } from "../../hooks/useMenu";
import ModalArticle from "./components/ModalArticle";
import ModalTransaction from "./components/ModalTransaction";

export default function Home() {
  const { pages } = useSidebar();
  const { setPagActual, pagActual, takeCount, getEdit, menu, setMenu, data, open, setopen, articles, setArticles, dataEdit, setDataEdit, getDelete, transactions, setTransactions } = useMenu();

  return (
    <div className="w-full h-full md:h-screen text-black flex relative">
      <div className="hidden md:flex h-full"><SidebarDesktop pages={pages} setMenu={setMenu} menu={menu}/></div>
          <main className="w-full d-flex flex-column min-screen relative p-4 md:px-8 md:py-4 h-screen overflow-auto">
          <div className="flex md:hidden p-4"><SidebarMobile pages={pages} setMenu={setMenu} menu={menu}/></div>
            <div>
                <p className='text-2xl font-semibold'>{menu.name}</p>
                <hr className='mt-1 mb-6'/>
            </div>
            <div className='flex justify-end mb-6'>
                <button className='bg-red-600 p-2 px-4 rounded-md text-white font-medium' onClick={() => setopen(true)}>
                    Agregar
                </button>
            </div>
            <Table 
                name={data.name}
                body={data.data} 
                setPagActual={setPagActual} 
                pagActual={pagActual} 
                getDelete={(id, name) => getDelete(id, name)}
                getEdit={(data) => getEdit(data)}
                takeCount={takeCount}
            />
            {open && 
              data.name === "articles" ? <ModalArticle open={open} setOpen={setopen} articles={articles} setArticles={setArticles} edit={dataEdit} setDataEdit={setDataEdit}/>
              : <ModalTransaction open={open} setOpen={setopen} transactions={transactions} setTransactions={setTransactions} edit={dataEdit} setDataEdit={setDataEdit} articles={articles} setArticles={setArticles}/>
            }
          </main>
    </div>
  );
}
