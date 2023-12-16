'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'

const ContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        text: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e) => {
        e?.preventDefault()
        await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/contact`,
            {
                method: 'POST',
                body: JSON.stringify(values)
            }
        )
    }

    return (
        <form onSubmit={handleSubmit} className='my-12'>
            <input
                type="email"
                required
                placeholder='Tu email'
                className='p-2 rounded w-full max-w-lg border border-blue-100 block my-4'
                name='email'
                onChange={handleChange}
            />
            <textarea
                required
                placeholder='Tu mensaje'
                className='resize-none w-full max-w-lg h-24 p-2 rounded border border-blue-100 block my-4'
                name='text'
                onChange={handleChange}
            />
            <Button type='submit'>Enviar</Button>
        </form>
    )
}

export default ContactForm