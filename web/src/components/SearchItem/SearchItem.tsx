import { Link } from 'react-router-dom'

import './styles.scss'

const SearchItem = ({ item }: {item: Item}) => {
  const {
    condition,
    free_shipping: freeShipping,
    id,
    picture,
    price,
    title
  } = item

  const formattedPrice = new Intl.NumberFormat(
    'es-ES', {
      currency: price.currency
    }
  ).format(price.amount)

  return (
    <Link to={`/items/${id}`}>
      <article className='item'>
        <div className='item__image'>
          <img src={picture} alt='Imagen del producto' />
        </div>
        <div className='item__col-info'>
          <p
            className='item__col-info__price'
          >
            {formattedPrice}
            {freeShipping && <span><img src='images/ic_shippin.png' alt='Icono shippin' /></span>}
          </p>
          <p className='item__col-info__title'>
            {title}
          </p>
        </div>
        <div className='item__col-status'>
          <p>{condition}</p>
        </div>
      </article>
    </Link>
  )
}

export default SearchItem
