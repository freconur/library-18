"use client"
import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebase/firebase.config'
import { RiMenuFill } from "react-icons/ri";
import algoliasearch from 'algoliasearch/lite';
import ModalProducts from '../../modals/products/ModalProducts';
import ProductsFromSerach from '../ProductsFromSerach/ProductsFromSerach';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [showModalProducts, setShowModalProducts] = useState(false)
  const authUser = getAuth()
  const auth = getAuth(app)

  const initialValueInput = { description: "" }
  const [conditionalValue, setConditionalValue] = useState(initialValueInput)
  const [results, setResults] = useState<any>(null)

  useEffect(() => {
    authUser.onAuthStateChanged(user => {
      setUserInfo({ id: `${user?.uid}`, photo: `${user?.photoURL}`, name: `${user?.displayName}` })
    }
    )
  }, [results])

  const modalProducts = () => {
    setShowModalProducts(true)
  }

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
  return (
    <>
      <nav className='relative w-full h-[60px] px-2 bg-white shadow-md flex justify-between items-center p-1 rounded-b-lg'>
        <div className='flex gap-3'>
          <div className='text-xl font-semibold capitalize text-red-600'>18</div>
          <RiMenuFill onClick={() => setShowSidebar(!showSidebar)} className="text-3xl text-gray-600 font-bold cursor-pointer" />
        </div>

        <div className='w-full mx-5 relative z-600'>
          <input
            name="description"
            onChange={handleChangeValue}
            className='border-[1px] w-full border-slate-200 rounded-sm h-[40px] pl-3 text-slate-500 p-1'
            type="text"
          />
        </div>
        <div className='flex justify-center items-center'>
          <img className='w-[35px] h-[35px] rounded-full mr-2' src={`${userInfo?.photo}`} alt={userInfo?.name} />
          <p className='capitalize font-semibold text-gray-400'>{userInfo?.name}</p>
        </div>
        {
          conditionalValue.description.length > 0
            ?
            <div className='shadow-lg absolute top-[40px] right-0 md:right-[152px] left-0 md:top-[40px] md:left-[88px] mx-1 my-1 p-2 bg-white rounded-sm'>
              <h3 className='text-slate-700 capitalize font-dmMono text-lg my-5'>productos relacionados</h3>
              {/* <ProductsFromSerach results={results}/> */}
              <div>
                {
                  results &&
                  results.map((item: ProductToCart) => {
                    return (
                      <CopyToClipboard key={item.code} text={item.code as string}>
                        <div className='w-full my-2 border-b-2 cursor-pointer border-slate-100'>
                          <p className='text-slate-600 font-nunito'>{item.code}</p>
                          <h3 className='text-slate-600 capitalize font-nunito' dangerouslySetInnerHTML={testData(`${item.description}`)} />
                          <div className='flex justify-between items-center'>
                            <p className='text-slate-600 font-nunito'>marca: {item.brand}</p>
                            <p className='text-slate-600 font-nunito'>precio: $ {item.price}</p>
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