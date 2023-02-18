import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white'>
            <span>Find your perfect product here!</span>
            <span>
                <Link to="/" className='mr-5 hover:text-gray-200'>Products</Link>
                <Link to="/about" className='hover:text-gray-200'>About</Link>
            </span>
        </nav>
    )
}