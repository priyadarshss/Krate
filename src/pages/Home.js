import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import './Home.css'
import { Carousel, Card } from 'antd'
import Carousel1 from '../images/carousel1.png'
import Carousel2 from '../images/carousel2.png'
import Carousel3 from '../images/carousel3.png'
import Electronics from '../images/electronics.png'
import Jewellery from '../images/jewellery.png'
import Men from '../images/men.png'
import Women from '../images/women.png'

const Home = () => {
  const carousel = [Carousel1, Carousel2, Carousel3]
  const [categories, setCategories] = useState()

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(({ data }) => {
        console.log(data)
        setCategories(data)
      })
  }, [])
  return (
    <>
      <div className='container'>
        <Header />
        <Carousel autoplay className='carousel'>
          {carousel.map((e) => {
            return <img src={e} className='carousel-img' alt='carousel'></img>
          })}
        </Carousel>
        <div className='cards'>
          <Card style={{ borderRadius: '20px' }} className='card'>
            <h1>Electronics</h1>
            <img
              src={Electronics}
              alt='electronics'
              className='card-content'
              style={{ width: '213px', borderRadius: '20px' }}
            ></img>

            <br />
            <Link to='/categories' state={'electronics'} className='link'>
              <button class='button-55'>Shop Now</button>{' '}
            </Link>
          </Card>
          <Card style={{ borderRadius: '20px' }} className='card'>
            <h1>Jewellery</h1>
            <img
              src={Jewellery}
              alt='jewellery'
              className='card-content'
              style={{ width: '248px', borderRadius: '20px' }}
            ></img>
            <br />
            <Link to='/categories' state={'jewelery'} className='link'>
              <button class='button-55'>Shop Now</button>{' '}
            </Link>
          </Card>
          <Card style={{ borderRadius: '20px' }} className='card'>
            <h1>Men's Clothing</h1>
            <img
              src={Men}
              alt='men'
              className='card-content'
              style={{ width: '169px', borderRadius: '20px' }}
            ></img>
            <br />
            <Link to='/categories' state={"men's clothing"} className='link'>
              <button class='button-55'>Shop Now</button>{' '}
            </Link>
          </Card>

          <Card style={{ borderRadius: '20px' }} className='card'>
            <h1>Women's Clothing</h1>
            <img
              src={Women}
              alt='women'
              className='card-content'
              style={{ width: '123px', borderRadius: '20px' }}
            ></img>
            <br />
            <Link to='/categories' state={"women's clothing"} className='link'>
              <button class='button-55'>Shop Now</button>
            </Link>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home
