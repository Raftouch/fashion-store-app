import React, {useState} from 'react'
import { MyProduct } from '../models'
import axios from 'axios'
import { ErrorMsg } from './ErrorMsg'

const productData: MyProduct =  {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 39,
        count: 8
    }
}

interface CreateProductProps {
    onCreate: (product: MyProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title')
            return
        }

        productData.title = value

        const response = await axios.post<MyProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
            type='text'
            className='py-2 px-4 mb-2 border w-full outline-none text-gray-800'
            placeholder='Please add your product here'
            value={value}
            onChange={event => setValue(event.target.value)}
            />

            {error && <ErrorMsg error={error}/>}

            <button 
            type='submit' 
            className='py-2 px-4 mb-2 text-white bg-rose-200 hover:text-red-800'
            >
                Create
            </button>
        </form>
    )
}