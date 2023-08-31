import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/registtro-ventas.module.css'
import { useGlobalContext } from '../../context/GlobalContext'
import { RiLoader4Line } from "react-icons/ri";
import UpdateCategoryModal from '../../modals/category/UpdateCategoryModal';
import UpdateProductModal from '../../modals/updateProduct/UpdateProductModal';
const initialValueItem = {
  description: "",
  stock: "",
  price: "",
  brand: "",
  category: "",
}

const UpdateProduct = () => {
  const { productByCodeToUpdateContext, stateLoaderFromChargerStock, brands, category, LibraryData } = useGlobalContext()
  const { loaderChargerStock, productToUpdate } = LibraryData
  const focusRef = useRef<HTMLInputElement>(null)
  const initialValue:CodeProduct = { code: "" }
  const [codeProduct, setCodeProduct] = useState(initialValue)
  const [brandActive, setBrandActive] = useState<boolean>(true)
  const [categoryActive, setCategoryActive] = useState<boolean>(true)
  const [showUpdateProductModal, setShowUpdateProductModal] = useState<boolean>(false)
  const [item, setItem] = useState<ProductToCart>(initialValueItem)

  const onChangeCodeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeProduct({
      ...codeProduct,
      [e.target.name]: e.target.value
    })
  }
  const onChangeItem = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }
  const handleActiveBrands = () => {
    setBrandActive(!categoryActive)
    brands()
  }
  const handleActiveCategory = () => {
    setCategoryActive(!categoryActive)
    category()
  }
  useEffect(() => {
    if (codeProduct.code.length === 13) {
      productByCodeToUpdateContext(codeProduct.code)
      stateLoaderFromChargerStock(true)
    }
    if (productToUpdate) {
      setItem(productToUpdate)
    }
  }, [codeProduct.code, productToUpdate.code])

  const testEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
    new KeyboardEvent('keydown', {
      'key': 'Tab'
    })
  }
  return (
    <div className='w-full p-2'>
      {
        showUpdateProductModal
          ?
          <UpdateProductModal 
          initialValueItem={initialValueItem} 
          item={item} 
          setItem={setItem}
          setShowUpdateProductModal={setShowUpdateProductModal} 
          showUpdateProductModal={showUpdateProductModal} 
          initialValue={initialValue}
          setCodeProduct={setCodeProduct}
          />
          :
          null
      }
      <div className='bg-white rounded-lg drop-shadow-md p-2'>
        <label className='capitalize text-slate-600 font-semibold'>ingresa codigo de producto</label>
        <input onChange={onChangeCodeValue} ref={focusRef} onKeyDown={testEnter} className={styles.inputCode} type="text" name="code" value={codeProduct.code} placeholder='ingresa un codigo' />
      </div>
      <div>
        {loaderChargerStock
          ?
          <div className="flex w-full mt-5 items-center m-auto justify-center">
            <RiLoader4Line className="animate-spin text-3xl text-blue-500 " />
            <p className="text-gray-400">buscando producto...</p>
          </div>
          :

          codeProduct.code.length === 0
            ?
            <div className='grid place-content-center mt-5 text-slate-500 bg-white rounded-lg drop-shadow-lg  h-[200px] w-full'> Ingresa un codigo de barra para buscar producto </div>
            :

            <div className='bg-white drop-shadow-lg my-4 p-2 rounded-lg'>
              {item?.description
                &&
                <>
                  <label className='text-slate-500 font-semibold capitalize '>
                    codigo :
                  </label>
                  <input disabled={true} className={styles.inputCode} type="text" placeholder={item?.code} />
                  <label className='text-slate-500 font-semibold capitalize '>
                    descripcion :
                  </label>
                  <input onChange={onChangeItem} name="description" className={styles.inputCode} type="text" value={item?.description} />
                  <label className='text-slate-500 font-semibold capitalize '>
                    precio :
                  </label>
                  <input onChange={onChangeItem} name="price" className={styles.inputCode} type="text" value={item?.price} />
                  <label className='text-slate-500 font-semibold capitalize '>
                    stock :
                  </label>
                  <input disabled={true} className={styles.inputCode} type="text" placeholder={item?.stock} />
                  <div className='block'>
                    <label className='text-slate-500 font-semibold capitalize '>
                      marca de socio :
                    </label>
                    <div className='w-full'>
                      <select name="marcaSocio" onChange={onChangeItem} className='w-full rounded-lg  h-[40px]'>
                        <option value={item?.marcaSocio}>{item?.marcaSocio}</option>
                        <option value="waliky">waliky</option>
                        <option value="waliky-sublimados">waliky-sublimados</option>
                        <option value="libreria-18">libreria-18</option>
                      </select>

                    </div>
                  </div>
                  <label className='text-slate-500 font-semibold capitalize '>
                    marca :
                  </label>
                  <div className='w-full flex gap-4 justify-center items-center'>
                    <select onChange={onChangeItem} name="brand" disabled={brandActive} className='w-full rounded-lg  h-[35px]'>
                      <option value={item?.brand}>{item?.brand}</option>

                      {
                        LibraryData.brands
                        &&
                        LibraryData.brands?.map(brand => {
                          return (
                            <option key={brand.id} value={brand.name}>{brand.name}</option>
                          )
                        })
                      }
                    </select>
                    <button onClick={handleActiveBrands} className='w-[30px] h-[30px] bg-yellow-500 rounded-sm shadow-sm'>E</button>
                  </div>
                  <label className='text-slate-500 font-semibold capitalize '>
                    categoria :
                  </label>
                  <div className='w-full flex gap-4 justify-center items-center'>
                    <select className="w-full rounded-lg  h-[35px]" disabled={categoryActive} onChange={onChangeItem}>
                      <option value={item?.category}>{item?.category}</option>
                      {
                        LibraryData.category
                        &&
                        LibraryData.category?.map(category => {
                          return (
                            <option key={category.id} value={category.name}>{category.name}</option>
                          )
                        })
                      }
                    </select>
                    <button onClick={handleActiveCategory} className='w-[30px] h-[30px] bg-yellow-500 rounded-sm shadow-sm'>E</button>

                  </div>
                  <button onClick={() => setShowUpdateProductModal(!showUpdateProductModal)} className='bg-gradient-to-l from-blue-500 to-blue-400 w-full h-[40px] rounded-lg shadow-lg mt-3 text-slate-700 font-semibold capitalize'>actualizar producto</button>
                </>
              }

            </div>
        }
      </div>
    </div>
  )
}

export default UpdateProduct