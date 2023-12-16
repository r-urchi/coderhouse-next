import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ item }) => {

  return (
    <article className='basis-72 shadow-lg rounded h-auto '>
      <Link
        href={`/products/detail/${item?.slug}`}
        className='flex flex-col'
      >
        <Image
          alt={item?.title ? item?.title : 'Producto'}
          src={item?.image}
          width={288}
          height={288}
          style={{ objectFit: 'contain', minHeight: '288px', maxHeight: '288px' }}
        />

        <div className='px-4 border-t border-gray-200'>
          <h4 className='text-sm my-4'>{item?.title}</h4>
          <p className='text-2xl font-semibold mb-6'>$ {new Intl.NumberFormat('es-ar').format(Number(item?.price))}</p>
        </div>

        {
          item?.inStock === 0 && (
            <p className='font-smibold text-red-500'>
              Producto sin stock
            </p>
          )
        }
      </Link>

    </article>
  )
}

export default ProductCard