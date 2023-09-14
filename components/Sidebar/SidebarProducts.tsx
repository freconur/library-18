import React from 'react'
import { RiBarChart2Fill, RiMoneyDollarCircleFill, RiDraftFill, RiArchiveDrawerFill, RiArrowLeftSLine } from "react-icons/ri";
import { MdPointOfSale } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import Link from 'next/link';
interface Props {
  showSidebarProducts: boolean,
  sidebarProducts: () => void,
  sidebar: () => void
}
const SidebarProducts = ({ sidebar, sidebarProducts, showSidebarProducts }: Props) => {
  return (
    <div className={`${showSidebarProducts && "left-0 duration-300 "} w-[250px] fixed z-[910]  h-full bg-white duration-300 -left-[300px]`}>
      <div className='flex w-full bg-pastel5'>
        <div onClick={sidebarProducts} className='flex justify-center bg-pastel5 items-center hover:opacity-80  cursor-pointer w-[40px] h-[50px] text-slate-600'>
          <RiArrowLeftSLine className='p-1 w-[40px] opacity-60 h-full'/>
        </div>
        <h2 className='p-1 h-[50px] flex justify-center items-center text-slate-600 text-2xl font-dmMono'>Productos</h2>
      </div>
      <ul className='capitalize p-1 font-dmMono text-slate-200 h-full'>
        <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
          <Link onClick={sidebar} href="/dashboard/productos" className="my-3 w-56 p-2">
            {/* <RiArchiveDrawerFill className="text-slate-600 text-xl block float-left" /> */}
            <BsFillBoxFill className="text-slate-600 text-xl block float-left" />
            <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Mis productos</span>
            {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
          </Link>
        </li>
        <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
          <Link onClick={sidebar} href="/dashboard/registro-de-productos" className="my-3 w-56 p-2">
            <RiDraftFill className="text-slate-600 text-xl block float-left" />
            <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Registro de producto</span>
            {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
          </Link>
        </li>
        <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={sidebar} href="/dashboard/cargas-stock" className="my-3 w-56 p-2">
          <RiBarChart2Fill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Cargas de stock</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={sidebar} href="/dashboard/stock" className="my-3 w-56 p-2">
          <RiArchiveDrawerFill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>productos por stock</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={sidebar} href="/dashboard/update-product" className="my-3 w-56 p-2">
          {/* <RiArchiveDrawerFill className="text-slate-600 text-xl block float-left" /> */}
          <RxUpdate className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>actualizar producto</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      </ul>
    </div>
  )
}

export default SidebarProducts