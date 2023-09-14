import React, { useRef, useState } from 'react'
import Sidebar from '../components/Sidebar/sidebar'
import Navbar from '../components/Navbar/Navbar'
import useOnClickOutside from '../hooks/useOnClickOutside'
import { useRouter } from 'next/router'


interface Props {
  children: JSX.Element | JSX.Element[]
}
const LayoutDashboard = ({ children }: Props) => {
  const closeSidebar = useRef<HTMLDivElement>(null)
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [showSidebarProducts, setShowSidebarProducts] = useState<boolean>(false)

  const sidebarProducts = () => {
    setShowSidebarProducts(!showSidebarProducts)
  }
  const sidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const handleClickOutside = () => {
    setShowSidebar(false)
  }
  useOnClickOutside(closeSidebar, handleClickOutside)
  const { pathname } = useRouter()
  return (
    <>
      {
        pathname === "/register-login"
          ?
          <>
            {children}
          </>
          :
          <div className='relative z-[1000]'>

            <Sidebar 
            showSidebarProducts={showSidebarProducts} 
            sidebarProducts={sidebarProducts} 
            closeSidebar={closeSidebar} 
            showSidebar={showSidebar} 
            setShowSidebar={setShowSidebar} 
            sidebar={sidebar}
            />
            <div className='w-full relative'>
              <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
              <div className="relative z-[700] overflow-hidden rounded-t-lg mt-2 p-1 md:p-3 flex w-full">
                {children}
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default LayoutDashboard