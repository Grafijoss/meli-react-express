import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './styles.scss'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { getItemByIdProvider } from '../../services'

const Detail = () => {
  const [categories, setCategories] = useState([])
  const [item, setItem] = useState<ItemDetail>()
  const { id } = useParams()

  const fetchItemById = async (id: string | null) => {
    try {
      const { categories: categoriesProvider, item: itemProvider } = await getItemByIdProvider(id)
      console.log({
        itemProvider,
        categoriesProvider
      })

      setCategories(categoriesProvider)
      setItem(itemProvider)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id) {
      fetchItemById(id)
    }
  }, [id])

  const fortamPrice = (price: Price) => {
    return new Intl.NumberFormat(
      'es-ES', {
        currency: price.currency
      }
    ).format(price.amount)
  }

  return (
    <>
      <Breadcrumb categories={categories} />
      <article className='detail'>
        <div className='detail__image'>
          {item?.picture && (
            <img src={item.picture} alt='Imagen del producto' />
          )}
        </div>
        <div className='detail__info'>
          <p className='detail__info__condition'>
            {item?.condition}
          </p>
          <h2 className='detail__info__title'>
            {item?.title}
          </h2>
          {item?.price && (
            <p className='detail__info__price'>
              {fortamPrice(item.price)}
              <span>{item.price.decimals}</span>
            </p>
          )}

          <button className='detail__info__button'>
            Comprar
          </button>
        </div>
        <div className='detail__description'>
          <h3 className='detail__description__title'>
            Descripción del producto
          </h3>
          <p className='detail__description__description'>
            {item?.description}
          </p>
        </div>
      </article>
    </>
  )
}

export default Detail
