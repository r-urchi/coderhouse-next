import React from 'react'
import ProductCard from './ProductCard'

const ProductList = async ({ category }) => {

  const items = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`, { 
    cache: 'no-cache',
    next: {
      tags: ['products']
    }
  })
  .then((res) => res?.json())

  return (
    <div className='flex flex-col w-full'>
      <p className='flex justify-end mt-4 mb-8'>Cantidad de productos: {items?.length.toString()}</p>
      {
        items?.length === 0 ? <p className='m-auto'>No se encontraron productos</p>
          :
          <section className='container m-auto flex justify-center items-center gap-12 flex-wrap '>
            {
              items?.map((item) => <ProductCard key={item?.slug} item={item} />)
            }
          </section>
      }
    </div>
  )
}

export default ProductList