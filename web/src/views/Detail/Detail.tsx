import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './styles.scss'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { getItemByIdProvider } from '../../services'
import Loading from '../../components/Loading/Loading'

const Detail = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState<ItemDetail>()
  const { id } = useParams()

  const fetchItemById = async (id: string | null) => {
    try {
      const { categories: categoriesProvider, item: itemProvider } = await getItemByIdProvider(id)

      setCategories(categoriesProvider)
      setItem(itemProvider)
      setLoading(false)
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

  if (loading) {
    return <Loading testName='loading-detail-page' />
  }

  return (
    <>
      <Helmet>
        <title>Detalle {id}</title>
      </Helmet>
      <Breadcrumb categories={categories} />
      <article className='detail' data-testid='detail-container'>
        <div className='detail__image'>
          {item?.picture && (
            <img src={item.picture} alt='Imagen del producto' />
          )}
        </div>
        <div className='detail__info'>
          <p className='detail__info__condition' data-testid='detail-condition'>
            {item?.condition}
          </p>
          <h2 className='detail__info__title' data-testid='detail-title'>
            {item?.title}
          </h2>
          {item?.price && (
            <p className='detail__info__price' data-testid='detail-price'>
              {fortamPrice(item.price)}
            </p>
          )}

          <button className='detail__info__button'>
            Comprar
          </button>
        </div>
        <div className='detail__description'>
          <h3 className='detail__description__title'>
            Descripci??n del producto
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
