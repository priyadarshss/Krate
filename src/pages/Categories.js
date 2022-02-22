import React from 'react'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
const Categories = () => {
  const {state: category} = useLocation();
  return (
    <>
      <div className='container'>
        <Button type='primary' onClick={() => console.log(category)}>Categories Page</Button>
      </div>
    </>
  )
}

export default Categories
