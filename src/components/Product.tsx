import React, { useState } from 'react'
import { MyProduct } from '../models'

interface ProductProps {
    product: MyProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnColor = details ? 'bg-rose-200 hover:text-rose-900' : 'bg-teal-200 hover:text-teal-900'
    const btnColors = ['py-2 px-4 border rounded text-white', btnColor]

    return (
        <div 
            className='border py-2 px-4 rounded flex flex-col items-center mb-2 text-gray-800'
            >
            <img src={product.image} className='w-1/6' alt={product.title} />
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>

            <button 
            className={btnColors.join(' ')}
            onClick={() => setDetails(prev => !prev)}
            >
                { details ? 'Hide details' : 'Show details' }
            </button>

            {details && <div>
                <p>{ product.description }</p>
                <p>Rate: <span style={{ fontWeight: 'bold' }}>{ product?.rating?.rate }</span></p>
            </div>}
        </div>
    )
}