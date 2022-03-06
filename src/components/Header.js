import { PageHeader, Button, Input, Space, Badge, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useMoralis } from 'react-moralis'
import './Header.css'
import Logo from '../images/logo.png'
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import Avatar from './Avatar'

const { Search } = Input

const Header = () => {
  const { authenticate, isAuthenticated, user, logout, setUserData } = useMoralis()
  const [categories, setCategories] = useState()

  const setUsername = () => {
    const username = prompt(
      `Enter you new username (current: ${user.getUsername()})`
    )
    if (!username) return
    setUserData({
      username,
    })
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          style={{ width: '100%', borderRadius: '10px' }}
          target='_blank'
          rel='noopener noreferrer'
          onClick={setUsername}
        >
          Change Username
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          style={{ width: '100%', borderRadius: '10px' }}
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => logout() && window.location.reload()}
        >
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  )

  const handleClick = () => {
    if (!isAuthenticated) {
      return authenticate()
    }
  }
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then(({ data }) => {
        setCategories(data)
      })
  })

  return (
    <div className='site-page-header-ghost-wrapper'>
      <PageHeader
        ghost={false}
        extra={[
          <>
            <Link to='/'>
              <img className='logo' src={Logo} alt='Logo' onClick={() => window.scrollTo(0, 0)} />
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
              onClick={handleClick}
            >
              {user ? (
                <span>{user.getUsername().slice(0, 5)}</span>
              ) : (
                <span>Login</span>
              )}
            </Button>

            <Space size={'large'}>
              <Badge count={0} showZero>
                <span className='header-buttons'>
                  <ShoppingCartOutlined className='header-icon' />
                  Cart
                </span>
              </Badge>
              <Space className='header-buttons' size={'small'}>
              {user ?(
                <img
                  width='80px'
                  src={`https://avatars.dicebear.com/api/adventurer/${user.getUsername()}.svg`}
                  alt=''
                />) : (null)}
              </Space>
            </Space>

            <Dropdown overlay={menu}>
              <Button
                style={{
                  backgroundColor: '#e2d2c6',
                  padding: 0,
                  border: 'none',
                }}
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}
              >
                <DownOutlined />
              </Button>
            </Dropdown>
          </>,
        ]}
      ></PageHeader>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className='site-page-subheader-ghost-wrapper'
      >
        <Space size={'middle'}>
          <Space size={'small'} style={{ fontWeight: 'bold' }}>
            <MenuOutlined />
            CATEGORIES
          </Space>
          {categories
            ? categories.map((e) => {
                return (
                  <Space
                    style={{
                      marginRight: '30px',
                      marginLeft: '30px',
                    }}
                  >
                    <Link to='/categories' state={e} className='categories' onClick={() => window.scrollTo(0, 0)}>
                      {e.toUpperCase()}
                    </Link>
                  </Space>
                )
              })
            : null}
        </Space>
      </div>
    </div>
  )
}

export default Header
