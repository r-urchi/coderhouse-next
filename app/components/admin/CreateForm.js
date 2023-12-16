'use client'
import React, { useState } from 'react'
import Button from '../ui/Button'
import GoBack from '../ui/GoBack'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { db, storage } from '../../../firebase/config'

const createProduct = async (values, file) => {

    const storageRef = ref(storage, values?.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileUrl = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, 'products', values.slug)

    return setDoc(docRef, {
        ...values,
        image: fileUrl
    })
        .then(() => console.log('produto agregado'))
}

const CreateForm = () => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        slug: '',
        type: '',
    })

    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e?.target?.name]: e?.target?.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }

    return (
        <div className='container p-4 m-auto mt-6 max-w-lg'>
                  <GoBack className='font-semibold'/>
            <form onSubmit={handleSubmit} className='my-12'>
                <label >Slug:</label>
                <input
                    type="text"
                    value={values?.slug}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='slug'
                    onChange={handleChange}
                />

                <label >Imagen:</label>
                <input
                    required
                    type="file" 
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='image'
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <label >Título:</label>
                <input
                    type="text"
                    value={values?.title}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='title'
                    onChange={handleChange}
                />

                <label >Descripción:</label>
                <textarea
                    value={values?.description}
                    className='resize-none p-2 rounded w-full border border-blue-100 block my-4'
                    name='description'
                    onChange={handleChange}
                />

                <label >Categoría:</label>
                <input
                    type="text"
                    value={values?.type}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='type'
                    onChange={handleChange}
                />

                <label >Precio:</label>
                <input
                    type="number"
                    value={values?.price}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='price'
                    onChange={handleChange}
                />

                <label >Stock:</label>
                <input
                    type="number"
                    value={values?.inStock}
                    required
                    className='p-2 rounded w-full border border-blue-100 block my-4'
                    name='inStock'
                    onChange={handleChange}
                />

                <Button type="submit">Enviar</Button>
            </form>
        </div>
    )
}

export default CreateForm