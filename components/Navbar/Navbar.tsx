"use client"
import { getAuth, signOut } from 'firebase/auth'
import React, { useEffect, useRef, useState } from 'react'
import { app, authApp } from '../../firebase/firebase.config'
import { RiMenuFill } from "react-icons/ri";
import algoliasearch from 'algoliasearch/lite';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import { BsSearchHeart } from 'react-icons/bs';
import { useGlobalContext } from '../../context/GlobalContext';
import { ToastContainer, toast } from 'react-toastify';
import { useUser } from 'next-firebase-auth';
import { nameUser } from '../../utils/validateForm';
interface Props {
  dataUser:any
  // setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
interface UserInfo {
  id?: string,
  photo?: string,
  name?: string
}

const APPLICATION_ID = 'A03AC5JW4J'
const SEARCH_API_KEY = '3c93f2a51d243945a1e56ae63edf4794'
const ALGOLIA_INDEX = 'products'
const searchClient = algoliasearch(APPLICATION_ID, SEARCH_API_KEY);
const index = searchClient.initIndex(ALGOLIA_INDEX)


const Navbar = ({dataUser}:Props) => {
  const [showOptionsUser, setShowOptionsUser] = useState(false)
  const cerrarSesion = getAuth(authApp)
  const handleLogout = () => {
    signOut(cerrarSesion)
  }

  const { pathname } = useRouter()
  const closeBoxSearch = useRef<HTMLDivElement>(null)
  const closeBoxSearchInput = useRef<HTMLInputElement>(null)
  const { addProductRegisterToSell, LibraryData, resetToastifyNotificationAddProduct,showSidebarContext } = useGlobalContext()
  const { productToCart, toastifyNotificationAddProduct, getDataUser, showSidebar } = LibraryData
  const [onInput, setOnInput] = useState(false)
  const [userInfo, setUserInfo] = useState<SaveUserData>()
  const authUser = getAuth(app)
  // const auth = useUser()

  const initialValueInput = { description: "" }
  const [conditionalValue, setConditionalValue] = useState(initialValueInput)
  const [results, setResults] = useState<any>(null)


  const addProductFromNavbar = (code: string) => {
    addProductRegisterToSell(code, productToCart)
  }

  const handleClickOutside = () => {
    setConditionalValue(initialValueInput)
    setOnInput(!onInput)
  }
  const closeBoxSearchWithButton = () => {
    setConditionalValue(initialValueInput)
  }
  useOnClickOutside(closeBoxSearch, handleClickOutside)

  const successToastify = () => {
    toast.success('se agrego producto al carrito', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }
  useEffect(() => {
    resetToastifyNotificationAddProduct()
    if (toastifyNotificationAddProduct === 1) {
      successToastify()
    }
  }, [results, toastifyNotificationAddProduct, getDataUser])

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setConditionalValue({
      ...conditionalValue,
      [e.target.name]: e.target.value
    })
    value === ''
      ? setResults(null)
      : performSearch(value)
  }

  const performSearch = async (value: string) => {
    const { hits } = await index.search(value, {
      hitsPerPage: 5
    })
    const results = hits.map((hit: any) => {
      const { objectID: key, _highlightResult } = hit
      const {
        code: { value: code },
        description: { value: description },
        brand: { value: brand },
        price: { value: price },
        stock: { value: stock },
      } = _highlightResult

      return { key, description, code, stock, brand, price }
    })
    setResults(results)
  }
  const testData = (item: string) => {
    return { __html: item }
  }

  const testEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key)
    if (e.key === 'Escape') {
      handleClickOutside()
    }
    new KeyboardEvent('keydown', {
      'key': 'Tab'
    })
  }

  console.log('userInfo', userInfo)
  console.log('dataUser', dataUser)
  return (
    <>
      <nav className={`sticky top-0 z-[800] w-full h-[60px] px-2 bg-white shadow-md flex justify-between items-center pl-0 pr-1 pb-1 pt-1 `}>
        <div className='flex gap-1  justify-center items-center'>
          <h1 className='pl-1 xs:pl-1  flex items-center bg-gos-1 text-3xl capitalize text-white font-montserrat h-[60px] font-semibold tracking-wider pr-1 xs:pr-1'>
            <span className='hidden xs:block font-sidebar text-md'>Libreria</span>
            <span className='xs:hidden font-sidebar'>Lib</span>
            <span className='text-sm font-dmMono ml-2 flex items-center justify-center'>18</span>
            </h1>
          <RiMenuFill onClick={() => showSidebarContext(!showSidebar)} className="text-3xl text-gray-600 font-bold cursor-pointer" />
        </div>
        {
          pathname === "/dashboard/registro-ventas"
          &&
          <div className={`${conditionalValue.description.length > 0 ? "absolute md:relative md:top-1 top-[10px] left-[5px]  right-[5px] w-[310px] mb:w-[338px]" : "relative w-[50px] mb:w-[25%]"} bg-white px-1 rounded-lg border-spacing-0 border-[1px] border-slate-200 flex justify-center items-center w-[10%]  xsm:mx-2 cs:w-[70%] xsm:w-[45%]`}>
            <BsSearchHeart className='text-5xl mb:text-2xl h-[30px] text-slate-300 xsm:text-2xl' />
            <input
              // onKeyDown={testEnter}
              // ref={closeBoxSearchInput}
              name="description"
              onChange={handleChangeValue}
              className={`w-full outline-none rounded-lg h-[40px] pl-3 text-slate-500 p-1`}
              type="text"
              placeholder="busqueda"
            />
          </div>
        }
        <div onClick={() => setShowOptionsUser(!showOptionsUser)} className='relative  flex justify-center cursor-pointer items-center xsm:w-[180px]'>
          {dataUser
            ?
            <>
              {
                dataUser?.email &&
              // <div className='w-[35px] h-[35px] rounded-full mr-2 flex bg-red-400 justify-center items-center capitalize text-white font-dmMono'>{(getDataUser?.name[0])}</div>
              <div className='w-[35px] h-[35px] rounded-full mr-2 flex bg-red-400 justify-center items-center capitalize text-white font-dmMono'>{(dataUser?.email[0])}</div>
              }
              <p  className='font-nunito capitalize text-gray-400'>hola {nameUser(dataUser?.email)}!</p>
              <div className={`fixed w-[150px] rounded-md bg-white drop-shadow-sm p-1  ${showOptionsUser ? "top-[50px] duration-300" : "-top-[200px] duration-300"}`} >
                <ul className='text-slate-500 font-nunito capitalize'>
                  <li className='hover:bg-slate-100 p-3 rounded-sm duration-300'>mi perfil</li>
                  <li onClick={handleLogout} className='hover:bg-slate-100 p-3 rounded-sm duration-300'>cerrar sesion</li>
                </ul>
              </div>
            </>
            : 
            <p>test</p>
          }
        </div>
        {
          conditionalValue.description.length > 0
            ?
            <div className=' shadow-lg overflow-hidden h-[500px] absolute top-[60px] right-0 md:right-[152px] left-0 md:top-[40px] md:left-[88px] mx-1 my-1 p-2 bg-white rounded-sm'>
              <div className='flex justify-between items-center'>
                <h3 className='text-slate-700 capitalize font-dmMono text-lg my-5'>productos relacionados</h3>
                <div onClick={handleClickOutside} className='text-white cursor-pointer text-lg flex justify-center items-center w-[20px] h-[20px] rounded-full bg-red-400 p-3 font-dmMono shadow-lg'>x</div>
              </div>
              {/* <ProductsFromSerach results={results}/> */}
              <div className=' pr-2'>
                {
                  results &&
                  results.map((item: ProductToCart) => {
                    return (
                      productToCart &&
                      <div key={item.id} onClick={() => addProductFromNavbar(`${item?.code}`)} className='w-full my-2 hover:bg-slate-200 border-b-2 cursor-pointer border-slate-100'>
                        <div className='flex justify-between items-center'>
                          <p className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.code}`)} />
                          <p className='text-slate-600 font-nunito' dangerouslySetInnerHTML={testData(`${item.stock}`)} />
                        </div>
                        <h3 className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.description}`)} />
                        <div className='flex justify-between items-center'>
                          <div className='flex'>
                            <span className='font-nunito text-slate-600'>marca: </span><p className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.brand}`)} />
                          </div>
                          <div className='flex'>
                            <span className='font-nunito text-slate-600'>precio: $</span><p className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.price}`)} />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            :
            null
        }
      </nav>
    </>
  )
}

export default Navbar