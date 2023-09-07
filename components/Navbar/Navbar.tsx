"use client"
import { getAuth } from 'firebase/auth'
import React, { useEffect, useRef, useState } from 'react'
import { app } from '../../firebase/firebase.config'
import { RiMenuFill } from "react-icons/ri";
import algoliasearch from 'algoliasearch/lite';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import { BsSearchHeart } from 'react-icons/bs';
interface Props {
  showSidebar: boolean,
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
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


const Navbar = ({ showSidebar, setShowSidebar }: Props) => {
  const { pathname } = useRouter()
  const closeBoxSearch = useRef<HTMLDivElement>(null)
  const closeBoxSearchInput = useRef<HTMLInputElement>(null)

  const [onInput, setOnInput] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const authUser = getAuth()
  const auth = getAuth(app)

  const initialValueInput = { description: "" }
  const [conditionalValue, setConditionalValue] = useState(initialValueInput)
  const [results, setResults] = useState<any>(null)

  const handleClickOutside = () => {
    setConditionalValue(initialValueInput)
    setOnInput(!onInput)
  }
  const closeBoxSearchWithButton = () => {
    setConditionalValue(initialValueInput)
  }
  useOnClickOutside(closeBoxSearch, handleClickOutside)

  useEffect(() => {
    authUser.onAuthStateChanged(user => {
      let char = []
      let names = ""
      if (user?.displayName) {
        const toString: string = `${user?.displayName}`
        for (var i = 0; i < toString.length; i++) {
          if (toString[i] === " ") {
            names = char.join('')
            return names
          } else {
            char.push(toString[i])
          }
        }
        setUserInfo({ id: `${user?.uid}`, photo: `${user?.photoURL}`, name: `${names}` })
      }
      console.log('names', names)
    }
    )
  }, [results])

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
      hitsPerPage: 10
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
  return (
    <>
      <nav className={`relative w-full h-[60px] px-2 bg-white shadow-md flex justify-between items-center p-1 `}>
        <div className='flex gap-3'>
          <div className='text-xl font-semibold capitalize text-red-600'>18</div>
          <RiMenuFill onClick={() => setShowSidebar(!showSidebar)} className="text-3xl text-gray-600 font-bold cursor-pointer" />
        </div>

        {
          pathname === "/dashboard/registro-ventas"
          &&
          <div className={`${conditionalValue.description.length > 0 ? "absolute md:relative md:top-1 top-[10px] left-[5px]  right-[5px] w-[310px] mb:w-[338px]" : "relative w-[50px] mb:w-[35%]"} bg-white px-1 rounded-lg border-spacing-0 border-[1px] border-slate-200 flex justify-center items-center w-[10%]  xsm:mx-2 cs:w-[70%] xsm:w-[55%]`}>
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
        <div className='flex justify-center items-center xsm:w-[180px]'>
          {userInfo
            ?
            <>
              <img className='w-[35px] h-[35px] rounded-full mr-2' src={`${userInfo?.photo}`} alt={userInfo?.name} />
              <p className='capitalize font-semibold text-gray-400'>{userInfo?.name}</p>
            </>
            :
            <>
              <div className='flex justify-center items-center gap-2'>
                <div className='flex rounded-full w-[40px] h-[40px] bg-amber-500 justify-center items-center shadow-md'>
                  <span className='font-dmMono text-white font-semibold'>L</span>
                </div>
                <span className=' font-nunito text-slate-600'>
                  Hola Admin!
                </span>

              </div>
            </>
          }
        </div>
        {
          conditionalValue.description.length > 0
            ?
            <div className=' shadow-lg absolute top-[60px] right-0 md:right-[152px] left-0 md:top-[40px] md:left-[88px] mx-1 my-1 p-2 bg-white rounded-sm'>
              <div className='flex justify-between items-center'>
                <h3 className='text-slate-700 capitalize font-dmMono text-lg my-5'>productos relacionados</h3>
                <div onClick={handleClickOutside} className='text-white cursor-pointer text-lg flex justify-center items-center w-[20px] h-[20px] rounded-full bg-red-400 p-3 font-dmMono shadow-lg'>x</div>
              </div>
              {/* <ProductsFromSerach results={results}/> */}
              <div className='overflow-y-scroll h-[500px] pr-2'>
                {
                  results &&
                  results.map((item: ProductToCart) => {
                    return (
                      <CopyToClipboard key={item.code} text={item.code as string}>
                        <div className='w-full my-2 border-b-2 cursor-pointer border-slate-100'>
                          <div className='flex justify-between items-center'>
                            <p className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.code}`)} />

                            {/* <p className='text-slate-600 font-nunito'>{item.code}</p> */}
                            <p className='text-slate-600 font-nunito'>stock: {item.stock}</p>
                          </div>
                          <h3 className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.description}`)} />
                          <div className='flex justify-between items-center'>
                            <div className='flex'>
                              <span className='font-nunito text-slate-600'>marca: </span><p className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.brand}`)} />
                            </div>
                            <div className='flex'>
                              <span className='font-nunito text-slate-600'>precio: $</span><p className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.price}`)} />
                            </div>
                            {/* <p className='text-slate-600 font-nunito'>marca: {item.brand}</p> */}
                            {/* <p className='text-slate-600 font-nunito'>precio: $ {item.price}</p> */}
                          </div>
                        </div>
                      </CopyToClipboard>
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