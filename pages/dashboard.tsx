import React, { useEffect } from 'react'
import { AuthAction, useUser, withUser } from 'next-firebase-auth'
import LayoutDashboard from '../layout/LayoutDashboard'
import { useGlobalContext } from '../context/GlobalContext'

const Dashboard = () => {
  const { saveDataUser } = useGlobalContext()
  const dataUser = useUser()

  useEffect(() => {
    if (dataUser.displayName && dataUser.photoURL && dataUser.email) {
      saveDataUser({ displayName: dataUser.displayName, photoURL: dataUser.photoURL, email: dataUser.email })
    }
  }, [])
  console.log('dataUser', dataUser)
  return (
    <LayoutDashboard>
      <div>
        <img className='w-[35px] h-[35px] rounded-full mr-2' src={`${dataUser?.photoURL}`} alt={dataUser?.displayName as string} />
        <p className='capitalize font-semibold text-gray-400'>{dataUser?.displayName}</p>
        dashboard
      </div>

    </LayoutDashboard>
  )
}

export default withUser({
  // whenAuthed: AuthAction.RENDER
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
  // whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_LOGIN
})(Dashboard)
