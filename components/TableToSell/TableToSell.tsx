import React, { useEffect, useReducer, useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useGlobalContext } from '../../context/GlobalContext';
interface Props {
  productToCart: ProductToCart[] | undefined,
  totalAmountToCart: number,
}
const TableToSell = ({ productToCart, totalAmountToCart }: Props) => {
  const initialAmount = { amount: 0 }
  const { deleteProductCart, incrementAmountToItemFromCart } = useGlobalContext()
  const [valueInputAmount, setValueInputAmount] = useState(initialAmount)
  const [itemcode, setItemCode] = useState<string>("")

  const handleClickItem = (code: string) => {
    setItemCode(code)
  }
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputAmount({
      ...valueInputAmount,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    incrementAmountToItemFromCart(valueInputAmount.amount, itemcode)
  }, [valueInputAmount.amount])

  return (
    <div className='rounded-lg shadow max-cs:mr-0 mt-5 overflow-auto hidden md:block'>
      <table className='w-full rounded-lg overflow-hidden  border-[1px] '>
        <thead className='bg-pastel16 border-b-2 border-gray-200'>
          <tr className="p-5">
            <th className="p-2 text-slate-500 w-[20px] text-left">#</th>
            <th className="p-2 text-slate-500 text-left">codigo</th>
            <th className="p-2 text-slate-500 text-left w-[768px]">descripcion</th>
            <th className="p-2 text-slate-500 text-center">stock</th>
            <th className="p-2 text-slate-500 text-center">marca</th>
            <th className="p-2 text-slate-500 text-center">precio</th>
            <th className="p-2 text-slate-500 text-center">cantidad</th>
            <th className="p-2 text-slate-500 text-center">total</th>
            <th className="p-2 text-slate-500 text-center"></th>
            <th className="p-2 text-slate-500 text-center"></th>

          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {
            productToCart &&
              productToCart.length > 0
              ?
              productToCart?.map((product, index) => {
                return (
                  <tr key={product.code}>
                    <td className='text-slate-500 pl-3 text-left'>{index + 1}</td>
                    <td className='text-slate-500 px-1 text-left'>{product.code}</td>
                    <td className='text-slate-500 px-1 text-left'>{product.description}</td>
                    <td className='text-slate-500 px-3 text-center'>{product.stock}</td>
                    <td className='text-slate-500 px-3 text-center'>{product.brand}</td>
                    <td className='px-3 text-center text-green-500'>S/{product.price}</td>
                    <td className='flex justify-center items-center px-3 text-center text-blue-500 font-semibold'>
                      <input value={product.amount} name="amount" onClick={() => handleClickItem(product.code as string)} onChange={onChangeValue} className={`w-[40px] text-center bg-slate-200 rounded-md outline-none pl-1`} type="number" />
                    </td>
                    <td className='text-slate-500 px-3 text-center'>{(Number(product.amount) * Number(product.price)).toFixed(2)}</td>
                    <td className='text-slate-500 flex justify-center items-center'>
                      <div onClick={() => deleteProductCart(productToCart, product.code)} className='flex items-center justify-center cursor-pointer'>
                        <RiDeleteBin7Fill />
                      </div>
                    </td>
                    {
                      product.warning &&
                      <td className="p-2 text-red-500 text-center">*stock</td>
                    }

                  </tr>
                )
              })
              :
              <tr>
                <td></td>
                <td></td>
                <td className='text-gray-500'>Aun no hay produtos</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="px-2 text-center font-semibold"></td>
              </tr>
          }
          <tr className='h-[35px] bg-pastel17'>
            <td className='text-slate-500 px-3 text-center  capitalize font-semibold'>total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="px-2 text-lg text-green-500 text-center font-semibold">S/{totalAmountToCart.toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableToSell