'use client'
import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'
import { useCartContext } from '../context/CartContext'
import Button from '../ui/Button'

const CartList = () => {

    const { cart, emptyCart } = useCartContext()
    const [filteredCart, setFilteredCart] = useState<any>([])

    const productsInCart = () => {
        const combinatedItems = {};

        cart?.map((product) => {
            if (combinatedItems[product?.slug]) {
                combinatedItems[product?.slug].quantity += product?.quantity;
            } else {
                combinatedItems[product?.slug] = { ...product };
            }
        });

        const filteredItems = Object.values(combinatedItems);
        setFilteredCart(filteredItems)
    }

    useEffect(() => {
        productsInCart()
    }, [cart, emptyCart])

    return (
        <>
            {
                filteredCart?.length === 0 ?
                    <p className="text-base my-4">Aún no hay productos en el carrito</p>
                    :
                    <ul>
                        {
                            filteredCart?.map((item) => <CartItem item={item} key={item?.slug} />)
                        }
                    </ul>
            }
            {
                cart?.length !== 0 && (
                    <Button onClick={() => emptyCart()}>
                        Vaciar carrito
                    </Button>
                )
            }
        </>
    )
}

export default CartList