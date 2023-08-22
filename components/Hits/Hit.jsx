import React from 'react'
// interface Props {
//   hit: ProductToCart
// }
const Hit = ({ hit }) => {
  return (
      <div className='flex justify-center items-center w-full p-1'>
        <p className='w-[150px] pr-3'>{hit.code}</p>
        <p className='w-[50%]  pr-3 items-center'>{hit.description}</p>
        <p className='w-[10%] pr-3 items-center'>{hit.brand}</p>
        <p className='w-[10%] flex items-center justify-center text-green-600'>S/{hit.price}</p>
        <p className='w-[10%] flex items-center justify-center text-blue-600'>{hit.stock}</p>
      </div>
  )
}

export default Hit