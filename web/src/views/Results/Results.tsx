import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getItemsByQueryProvider } from '../../services'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import SearchItem from '../../components/SearchItem/SearchItem'
import './styles.scss'

const Results = () => {
  const [searchParams] = useSearchParams()
  const [categories, setCategories] = useState([])
  const [items, setItems] = useState([])

  const fetchItemsAndCategories = async (search: string | null) => {
    try {
      const {
        categories: categoriesProvider,
        items: itemsProvider
      } = await getItemsByQueryProvider(search)

      console.log({
        itemsProvider
      })

      setCategories(categoriesProvider)
      setItems(itemsProvider)
    } catch (err) {
      console.log(err)
    }
  }

  const search = searchParams.get('search')

  useEffect(() => {
    fetchItemsAndCategories(search)
  }, [search])

  return (
    <>
      {categories.length > 0 && <Breadcrumb categories={categories} />}
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
