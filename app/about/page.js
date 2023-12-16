'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Button from '../components/ui/Button'

// export const metadata = {
//     title: 'Electrodomesticos Capellari - Nosotros',
//     description: 'Conoce nuestra historia'
// }

const About = () => {

    const router = useRouter()

    return (
        <>
            <main className='container p-4 m-auto min-h-screen'>
                <h1 className='text-2xl border-b pb-4 my-4'>Nosotros</h1>
                <p className='text-base my-4'>SITIO EN CONSTRUCCIÓN</p>
                <Button onClick={() => router.back()}>
                    Volver
                </Button>
            </main>
        </>
    )
}

export default About