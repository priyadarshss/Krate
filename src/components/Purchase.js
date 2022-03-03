import React, { useEffect, useState } from 'react'
import { Button, Select, Modal, Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useMoralis } from 'react-moralis'
import axios from 'axios'

const { Option } = Select

function Purchase({ product }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [delivery, setDelivery] = useState('')
  const { Moralis, account, chainId } = useMoralis()
  const [priceEth, setPriceEth] = useState()

  useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
      .then(({ data }) => {
        setPriceEth(product.price / data.USD)
      })
  }, [])

  const handleOk = async () => {
    const options = {
      type: 'native',
      amount: Moralis.Units.ETH(priceEth),
      receiver: '0x09EA01592ACDA28657e51097eBC10ec836Ee3D25',
    }

    await Moralis.enableWeb3()
    let result = await Moralis.transfer(options)

    const Transaction = Moralis.Object.extend('Transaction')
    const transaction = new Transaction()

    transaction.set('Customer', account)
    transaction.set('Delivery', delivery.target.value)
    transaction.set('Product', product.title)
    transaction.save()
    setIsModalVisible(false)
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
    </>
  )
}

export default Purchase
