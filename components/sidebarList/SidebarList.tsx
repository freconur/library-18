import Link from 'next/link'
import React from 'react'
import { RiBarChart2Fill, RiArrowLeftSLine } from "react-icons/ri";
import { MdPointOfSale } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import { BiArchiveOut } from "react-icons/bi";
import { useGlobalContext } from '../../context/GlobalContext';
import { TiTicket } from "react-icons/ti";
interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
  sidebarProducts: () => void
}
const SidebarList = ({ sidebarProducts }: Props) => {
  const { showSidebarContext, LibraryData } = useGlobalContext()
  const { showSidebar } = LibraryData
  return (
    <ul className='capitalize p-1 font-dmMono text-slate-200 h-full'>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => showSidebarContext(!showSidebar)} href="/dashboard/estadisticas" className="my-3 w-56 p-2">
          <RiBarChart2Fill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>estadisticas</span>
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <div className='flex justify-between items-center '>

        <Link onClick={sidebarProducts} href="" className="my-3 w-[200px] p-2">
          <BsFillBoxFill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>productos</span>

        </Link>
        <Link onClick={sidebarProducts} href="">
        <RiArrowLeftSLine className='rotate-180 text-2xl text-slate-600 w-[40px]' />

        </Link>
        </div>
      </li>

      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => showSidebarContext(!showSidebar)} href="/dashboard/registro-ventas" className="my-3 w-56 p-2">
          <MdPointOfSale className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}> Punto de venta</span>
        </Link>
      </li>
      
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => showSidebarContext(!showSidebar)} href="/dashboard/anulacion-venta" className="my-3 w-56 p-2">
          <TiTicket className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Mis tickets</span>
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => showSidebarContext(!showSidebar)} href="/dashboard/ventas" className="my-3 w-56 p-2">
          <BiArchiveOut className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Productos vendidos</span>
        </Link>
      </li>
    </ul>
  )
}

export default SidebarList