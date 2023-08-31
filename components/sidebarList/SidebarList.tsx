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
    <ul className='capitalize font-semibold  text-slate-200'>
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/estadisticas" className="w-56 p-2">
          <RiBarChart2Fill className="text-2xl block float-left" />
          <span className={`text-base flex-1 ml-2 font-semibold`}>estadisticas</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/productos" className="w-56 p-2">
          {/* <RiArchiveDrawerFill className="text-2xl block float-left" /> */}
          <BsFillBoxFill className="text-2xl block float-left"/>
          <span className={`text-base flex-1 ml-2 font-semibold`}>Mis productos</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/registro-de-productos" className="w-56 p-2">
          <RiDraftFill className="text-2xl block float-left" />
          <span className={`text-base flex-1 ml-2 font-semibold`}>Registro de producto</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/registro-ventas" className="w-56 p-2">
          {/* <RiMoneyDollarCircleFill className="text-2xl block float-left" /> */}
          <MdPointOfSale className="text-2xl block float-left"/>
          <span className={`text-base flex-1 ml-2 font-semibold`}> Punto de venta</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/cargas-stock" className="w-56 p-2">
          <RiBarChart2Fill className="text-2xl block float-left" />
          <span className={`text-base flex-1 ml-2 font-semibold`}>Cargas de stock</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
     
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/stock" className="w-56 p-2">
          <RiArchiveDrawerFill className="text-2xl block float-left" />
          <span className={`text-base flex-1 ml-2 font-semibold`}>productos por stock</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
      <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  rounded-md mt-2 capitalize   hover:bg-cyan-400 hover:text-gray-800 whitespace-nowrap">
        <Link onClick={() => setShowSidebar(!showSidebar)} href="/dashboard/update-product" className="w-56 p-2">
          {/* <RiArchiveDrawerFill className="text-2xl block float-left" /> */}
          <RxUpdate className="text-2xl block float-left"/>
          <span className={`text-base flex-1 ml-2 font-semibold`}>actualizar producto</span>
          {/* <span className={`text-base flex-1 ml-2 font-semibold  ${!openSidebar && "hidden"}`}>estadisticas</span> */}
        </Link>
      </li>
    </ul>
  )
}

export default SidebarList