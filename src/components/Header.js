import { PageHeader, Button, Input, Space, Badge, Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { useMoralis } from 'react-moralis'
import './Header.css'
import Logo from '../images/logo.png'
import Ind from '../images/ind.png'

import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import Avatar from './Avatar'

const { Search } = Input

const Header = () => {
  const { authenticate, isAuthenticated, user, logout, setUserData } =
    useMoralis()
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
        <a target='_blank' rel='noopener noreferrer' onClick={setUsername}>
          Change Username
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => logout() && window.location.reload()}
        >
          Logout
        </a>
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
                <img src={Ind} alt='region' className='flag'></img>▾
              </Space>
            </Space>

            {/* <Avatar /> */}

            <Dropdown overlay={menu}>
              <a
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}
                style={{ padding: '0' }}
              >
                <DownOutlined />
              </a>
            </Dropdown>
          </>,
        ]}
      ></PageHeader>
      <div className='site-page-subheader-ghost-wrapper'>
        <Space size={'middle'}>
          <Space size={'small'} style={{ fontWeight: 'bold' }}>
            <MenuOutlined />
            Categories
          </Space>
          {categories
            ? categories.map((e) => {
                return (
                  <Link to='/categories' state={e} className='categories'>
                    {e}
                  </Link>
                )
              })
            : null}
        </Space>
      </div>
    </div>
  )
}

export default Header
