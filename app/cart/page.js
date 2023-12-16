import React from 'react'
import CartList from '../components/cart/CartList'
import ClientForm from '../components/cart/ClientForm'
import GoBack from '../components/ui/GoBack'

const Cart = () => {

    return (
        <>
            <main className="container p-4 m-auto min-h-screen">
                <h2 className="text-2xl border-b pb-4 my-4">Carrito</h2>
                <GoBack className='text-sm underline mb-6' />
                <CartList />
                <ClientForm />
            </main>
        </>
    )
}

export default Cart