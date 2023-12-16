'use client'
import React, { useState } from 'react'
import MenuList from './MenuList'
import Image from "next/image"

const Menu = () => {

    const [open, setOpen] = useState(false)
    const handleMenu = () => setOpen(!open)

    return (
        <>
            <div onClick={handleMenu} className='flex cursor-pointer'>
                <Image
                    alt='Menu'
                    src={'/menu.svg'}
                    width={40}
                    height={40}
                />
            </div>
            <MenuList open={open} handleMenu={handleMenu} />
        </>
    )
}

export default Menu