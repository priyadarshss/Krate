import React, { useEffect, useState } from 'react'
import { Button, Select, Modal, Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useMoralis } from 'react-moralis'
import axios from 'axios'
import './Purchase.css'
import { Link } from 'react-router-dom'

const { Option } = Select

function Purchase({ product }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [delivery, setDelivery] = useState('')
  const { Moralis, account } = useMoralis()
  const [priceEth, setPriceEth] = useState()

  useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
      .then(({ data }) => {
        setPriceEth(product.price / data.USD)
      })
  }, [product.price])

  const handleOk = async () => {
    const options = {
      type: 'native',
      amount: Moralis.Units.ETH(priceEth),
      receiver: '0x09EA01592ACDA28657e51097eBC10ec836Ee3D25',
    }

    await Moralis.enableWeb3()
    //eslint-disable-next-line
    let result = await Moralis.transfer(options)

    const Transaction = Moralis.Object.extend('Transaction')
    const transaction = new Transaction()

    transaction.set('Customer', account)
    transaction.set('Delivery', delivery.target.value)
    transaction.set('Product', product.title)
    transaction.save()
    setIsModalVisible(false)
    setSuccessModal(true)
  }

  return (
    <>
      <span className='price'>${product.price}</span>
      <p> No Import fees & Free shipping included</p>
      <h1 style={{ color: 'green' }}> In Stock</h1>
      <h3>Quantity</h3>
      <Select defaultValue={1} style={{ width: '100%' }}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
      </Select>
      <Button
        className='login'
        style={{ width: '100%', marginTop: '50px' }}
        onClick={() => setIsModalVisible(true)}
      >
        <ShoppingCartOutlined /> Buy now
      </Button>
      <Modal
        title='Purchase Product'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <div style={{ display: 'flex' }}>
          <img
            src={product.image}
            alt='product'
            style={{ width: '200px', padding: '22px' }}
          />
          <div>
            <h3>{product.title}</h3>
            <h2>
              Price: <span style={{ color: 'darkred' }}>${product.price}</span>
            </h2>
            <h4>Delivery Address:</h4>
            <Input
              onChange={(value) => {
                setDelivery(value)
              }}
            ></Input>
          </div>
        </div>
      </Modal>
      <Modal
        title='Payment Successful'
        visible={successModal}
        footer={null}
        onCancel={() => setSuccessModal(false)}
      >
        <>
          <div className='modal fade' id='myModal' role='dialog'>
            <div className='modal-dialog'>
              <div className='card'>
                <div className='card-img'>
                  <img
                    className='img-fluid'
                    width='100%'
                    src='https://i.imgur.com/4niebFr.jpg'
                    alt=''
                  />{' '}
                </div>
                <div className='card-title'>
                  <p>Success!</p>
                </div>
                <div className='card-text'>
                  <p>
                    Your Payment was Successful! <br />
                    And will arrive soon.
                  </p>
                </div>{' '}
                <Link to='/'>
                  <button className='btn'>Continue Shopping</button>
                </Link>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </>
  )
}

export default Purchase
