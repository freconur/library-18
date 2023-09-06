import React, { useEffect, useRef, useState } from 'react'
import LayoutDashboard from '../../layout/LayoutDashboard'
import { useGlobalContext } from '../../context/GlobalContext';
import TableToSell from '../../components/TableToSell/TableToSell';
import { AuthAction, withUser } from 'next-firebase-auth';
import { todayDate } from '../../dates/date';
import { RiLoader4Line } from "react-icons/ri";
import ProductToSaleMobile from '../../components/ProductToSaleMobile/ProductToSaleMobile';

const RegistroVentas = () => {
  const focusRef = useRef<HTMLInputElement>(null)
  const initialValue = { code: "" }
  const { addProductRegisterToSell, LibraryData, soldProducts, stateLoader} = useGlobalContext()
  const [codeBar, setCodeBar] = useState(initialValue)
  const { productToCart, totalAmountToCart, loaderToSell, productNotFound, generateSold } = LibraryData
  const onChangeCodeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeBar({
      ...codeBar,
      [e.target.name]: e.target.value
    })
  };
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
    if (codeBar.code.length === 13) {
      // if (codeBar.code.length === 12 || codeBar.code.length === 13) {
      setCodeBar(codeBar)
      stateLoader(true)
      addProductRegisterToSell(codeBar.code as string, productToCart)
      setCodeBar(initialValue);
    }
  }, [codeBar.code, productToCart, loaderToSell, productNotFound])
  const testEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
    // console.log('key', e.key)
    if(e.key === 'Enter') {
      e.preventDefault()
    }
      new KeyboardEvent('keydown', {
        'key': 'Tab'
      })
  }
  return (
      <>
        <div className='xss:m-0 xss:p-1 md:m-3 w-full'>
          <div className='flex items-center justify-end mb-3 font-nunito text-xs'>
            <h3 className='text-lg  text-gray-400'>{todayDate()}</h3>
          </div>
          <div className='flex justify-between items-center'>
            <h2 className='text-slate-600 font-dmMono text-2xl capitalize'>punto de venta</h2>
            
          </div>
          
          <form className='my-3'>
            <div>
              <label className='text-slate-400 capitalize font-nunito'>codigo de barra</label>
              <input placeholder="ingresa codigo de barra" onKeyDown={testEnter} ref={focusRef} autoFocus value={codeBar.code} 
              onChange={onChangeCodeProduct} name="code" type="text" 
              // className={styles.inputCode} 
              className='pl-2 border-blue-500 w-full border-[1px] rounded-lg h-[40px] outline-none focus-visible:border-[1px] focus-visible:border-blue-500' 
              />
            </div>
          </form>
          <h3 className='text-slate-600 font-dmMono text-lg'>Carrito de compra de cliente</h3>
          <div className='md:hidden  font-dmMono flex justify-between text-sm shadow-md rounded-sm bg-gradient-to-r from-gr-1 from-0% via-gr-2 via-80% to-gr-3 to-100% text-white p-1'>Total: <span className='font-semibold'>$ {totalAmountToCart}</span></div>
          {productNotFound
            ?
            <div className='my-3 text-red-500'>*{productNotFound}</div>
            :
            null
          }
          {
            productToCart &&
            <>
              {loaderToSell
                &&
                <div className="flex w-full mt-5 items-center m-auto justify-center">
                  <RiLoader4Line className="animate-spin text-3xl text-blue-500 " />
                  <p className="text-gray-400">cargando...</p>
                </div>
              }
              <TableToSell productToCart={productToCart} totalAmountToCart={totalAmountToCart} />
              <ProductToSaleMobile productToCart={productToCart} totalAmountToCart={totalAmountToCart}/>
            </>
          }
          {
            generateSold
              ?
              <div className="flex w-full mt-5 items-center m-auto justify-center">
                <RiLoader4Line className="animate-spin text-3xl text-blue-500 " />
                <p className="text-gray-400">generando venta...</p>

              </div>
              // <div>cargando...</div>
              :
              <button disabled={productToCart && productToCart?.length > 0 ? false : true} onClick={() => soldProducts(productToCart)} className={`${productToCart && productToCart.length === 0 ? 'bg-gray-300' : 'bg-blue-500 duration-300 text-md   hover:bg-blue-400'} w-full h-[40px] capitalize font-semibold  rounded-lg text-white my-5`}>generar venta</button>
          }
        </div>
      </>
  )
}
export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(RegistroVentas)