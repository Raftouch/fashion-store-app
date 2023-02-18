import React, { useEffect, useState } from 'react'
import { ErrorMsg } from './components/ErrorMsg';
import { Loader } from './components/Loader';
import { Product } from './components/Product'
import { useProducts } from './hooks/products';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { MyProduct } from './models';

function App() {
  const { products, error, loading, addProduct } = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: MyProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className='container mx-auto max-w-2xl pt-5'>  
      { loading && <Loader /> }
      { error && <ErrorMsg error={error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }
    
      {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button 
      className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-5 py-3'
      onClick={() => setModal(true)}
      >
        +
      </button>
    </div>
  )
}

export default App;