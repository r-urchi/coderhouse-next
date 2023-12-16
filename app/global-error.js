'use client'
import React from 'react'

const GlobalError = ({ error, reset }) => {
    return (
        <html>
            <body>
                <div className='container m-auto mt-6'>
                    <h2 className='text-xl'>Algo falló</h2>
                    <hr className='my-6' />
                    <button onClick={() => reset()}>Intentar nuevamente</button>
                </div>
            </body>
        </html>
    )
}

export default GlobalError