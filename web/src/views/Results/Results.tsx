import { useEffect, useState } from 'react'
import { getItemsByQueryProvider } from '../../services'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import SearchItem from '../../components/SearchItem/SearchItem'
import Loading from '../../components/Loading/Loading'
import './styles.scss'

const Results = ({ search }: {search: string | null}) => {
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchItemsAndCategories = async (search: string | null) => {
    try {
      const {
        categories: categoriesProvider,
        items: itemsProvider
      } = await getItemsByQueryProvider(search)

      setCategories(categoriesProvider)
      setItems(itemsProvider)
      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (search) {
      fetchItemsAndCategories(search)
    }
  }, [search])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Breadcrumb categories={categories} />
      {items.length > 0 && (
        <div className='items-container'>
          {
            items.map((item: Item) => (
              <SearchItem item={item} key={item.id} />
            ))
          }
        </div>
      )}
    </>
  )
}

export default Results
