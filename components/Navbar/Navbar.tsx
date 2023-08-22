import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { app, authApp } from '../../firebase/firebase.config'
import { RiMenuFill } from "react-icons/ri";

interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = ({showSidebar, setShowSidebar}:Props) => {

  const auth = getAuth(app)
  const handleLogout = () => {
    console.log('cerrando sesion')
    signOut(auth)
  }
  return (
    <>
      <nav className='w-full h-[60px] px-2 bg-white shadow-md flex justify-between items-center p-1 rounded-b-lg'>
        <div className='flex gap-3'>
          <div className='text-xl font-semibold capitalize text-red-600'>estacion 18</div>
            <RiMenuFill onClick={() => setShowSidebar(!showSidebar)} className="text-3xl text-gray-600 font-bold cursor-pointer" />

        </div>
        {/* <button className='text-blue-500' onClick={handleLogout}>cerrar sesion</button> */}
        <button className='text-gray-400 font-semibold' onClick={handleLogout}>NetNelly</button>
      </nav>
    </>
  )
}

export default Navbar