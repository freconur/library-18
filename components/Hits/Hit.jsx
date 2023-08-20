import React from 'react'
// interface Props {
//   hit: ProductToCart
// }
const Hit = ({ hit }) => {
  return (
      <div className='flex justify-center items-center w-full'>
        <p className='w-[150px] pr-3'>{hit.code}</p>
        <p className='w-[400px]  pr-3items-center'>{hit.description}</p>
        <p className='w-[10%] pr-3 items-center'>{hit.brand}</p>
        <p className='w-[50px] items-center'>S/{hit.price}</p>
        <p className='w-[50px] pl-5 flex items-center justify-center'>{hit.stock}</p>
      </div>
  )
}

export default Hit