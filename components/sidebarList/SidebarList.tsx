import Link from 'next/link'
import React from 'react'
import { RiBarChart2Fill,RiMoneyDollarCircleFill, RiDraftFill,RiArchiveDrawerFill } from "react-icons/ri";
import { MdPointOfSale } from "react-icons/md";
import { BsFillBoxFill } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>,
}
const SidebarList = ({showSidebar, setShowSidebar}:Props) => {
  return (
    <ul className='capitalize p-1 font-dmMono text-slate-200'>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/estadisticas" className="my-3 w-56 p-2">
          <RiBarChart2Fill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>estadisticas</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/productos" className="my-3 w-56 p-2">
          {/* <RiArchiveDrawerFill className="text-slate-600 text-xl block float-left" /> */}
          <BsFillBoxFill className="text-slate-600 text-xl block float-left"/>
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Mis productos</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/registro-de-productos" className="my-3 w-56 p-2">
          <RiDraftFill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Registro de producto</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/registro-ventas" className="my-3 w-56 p-2">
          {/* <RiMoneyDollarCircleFill className="text-slate-600 text-xl block float-left" /> */}
          <MdPointOfSale className="text-slate-600 text-xl block float-left"/>
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}> Punto de venta</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/cargas-stock" className="my-3 w-56 p-2">
          <RiBarChart2Fill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>Cargas de stock</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
     
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/stock" className="my-3 w-56 p-2">
          <RiArchiveDrawerFill className="text-slate-600 text-xl block float-left" />
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>productos por stock</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 border-b-[1px] border-slate-300 text-sm flex items-center gap-x-4 cursor-pointer   mt-2 capitalize   hover:bg-slate-200 duration-300 hover:text-gray-800 whitespace-nowrap my-3">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/update-product" className="my-3 w-56 p-2">
          {/* <RiArchiveDrawerFill className="text-slate-600 text-xl block float-left" /> */}
          <RxUpdate className="text-slate-600 text-xl block float-left"/>
          <span className={`text-base flex-1 ml-2 text-md text-slate-500`}>actualizar producto</span>
          {/* <span className={`text-base flex-1 ml-2   ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
    </ul>
  )
}

export default SidebarList