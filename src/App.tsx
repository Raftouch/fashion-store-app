import React, { useEffect, useState } from 'react'
import { ErrorMsg } from './components/ErrorMsg';
import { Loader } from './components/Loader';
import { Product } from './components/Product'
import { useProducts } from './hooks/products';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const { products, error, loading } = useProducts()

  return (
    <div className='container mx-auto max-w-2xl pt-5'>  
      { loading && <Loader /> }
      { error && <ErrorMsg error={error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }
    
      <Modal>
        <CreateProduct />
      </Modal>
    </div>
  )
}

export default App;
