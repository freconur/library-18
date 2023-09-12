import React, { useEffect } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import { table } from 'console'
import { todayDate } from '../../dates/date'

const Ventas = () => {
  const { getProductsSalesContext, LibraryData } = useGlobalContext()
  const { getProductsSales } = LibraryData
  useEffect(() => {
    getProductsSalesContext()
  }, [])
  console.log('getProductsSales', getProductsSales)
  return (
    <div className='w-full'>
      <div className='w-full flex justify-end text-slate-500 font-dmMono my-5'>{todayDate()}</div>
      <h1 className='font-dmMono text-slate-600 capitalize text-2xl mb-4'>Mis productos vendidos</h1>

      <div className='rounded-lg shadow mb-5 max-cs:mr-0 mt-5 overflow-auto hidden md:block'>
        <table className='text-slate-500 w-full rounded-lg overflow-hidden  border-[1px] '>
          <thead className=' bg-pastel16 border-b-2 border-gray-200'>
            <tr className="p-5 ">
              <th className='p-1 text-center'>#</th>
              <th className='p-1 text-center'>codigo</th>
              <th className='p-1 w-[768px] text-left'>descripcion</th>
              <th className='p-1 text-center'>precio</th>
              <th className='p-1 text-center'>stock</th>
              <th className='p-1 text-center'>cantidad</th>
            </tr>
          </thead>
          <tbody>
            {
              getProductsSales.length > 0
                ?
                getProductsSales?.map((item, index) => {
                  return (
                    <tr key={item.code}>
                      <td className='text-center'>{index + 1}</td>
                      <td className='text-center'>{item.code}</td>
                      <td className='text-left'>{item.description}</td>
                      <td className='text-center'>{item.price}</td>
                      <td className='text-center'>{item.stock}</td>
                      <td className='text-center'>{item.totalAmountSale}</td>
                    </tr>
                  )
                })
                :
                null
            }
          </tbody>
        </table>
      </div>
      <div>
        <ul className='grid gap-2 md:hidden w-full'>
          {
            getProductsSales.length > 0
              ?
              getProductsSales?.map((item, index) => {
                return (
                  <li key={item.code} className='p-1 rounded-sm shadow-sm text-slate-500 bg-white w-full'>
                    <div className='flex justify-between items-center'>

                      <div className='flex gap-3'>
                        <div className='flex text-white justify-center items-center rounded-full h-[20px] w-[20px] bg-pastel13'>{index + 1}</div>
                        <p className='font-dmMono'>cod: {item.code}</p>
                      </div>
                      <p className='font-nunito capitalize text-pastel12'>cantidad: <span className='font-bold'>{item.totalAmountSale}</span></p>
                    </div>
                    <p className='font-nunito capitalize'>{item.description}</p>

                  </li>
                )
              })
              :
              null
          }
        </ul>
      </div>
    </div>
  )
}

export default Ventas