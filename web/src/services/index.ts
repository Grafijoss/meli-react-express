import axios from 'axios'

const getItemsByQueryProvider = async (search: string | null) => {
  if (search) {
    const searchData = await axios(`http://localhost:3001/api/items?search=${search}`)
      .then(({ data }) => data)

    return searchData
  }

  return {}
}

const getItemByIdProvider = async (id: string | null) => {
  if (id) {
    const searchData = await axios(`http://localhost:3001/api/items/${id}`)
      .then(({ data }) => data)

    return searchData
  }

  return {}
}

export {
  getItemsByQueryProvider,
  getItemByIdProvider
}
