'use client'
import React, { useState } from 'react'
import ProductCatalog from '../components/admin/ProductCatalog'
import Button from '../components/ui/Button'
import LogOutButton from '../components/admin/LogOutButton'

const Admin = () => {

    return (
        <>
            <main className="container m-auto p-4 min-h-screen">
                <LogOutButton />
                <h1 className="text-2xl border-b pb-4 my-4">Admin</h1>
                <ProductCatalog />
            </main>
        </>
    )
}

export default Admin