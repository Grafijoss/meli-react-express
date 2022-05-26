import axios from 'axios'

const getItemsByQueryProvider = async (search: string | null) => {
  if (search) {
    const searchData = await axios(`http://localhost:3001/api/items?search=${search}`)
      .then(({ data }) => data)

    return searchData
  }

  return {}
}

export {
  getItemsByQueryProvider
}
