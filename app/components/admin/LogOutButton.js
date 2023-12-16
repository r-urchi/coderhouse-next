'use client'
import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import Button from '../ui/Button'

const LogOutButton = () => {

    const { logOut } = useAuthContext()

    return (
        <Button onClick={() => logOut()} className='bg-red-500 mt-8'>Cerrar sesión</Button>
    )
}

export default LogOutButton