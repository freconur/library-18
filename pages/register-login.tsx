/* globals window */
import React, { useEffect, useState } from 'react'
import initAuth from '../initAuth'
import { AuthAction, withUser } from 'next-firebase-auth'
import { useGlobalContext } from '../context/GlobalContext'
import { loginWithGoogle } from '../reducer/google'

initAuth()
const Auth = () => {
  const user = { user:"", password:""}
  const [userData, setUserData] = useState(user)
  const { loginWithEmailContext } = useGlobalContext()
  const [renderAuth, setRenderAuth] = useState(false)

  const handleChangeUservalue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    })
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true)
    }
  }, [])

  console.log('userDate', userData)
  return (
    <div className='grid place-content-center place-items-center h-[100vh]'>
      <div className='p-2 '>
        <div className="flex justify-center items-center mb-10">
          <h1 className='font-sidebar text-5xl capitalize'>libreria </h1>
          <p className='text-sm font-dmMono ml-2 flex items-center justify-center'>18</p>
        </div>
        {/* <form className='w-full bg-white  drop-shadow-sm p-2'>
          <div className='mb-3'>
            <label className='text-nunito text-md capitalize text-slate-600 '>usuario</label>
            <input onChange={handleChangeUservalue} name="user" value={userData.user} type="email" className='w-full border-[1px] border-slate-400 h-[40px] rounded-sm outline-none pl-2' />
          </div>
          <div className='mb-3'>
            <label className='text-nunito text-md capitalize text-slate-600 '>contrasena</label>
            <input onChange={handleChangeUservalue} name="password" value={userData.password} type="password" className='w-full border-[1px] border-slate-400 h-[40px] rounded-sm outline-none pl-2' />
          </div>

        </form>  */}
          <button onClick={loginWithGoogle} className='h-[50px] bg-pastel10 p-2 capitalize text-white w-full font-nunito text-lg rounded-md'>iniciar sesion</button>

      </div>
    </div>
  )
}
export default withUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP
})(Auth)

// import React, { useEffect, useState } from 'react'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
// import initAuth from '../initAuth'
// import { app } from '../firebase/firebase.config'
// import { AuthAction, withUser} from 'next-firebase-auth'
// import style from '../styles/RegisterLogin.module.css'
// import { RiFileEditFill } from "react-icons/ri";
// import { RiStackFill } from "react-icons/ri";
// import { loginWithGoogle } from '../reducer/google'
// // Note that next-firebase-auth inits Firebase for us,
// // so we don't need to.
// initAuth()
// const firebaseAuthConfig = {
//   signInFlow: 'popup',
//   // Auth providers
//   // https://github.com/firebase/firebaseui-web#configure-oauth-providers
//   signInOptions: [
//     {
//       provider: EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false,
//     },
//     {
//       provider: GoogleAuthProvider.PROVIDER_ID,
//       // requireDisplayName: false,
//     },
//   ],
//   signInSuccessUrl: '/dashboard',
//   credentialHelper: 'none',
//   callbacks: {
//     // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl
//     signInSuccessWithAuthResult: () =>
//       // Don't automatically redirect. We handle redirects using
//       // `next-firebase-auth`.
//       false,
//   },
// }
// const Auth = () => {
//   const [renderAuth, setRenderAuth] = useState(false)
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setRenderAuth(true)
//     }
//   }, [])
//   return (
//     <div className='flex h-[100vh]'>
//       <div className={style.division}>
//         <div className='text-slate-200'>
//           <div>
//             <h1 className='my-4 text-3xl font-semibold capitalize'>flashcard study</h1>
//           </div>
//           <p className='text-2xl font-semibold'>Te damos la bienvenida a una aplicacion simple pero efectiva para estudio.</p>
//           <ul className='mt-3 text-xl font-medium grid gap-3'>
//             <li className='flex gap-2 items-center'>
              
//               <RiStackFill/>crea y estudia flashcards
//             </li>
//             <li className='flex gap-2 items-center'>
//               <RiFileEditFill/>organizate y enfocate
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className=' bg-principal grid place-content-center w-[80%]'>
//         <h3 className='pl-5 capitalize text-2xl font-semibold text-slate-200'>inicia sesion</h3>
//         {/* {renderAuth ? (
//           <StyledFirebaseAuth
//             uiConfig={firebaseAuthConfig}
//             firebaseAuth={getAuth(app)}
//           />
//         ) : null} */}
//         <button onClick={loginWithGoogle} className='h-[50px] bg-red-600 p-2 capitalize text-white'>Google</button>
//       </div>
//     </div>
//   )
// }
// export default withUser({
//   // whenUnauthedAfterInit:AuthAction.REDIRECT_TO_APP
//   whenAuthed: AuthAction.REDIRECT_TO_APP
// })(Auth)