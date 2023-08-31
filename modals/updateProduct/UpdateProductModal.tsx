import React from 'react'
import { createPortal } from 'react-dom';
import styles from '../../styles/UpdateProduct.module.css'
import { updateProduct } from '../../reducer/UpdateProducts';

interface Props {
  setItem:React.Dispatch<React.SetStateAction<ProductToCart>>
  initialValueItem: ProductToCart
  item: ProductToCart
  setShowUpdateProductModal: React.Dispatch<React.SetStateAction<boolean>>
  showUpdateProductModal: boolean
  initialValue: CodeProduct
  setCodeProduct:React.Dispatch<React.SetStateAction<CodeProduct>>
}
const UpdateProductModal = ({initialValue,setCodeProduct,initialValueItem, setItem,item, setShowUpdateProductModal, showUpdateProductModal} : Props) => {
  let container
  if (typeof window !== "undefined") {
    container = document.getElementById("portal-modal");
  }
  const update = () => {
    updateProduct(item); 
    setItem(initialValueItem); 
    setShowUpdateProductModal(!showUpdateProductModal)
    setCodeProduct(initialValue)
  }
  return container
  ? createPortal(
    <div className={styles.containerModal}>
      {/* <div className="bg-modal  backdrop-blur-[0.5px] fixed inset-0 z-30 md:hidden"> */}
      <div className={styles.containerDelete}>
        <h3 className={styles.title}>Estas seguro que quieres actualizar los datos de este producto?, si es asi, dale en actualizar.</h3>
        <div className={styles.buttonContainer}>
          {/* <button onClick={() => setShowModalDeleteFlashcard(!showModalDeleteFlashcard)} className={styles.buttonCancel}>cancelar</button> */}
          <button onClick={() => setShowUpdateProductModal(!showUpdateProductModal)}  className={styles.buttonCancel}>cancelar</button>
          {/* <button onClick={handleDeleteFlashcard} className={styles.buttonDelete}>OK</button> */}
          <button onClick={update} className={styles.buttonDelete}>actualizar</button>
        </div>
      </div>
    </div>,
    container
  )
  : null;
}

export default UpdateProductModal