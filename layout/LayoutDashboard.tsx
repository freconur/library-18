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

  const handleClickOutside = () => {
    setShowSidebar(false)
    console.log('estamos bien')
  }
  useOnClickOutside(closeSidebar, handleClickOutside)
  const { pathname } = useRouter()
  console.log('pathname', pathname)
  return (
    <>
      {
        pathname === "/register-login"
          ?
          <>
            {children}
          </>
          :
          <>

            <Sidebar closeSidebar={closeSidebar} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            <div className='w-full'>
              <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
              {/* <div className='flex'> */}
              <div className="bg-white overflow-hidden rounded-t-lg mt-2 p-1 flex w-full">
                {children}
              </div>
              {/* </div> */}
            </div>
          </>
      }
    </>
  )
}

export default LayoutDashboard