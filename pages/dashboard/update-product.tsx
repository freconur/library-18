import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/registtro-ventas.module.css'
import { useGlobalContext } from '../../context/GlobalContext'
import { RiLoader4Line } from "react-icons/ri";
import UpdateProductModal from '../../modals/updateProduct/UpdateProductModal';
import FormUpdate from '../../components/FormUPdate/FormUpdate';
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
      <FormUpdate handleActiveBrands={handleActiveBrands} handleActiveCategory={handleActiveCategory} loaderChargerStock={loaderChargerStock} codeProduct={codeProduct.code} item={item} brandActive={brandActive} brands={LibraryData.brands} category={LibraryData.category} setShowUpdateProductModal={setShowUpdateProductModal} showUpdateProductModal={showUpdateProductModal} onChangeItem={onChangeItem} categoryActive={categoryActive}/>
      <div>
        
      </div>
    </div>
  )
}

export default UpdateProduct