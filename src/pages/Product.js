import React from 'react'
import { Button, Rate } from 'antd'
import './Product.css'
import { useLocation } from 'react-router'
import Header from '../components/Header'
import Purchase from '../components/Purchase'

const Product = () => {
  let { state: book } = useLocation()
  return (
    <>
      <div className='container'>
        <Header />
        <div className='product-content'>
          <div>
            <div className='product-img'>
              <img src={book.image} alt='product' width='100%' />
            </div>
            <p style={{ textAlign: 'center' }}>Hover over image to zoom</p>
          </div>
          <div className='product-details'>
            <h1>{book.title}</h1>
            <p>
              Rating: <Rate value={book.rating.rate} disabled={true}></Rate>
            </p>
            <hr />
            <p>
              Price:
              <span className='price'> ${book.price}</span>
            </p>
            <p>No import fees & Free shipping included.</p>
            <hr />
            <h3>About this item</h3>
            <p>{book.description}</p>
          </div>
          <div className='purchase-details'>
            <Purchase book={book} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
