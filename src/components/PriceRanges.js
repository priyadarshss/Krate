import { Space, InputNumber } from 'antd'
import './PriceRanges.css'

const PriceRanges = ({ priceMin, priceMax, setPriceMin, setPriceMax }) => {
  function changePrice(min, max) {
    setPriceMin(min)
    setPriceMax(max)
  }
  return (
    <>
      <h2>Price Range</h2>
      <div>
      <p className='prices' onClick={() => changePrice(0, 100)}>
        Under $100
      </p>
      <p className='prices' onClick={() => changePrice(100, 200)}>
        $100-$200
      </p>
      <p className='prices' onClick={() => changePrice(200, 300)}>
        $200-$300
      </p>
      <p className='prices' onClick={() => changePrice(300, 500)}>
        $300 & Above
      </p>
      </div>
      <Space>
        <InputNumber
          value={priceMin}
          formatter={(value) => `$ ${value}`}
          onChange={(value) => changePrice(value, priceMax)}
        />
        <InputNumber
          value={priceMax}
          formatter={(value) => `$ ${value}`}
          onChange={(value) => changePrice(priceMin, value)}
        />
      </Space>
      <br />
      <br />
    </>
  )
}

export default PriceRanges
