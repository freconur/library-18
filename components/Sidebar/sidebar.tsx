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
    <div ref={closeSidebar} className={`z-50 fixed duration-300 -left-[300px] h-full w-[250px] bg-cyan-950 p-2 ${showSidebar && "left-0 duration-300"}`}>
      <h1 className='pl-1 flex items-center text-xl font-semibold capitalize text-red-600 h-[55px]'>estacion 18</h1>
      <BsArrowLeftShort onClick={() => setShowSidebar(!showSidebar)} className={` bg-white text-blue-800 text-2xl rounded-full absolute -right-3 top-12 border w-[30px] h-[30px] border-blue-800 cursor-pointer ${!showSidebar && "rotate-180"}`} />

      <SidebarList showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  )
}

export default Sidebar