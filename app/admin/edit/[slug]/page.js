import React from 'react'
import EditForm from '../../../components/admin/EditForm'

const EditPage = async ({ params }) => {

    const { slug } = params

    const item = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${slug}`, {
        cache: 'no-cache',
        
    })
        .then(res => res.json())

    return (
        <div>
            <EditForm item={item} />
        </div>
    )
}

export default EditPage