import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import Menu from './Menu'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <header className='w-full bg-gray-600'>
            <div className='container m-auto py-6 px-4 flex justify-between items-center'>
                <Link href={'/'}>
                    <Image
                        alt="Logo"
                        src={'/capellari.png'}
                        width={100}
                        height={100}
                        priority
                    />
                </Link>
                <div className='flex justify-center align-middle'>
                    <Menu />
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default Navbar