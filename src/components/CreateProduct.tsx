import React from 'react'

export function CreateProduct() {
    return (
        <form >
            <input 
            type='text'
            className='py-2 px-4 mb-2 border w-full outline-0'
            placeholder='Please add your product here'
            />

            <button 
            type='submit' 
            className='py-2 px-4 mb-2 bg-sky-800 text-white hover:bg-lime-800'
            >
                Create
            </button>
        </form>
    )
}