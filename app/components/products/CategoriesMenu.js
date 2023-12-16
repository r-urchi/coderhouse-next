'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const CategoriesMenu = () => {
    
    const pathname = usePathname()

    const links = [
        { label: 'Todos', href: '/products/all' },
        { label: 'TVs', href: '/products/tvs' },
        { label: 'Aires', href: '/products/aires' },
        { label: 'Hornos', href: '/products/hornos' }
    ]

    return (
        <aside className='flex md:flex-col gap-3'>
            {
                links?.map((link) => (
                    <Link
                        key={link?.label}
                        href={link?.href}
                        className={`${pathname === link?.href ? 'font-semibold border-b' : ''} py-2`}
                    >
                        {link?.label}
                    </Link>
                ))
            }
        </aside>
    )
}

export default CategoriesMenu