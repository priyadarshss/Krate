import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Home.css'
import { Carousel, Card, Divider } from 'antd'
import Carousel1 from '../images/carousel1.png'
import Carousel2 from '../images/carousel2.png'
import Carousel3 from '../images/carousel3.png'
import Carousel4 from '../images/carousel4.png'
import Electronics from '../images/electronics.png'
import Jewellery from '../images/jewellery.png'
import Men from '../images/men.png'
import Women from '../images/women.png'
import Footer from '../components/Footer'

const Home = () => {
  const carousel = [Carousel1, Carousel3,Carousel2, Carousel4 ]
  
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
            <Divider style={{ marginTop: '-10px', marginBottom: '10px' }} />
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
            <Divider style={{ marginTop: '-10px', marginBottom: '10px' }} />

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
            <Divider style={{ marginTop: '-10px', marginBottom: '10px' }} />

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
            <Divider style={{ marginTop: '-10px', marginBottom: '10px' }} />

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
        <Footer/>
      </div>
    </>
  )
}

export default Home
