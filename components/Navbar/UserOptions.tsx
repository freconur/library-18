import Link from 'next/link'
import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface Props {
  handleLogout:() =>void,
  showOptionsUser: boolean,
  closeUserOptionWithClick: () => void,
}
const UserOptions = ({handleLogout, showOptionsUser, closeUserOptionWithClick}:Props) => {
  const closeUserOptions = useRef<HTMLDivElement>(null)
  useOnClickOutside(closeUserOptions, closeUserOptionWithClick)
  return (
    <div ref={closeUserOptions} className={`fixed w-[150px] rounded-md bg-white drop-shadow-sm p-1  ${showOptionsUser ? "top-[50px] duration-300" : "-top-[200px] duration-300"}`} >
      <ul className='text-slate-500 font-nunito capitalize w-full'>
        <li className='hover:bg-slate-100  rounded-sm duration-300 w-full flex'>
          <Link className='w-full p-3' href="mi-perfil">mi perfil</Link>
        </li>
        <li onClick={handleLogout} className='hover:bg-slate-100 p-3 rounded-sm duration-300'>cerrar sesion</li>
      </ul>
    </div>
  )
}

export default UserOptions