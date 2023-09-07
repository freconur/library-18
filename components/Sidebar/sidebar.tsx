import Link from 'next/link'
import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import SidebarList from '../sidebarList/SidebarList';

interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
  closeSidebar: React.RefObject<HTMLDivElement>
}
const Sidebar = ({ showSidebar, setShowSidebar,closeSidebar }: Props) => {
  return (
    <div ref={closeSidebar} className={`z-50 fixed duration-300 rounded-r-lg drop-shadow-xl -left-[300px] h-full w-[250px] bg-white  ${showSidebar && "left-0 duration-300"}`}>
      <h1 className='pl-5 flex items-center bg-gradient-to-r from-gos-1 from-0% via-gos-2 via-50% to-gos-3 to-100% text-xl capitalize text-white font-nunito h-[60px]'>parada 18</h1>
      <BsArrowLeftShort onClick={() => setShowSidebar(!showSidebar)} className={` bg-white text-slate-600 text-2xl rounded-full absolute -right-3 bottom-6 border w-[30px] h-[30px] border-slate-600 cursor-pointer ${!showSidebar && "rotate-180"}`} />

      <SidebarList showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  )
}

export default Sidebar