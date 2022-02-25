import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Rating from '../components/Rating'
import PriceRanges from '../components/PriceRanges'
import Results from '../components/Results'

const Categories = () => {
  const { Sider, Content } = Layout
  const { state: category } = useLocation()
  const [rating, setRating] = useState(1)
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(100)

  return (
    <>
      <div className='container'>
        <Header />
        <div className='results-header'>
          <span>Showing products for </span>
          <span className='category'>"{category}"</span>
        </div>

        <Layout>
          <Sider width='320px' theme='light' style={{ padding: '25px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}></div>
            <Rating rating={rating} setRating={setRating} />
            <PriceRanges
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
            />
            <Button
              className='login'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '270px',
              }}
            >
              Apply Filters
            </Button>
          </Sider>
          <Content
            theme='light'
            style={{ padding: '35px', backgroundColor: 'white' }}
          >
            RESULTS
            <Results
              category={category}
              rating={rating}
              priceMin={priceMin}
              priceMax={priceMax}
            />
          </Content>
        </Layout>
      </div>
    </>
  )
}

export default Categories
