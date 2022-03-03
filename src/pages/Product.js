import React from 'react'
import { Button, Rate } from 'antd'
import './Product.css'
import { useLocation } from 'react-router'
import Header from '../components/Header'
import Purchase from '../components/Purchase'

const Product = () => {
  let { state: product } = useLocation()
  return (
    <>
      <div className='container'>
        <Header />
        <div className='product-content'>
          <div>
            <div className='product-img'>
              <img src={product.image} alt='product' width='100%' />
            </div>
            <p style={{ textAlign: 'center' }}>Hover over image to zoom</p>
          </div>
          <div className='product-details'>
            <h1>{product.title}</h1>
            <p>
              Rating: <Rate value={product.rating.rate} disabled={true}></Rate>
            </p>
            <hr />
            <p>
              Price:
              <span className='price'> ${product.price}</span>
            </p>
            <p>No import fees & Free shipping included.</p>
            <hr />
            <h3>About this item</h3>
            <p>{product.description}</p>
          </div>
          <div className='purchase-details'>
            <Purchase product={product} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
