import React from 'react'
import { useContext } from 'react'
import { ErrorMsg } from '../components/ErrorMsg';
import { Loader } from '../components/Loader';
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { MyProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

export function ProductPage() {
    const { products, error, loading, addProduct } = useProducts()
    const { modal, open, close } = useContext(ModalContext)

    const createHandler = (product: MyProduct) => {
    close()
    addProduct(product)
    }

    return (
    <div className='container mx-auto max-w-2xl pt-5'>  
      { loading && <Loader /> }
      { error && <ErrorMsg error={error} /> }
      { products.map(product => <Product product={product} key={product.id} />) }
    
      {modal && <Modal title='Create new product' onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      <button 
      className='fixed bottom-5 right-5 rounded-full bg-red-800 hover:text-red-200 text-white text-2xl px-5 py-3'
      onClick={open}
      >
        +
      </button>
    </div>
  )
}