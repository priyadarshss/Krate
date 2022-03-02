import React, { useState } from 'react'
import { Button, Select, Modal, Input } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

function Purchase({ book }) {
  const { Option } = Select
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [delivery, setDelivery] = useState('')
  return (
    <>
      <span className='price'>${book.price}</span>
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
        // onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <div style={{ display: 'flex' }}>
          <img
            src={book.image}
            alt='product'
            style={{ width: '200px', padding: '22px' }}
          />
          <div>
            <h3>{book.title}</h3>
            <h2>
              Price: <span style={{ color: 'darkred' }}>${book.price}</span>
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
