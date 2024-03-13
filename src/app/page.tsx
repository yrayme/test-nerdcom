import Image from "next/image";
import SidebarDesktop from "./components/Sidebar/SidebarDesktop";
import SidebarMobile from "./components/Sidebar/SidebarMobile";
import Table from "./components/Table/Table";
import { useSidebar } from "./hooks/useSidebar";
import { useMenu } from "./hooks/useMenu";

export default function Home() {
  const { pages } = useSidebar();
  const { setPagActual, pagActual, takeCount, getEdit, articles } = useMenu();
  return (
    <div className="w-full h-full md:h-screen text-black flex relative">
      <div className="hidden md:flex h-full"><SidebarDesktop pages={pages}/></div>
      <div className="flex md:hidden p-4"><SidebarMobile pages={pages}/></div>
          <main className="w-full d-flex flex-column min-screen relative p-4 md:px-8 md:py-4 h-screen overflow-auto">
            <Table 
                name="articles"
                body={articles} 
                setPagActual={setPagActual} 
                pagActual={pagActual} 
                getDelete={() => {}}
                getEdit={(data) => getEdit(data)}
                takeCount={takeCount}
            />
          </main>
    </div>
  );
}
