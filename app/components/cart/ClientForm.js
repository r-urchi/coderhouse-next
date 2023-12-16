'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import Notification from './Notification'
import { useCartContext } from '../context/CartContext'
import { db } from '@/firebase/config'
import { setDoc, doc, Timestamp, writeBatch, getDoc } from 'firebase/firestore'

const createOrder = async (values, items) => {

    // const docsPromises = items?.map((slug: any) => {
    //     const docRef = doc(db, 'products', slug)
    //     return getDoc(docRef)
    // })

    // const docs = await Promise.all(docsPromises)
    // const batch = writeBatch(db)
    // const outOfStock: any[] = []

    // docs?.forEach((doc: any) => {
    //     const { inStock } = doc.data()
    //     const itemInCart = items?.find((item: any) => item?.slug === doc?.slug)
    //     if (itemInCart?.quantity >= inStock) {
    //         batch.update(doc.ref, { inStock: inStock - itemInCart.quantity })
    //     } else {
    //         outOfStock.push(itemInCart)
    //     }
    // })

    // if (outOfStock.length > 0) {
    //     return outOfStock
    // }

    const order = {
        client: values,
        items: items?.map((item) => ({
            title: item?.title,
            price: item?.price,
            slug: item?.slug,
            quantity: item?.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, 'orders', String(docId))
    // await batch.commit()
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {
    const { cart } = useCartContext()
    const [notification, setNotification] = useState(false)

    const [values, setValues] = useState({
        email: '',
        address: '',
        name: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log(result)
        setNotification(true)
    }

    return (
        <>
            {notification ? <Notification />
                : <>
                    {
                        cart && cart.length ?
                            <form onSubmit={handleSubmit} className='my12'>
                                <input
                                    type="text"
                                    required
                                    placeholder='Nombre'
                                    className='p-2 rounded w-full md:w-1/2 border border-blue-100 block my-4'
                                    name='name'
                                    onChange={handleChange}
                                />

                                <input
                                    type="text"
                                    required
                                    placeholder='Dirección'
                                    className='p-2 rounded w-full md:w-1/2 border border-blue-100 block my-4'
                                    name='address'
                                    onChange={handleChange}
                                />

                                <input
                                    type="email"
                                    required
                                    placeholder='Email'
                                    className='p-2 rounded w-full md:w-1/2 border border-blue-100 block my-4'
                                    name='email'
                                    onChange={handleChange}
                                />

                                <Button type='submit'>Finalizar compra</Button>
                            </form>
                            : <></>
                    }
                </>
            }
        </>
    )
}

export default ClientForm