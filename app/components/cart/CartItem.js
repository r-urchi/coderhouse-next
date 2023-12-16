import React from 'react'
import Image from 'next/image'

const CartItem = (item) => {

  const { image, price, quantity, title } = item?.item

  return (
    <div className='container mb-4 flex justify-start align-middle border bottom-1 p-4'>

      <div className='w-full '>
        <h2 className='text-base md:text-xl font-semibold pb-4 mb-4'>{title}</h2>
        <p className='text-xs mb-2'>Unidades: {quantity.toString()}</p>
        <p className='text-base md:text-4xl'>$ {new Intl.NumberFormat('es-ar').format(Number((price * quantity).toString()))}</p>
      </div>

      <div className='relative basis-1/2'>
        <Image
          src={image}
          alt='Producto'
          width={100}
          height={100}
        />
      </div>

    </div>
  )
}

export default CartItem