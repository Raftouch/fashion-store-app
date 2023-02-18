import React, { useState } from 'react'
import { MyProduct } from '../models'

interface ProductProps {
    product: MyProduct
}
// параметр product типа MyProduct

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnColor = details ? 'bg-rose-700 text-rose-100' : 'bg-lime-700 text-green-100'
    const btnColors = ['py-2 px-4 border rounded', btnColor]

    return (
        <div 
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
            >
            <img src={ product.image } className='w-1/6' alt={product.title} />
            <p>{ product.title }</p>
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