import './Results.css'
import { books } from '../books.js'

function Results({ category, rating, priceMin, priceMax }) {
  const bookCategory = books[category]
    .filter((x) => x.rating >= rating)
    .filter((x) => x.price > priceMin)
    .filter((x) => x.price <= priceMax)
  return <></>
}

export default Results
