import { PageHeader, Button, Input, Space, Badge } from 'antd'
import { useMoralis } from 'react-moralis'
import './Header.css'
import Logo from '../images/logo.png'
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons'
import Ind from '../images/ind.png'
import { Link } from 'react-router-dom'

const { Search } = Input
const categories = [
  'Grocery',
  'Electronics',
  'Fashion',
  'Appliances',
  'Beauty, Toys & More',
]
const Header = () => {
  const { authenticate } = useMoralis()

  return (
    <div className='site-page-header-ghost-wrapper'>
      <PageHeader
        ghost={false}
        extra={[
          <>
            <Link to='/'>
              <img className='logo' src={Logo} alt='Logo' />
            </Link>
            <Search
              className='searchBar'
              placeholder='Search for Product...'
              enterButton
              size='large'
            />
            <Button
              className='login'
              key='1'
              type='primary'
              onClick={() => authenticate()}
            >
              Login
            </Button>
            <Space size={'large'}>
              <Badge count={0} showZero>
                <span className='header-buttons'>
                  <ShoppingCartOutlined className='header-icon' />
                  Cart
                </span>
              </Badge>
              <Space className='header-buttons' size={'small'}>
                <img src={Ind} alt='region' className='flag'></img>▾
              </Space>
            </Space>
          </>,
        ]}
      ></PageHeader>
      <div className='site-page-subheader-ghost-wrapper'>
        <Space size={'middle'}>
          <Space size={'small'} style={{ fontWeight: 'bold' }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories.map((e) => {
            return (
              <Link to='/categories' state={e} className='categories'>
                {e}
              </Link>
            )
          })}
        </Space>
      </div>
    </div>
  )
}

export default Header
