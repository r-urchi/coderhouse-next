import React from 'react'
import Link from 'next/link'

const Notification = () => {
    return (
        <div>
            <p>¡Recibimos tu orden, muchas gracias por tu compra!</p>
            <Link href={'/'} className='font-semibold'>Volver a la tienda</Link>
        </div>
    )
}

export default Notification