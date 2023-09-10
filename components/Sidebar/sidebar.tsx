import Link from 'next/link'
import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import SidebarList from '../sidebarList/SidebarList';
import Image from 'next/image';
import Logo from '../../assets/18.jpg';
interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
  closeSidebar: React.RefObject<HTMLDivElement>
}
const Sidebar = ({ showSidebar, setShowSidebar,closeSidebar }: Props) => {
  return (
    <div ref={closeSidebar} className={`z-50 fixed duration-300 drop-shadow-xl -left-[300px] h-full w-[250px] bg-white  ${showSidebar && "left-0 duration-300"}`}>
      <h1 className='pl-5 flex items-center bg-gos-1 text-3xl capitalize text-white font-sidebar h-[60px] font-semibold tracking-wider'>Libreria <span className='text-sm font-dmMono ml-2 flex items-center justify-center'>18</span></h1>
      {/* <h1 className='pl-5 flex items-center bg-gradient-to-r from-gos-1 from-0% via-gos-2 via-50% to-gos-3 to-100% text-2xl capitalize text-white font-sidebar h-[60px] font-semibold tracking-wider'>Libreria 18</h1> */}
      {/* <div className='pl-5 flex items-center bg-white text-xl capitalize text-white font-nunito h-[60px]'>
        <Image src={Logo} width={40} height={40} alt="logo web"/> 
      </div> */}
      <BsArrowLeftShort onClick={() => setShowSidebar(!showSidebar)} className={` bg-white text-slate-600 text-2xl rounded-full absolute -right-3 bottom-6 border w-[30px] h-[30px] border-slate-600 cursor-pointer ${!showSidebar && "rotate-180"}`} />

      <SidebarList showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    </div>
  )
}

export default Sidebar