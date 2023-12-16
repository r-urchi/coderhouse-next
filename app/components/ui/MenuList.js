import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuList = ({ open, handleMenu }) => {

    const pathname = usePathname()

    const links = [
        {
            label: 'Inicio',
            href: '/'
        },
        {
            label: 'Productos',
            href: '/products/all'
        },
        {
            label: 'Nosotros',
            href: '/about'
        },
        {
            label: 'Contacto',
            href: '/contact'
        },
        {
            label: 'Posts',
            href: '/posts'
        },
    ]

    return (
        <div className={`${open ? 'opacity-100 visible' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/50 flex justify-end `}>

            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
                <div onClick={handleMenu} className='flex justify-end align-middle cursor-pointer px-4 py-4'>
                    <Image
                        alt='Close'
                        src={'/close.svg'}
                        width={20}
                        height={20}
                    />
                </div>
                <nav className='flex mt-4 flex-col gap-3 px-3'>
                    {
                        links?.map((link, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={link?.href}
                                    onClick={handleMenu}
                                    className={`${pathname === link?.href ? 'font-bold' : ''} text-base text-slate-100 p-3`}
                                >
                                    {link?.label}
                                </Link>
                            )
                        })
                    }
                </nav>
            </aside>

        </div>
    )
}

export default MenuList