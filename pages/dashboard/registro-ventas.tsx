import React, { useEffect, useRef, useState } from 'react'
import LayoutDashboard from '../../layout/LayoutDashboard'
import { useGlobalContext } from '../../context/GlobalContext';
import TableToSell from '../../components/TableToSell/TableToSell';
import { AuthAction, useUser, withUser } from 'next-firebase-auth';
import { todayDate } from '../../dates/date';
import { RiLoader4Line, RiShoppingCartFill } from "react-icons/ri";
import ProductToSaleMobile from '../../components/ProductToSaleMobile/ProductToSaleMobile';
import SaleModal from '../../modals/sale/SaleModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProductCartToProductSales } from '../../reducer/Product';
import TestNavbar from '../../components/Navbar/TestNavbar';
import Navbar from '../../components/Navbar/Navbar';
const RegistroVentas = () => {
  const dataUser = useUser()
  const focusRef = useRef<HTMLInputElement>(null)
  const initialValue = { code: "" }
  const { addProductRegisterToSell, LibraryData, showGenerateSale, stateLoader, resetValueToastify, getDataUser } = useGlobalContext()
  const [codeBar, setCodeBar] = useState(initialValue)
  const { productToCart, totalAmountToCart, loaderToSell, showSaleModal, productNotFound, tostifyNotificationSales, generateSold } = LibraryData
  const onChangeCodeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeBar({
      ...codeBar,
      [e.target.name]: e.target.value
    })
  };
  const successToastify = () => {
    console.log('estamos entrando')
    toast.success('venta exitosa!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }
  // useEffect(() => {
  //   if(dataUser.id){
  //     getDataUser(dataUser.id)
  //   }
  // },[dataUser.id,dataUser])
  useEffect(() => {

    resetValueToastify()
    if (focusRef.current) {
      focusRef.current.focus();
    }
    if (codeBar.code.length === 13) {
      resetValueToastify()
      setCodeBar(codeBar)
      stateLoader(true)
      addProductRegisterToSell(codeBar.code as string, productToCart)
      setCodeBar(initialValue);
    }
    if (tostifyNotificationSales === 1) {
      successToastify()
    }
  }, [codeBar.code, productToCart, loaderToSell, productNotFound])
  const testEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    new KeyboardEvent('keydown', {
      'key': 'Tab'
    })
  }
  return (
    <LayoutDashboard>
      <Navbar  dataUser={dataUser}/>
    <>
      <ToastContainer />
      {
        showSaleModal &&
        <SaleModal generateSold={generateSold} />
      }
      <div className='relative h-sales m-0 p-1  w-full mb-[110px]'>
      {/* <TestNavbar dataUser={dataUser}/> */}
        {/* <div className='relavite'> */}
        <div className='flex items-center justify-end mb-3 font-nunito text-xs'>
          <h3 className='text-lg  text-gray-400'>{todayDate()}</h3>
        </div>
        <div className='flex justify-between items-center'>
          <h2 className='text-slate-600 font-dmMono text-2xl capitalize'>punto de venta</h2>

        </div>

        <div className='flex gap-2 mb-2'>
          <div className='text-slate-600 font-dmMono text-lg flex justify-center items-center'>
            <RiShoppingCartFill />
          </div>
          <h3 className='text-slate-600 font-dmMono text-lg'>
            Carrito de compra de cliente
          </h3>
          {/* {
            productToCart ?
          <button className='bg-blue-500 p-2 text-white font-dmMono' onClick={() => addProductCartToProductSales(productToCart)}>test</button>
          :
          null
          } */}
        </div>

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
            <ProductToSaleMobile productToCart={productToCart} totalAmountToCart={totalAmountToCart} />
          </>
        }
        <div className='w-full fixed bottom-0 bg-white left-0 right-0 p-1'>
          <div className='md:hidden  font-dmMono flex justify-between text-sm shadow-md rounded-sm bg-pastel14 text-white p-1 mb-1'>Total: <span className='font-semibold'>$ {totalAmountToCart.toFixed(2)}</span></div>
          <form className='mb-1 sticky top-[10px]'>
            <div>
              {/* <label className='text-slate-400 capitalize font-nunito'>codigo de barra</label> */}
              <input placeholder="ingresa codigo de barra" onKeyDown={testEnter} ref={focusRef} autoFocus value={codeBar.code}
                onChange={onChangeCodeProduct} name="code" type="text"
                // className={styles.inputCode} 
                className='pl-2 border-blue-500 w-full border-[1px] rounded-lg h-[40px] outline-none focus-visible:border-[1px] focus-visible:border-blue-500'
              />

            </div>
          </form>
          <button disabled={productToCart && productToCart?.length > 0 ? false : true} onClick={() => showGenerateSale(showSaleModal)} className={`${productToCart && productToCart.length === 0 ? 'bg-gray-300' : 'bg-pastel11 duration-300 text-md   hover:bg-pastel12'} h-[40px] capitalize font-semibold  rounded-lg text-white duration-300 shadow-lg w-full`}>generar venta</button>
        </div>
        {/* </div> */}
      </div>
    </>
    </LayoutDashboard>
  )
}
export default withUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(RegistroVentas)