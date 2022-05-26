import NumberFormat from 'react-number-format'
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

  const formatPrice = new Intl.NumberFormat(
    'es-ES', {
      currency: price.currency
    }
  ).format(price.amount)

  return (
    <article className='item'>
      <div className='item__image'>
        <img src={picture} alt='Imagen del producto' />
      </div>
      <div className='item__col-info'>
        <p
          className={`item__col-info__price ${freeShipping ? 'free' : ''}`}
        >
          {formatPrice}
        </p>
        <p className='item__col-info__title'>
          {title}
        </p>
      </div>
      <div className='item__col-status'>
        <p>{condition}</p>
      </div>
    </article>
  )
}

export default SearchItem
