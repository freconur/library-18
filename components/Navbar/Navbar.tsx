import { getAuth, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app, authApp } from '../../firebase/firebase.config'
import { RiMenuFill } from "react-icons/ri";
import Image from 'next/image';

interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
interface UserInfo{
  id?: string,
  photo?: string,
  name?:string
}
const Navbar = ({showSidebar, setShowSidebar}:Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const authUser = getAuth()
  const auth = getAuth(app)
  const handleLogout = () => {
    console.log('cerrando sesion')
    signOut(authUser)
  }
  useEffect(() => {
    authUser.onAuthStateChanged(user => {
      setUserInfo({ id: `${user?.uid}`, photo: `${user?.photoURL}`, name: `${user?.displayName}` })
    }
      )
  },[])
  return (
    <>
      <nav className='w-full h-[60px] px-2 bg-white shadow-md flex justify-between items-center p-1 rounded-b-lg'>
        <div className='flex gap-3'>
          <div className='text-xl font-semibold capitalize text-red-600'>parada 18</div>
            <RiMenuFill onClick={() => setShowSidebar(!showSidebar)} className="text-3xl text-gray-600 font-bold cursor-pointer" />

        </div>
        {/* <button className='text-blue-500' onClick={handleLogout}>cerrar sesion</button> */}
        <div className='flex justify-center items-center'>
          <img className='w-[35px] h-[35px] rounded-full mr-2' src={`${userInfo?.photo}`} alt={userInfo?.name} />
          <p className='capitalize font-semibold text-gray-400'>{userInfo?.name}</p>
          {/* <Image ={userInfo?.photo}/> */}
        </div>
        {/* <button className='text-gray-400 font-semibold' onClick={handleLogout}>NetNelly</button> */}
      </nav>
    </>
  )
}

export default Navbar