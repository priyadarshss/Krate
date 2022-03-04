import { Card, Rate, Spin } from 'antd'
import { Link } from 'react-router-dom'
import './Results.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Results({ category, rating, priceMin, priceMax }) {
  const [productCategory, setProductCategory] = useState()
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then(({ data }) => {
        setProductCategory(
          data
            .filter((x) => x.rating.rate >= rating)
            .filter((x) => x.price > priceMin)
            .filter((x) => x.price <= priceMax)
        )
      })
  }, [category, priceMin, priceMax, rating])
  return (
    <>
      {productCategory ? (
        productCategory.map((product, i) => {
          return (
            <Card>
              <div style={{ display: 'flex' }}>
                <img
                  src={product.image}
                  alt={i}
                  width='200px'
                  style={{ width: '270px', padding: '40px' }}
                ></img>
                <div>
                  <p className='title'>{product.title}</p>
                  <Rate value={product.rating.rate} disabled={false}></Rate>
                  <h2> ${product.price}</h2>
                  <p>Ships to Your Location</p>
                  <Link to='/product' state={product} className='login'>
                    Go to Product Page
                  </Link>
                </div>
              </div>
            </Card>
          )
        })
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spin size='large' />
        </div>
      )}
    </>
  )
}

export default Results
