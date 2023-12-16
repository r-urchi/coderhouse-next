import React from 'react'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className='w-full bg-gray-100 border-t mt-8'>
            <div className='container m-auto py-2 px-4 text-sm text-gray-700 flex flex-col sm:flex-row justify-between items-center'>
                <p>Desarrollado por Ramón Urchipia</p>
                <div className='flex items-center gap-2'>
                    <p>Powered by</p>
                    <Image
                        alt='NextJS'
                        src={'/next.svg'}
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer