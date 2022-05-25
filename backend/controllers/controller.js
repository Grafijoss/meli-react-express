const axios = require('axios')
const { mapItems, mapResultsCategories, mapItemDetail, mapCategories } = require('./mappers')

const getItemsByQuery = async (query) => {
  try {
    const searchData = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then(({ data }) => data)

    return {
      categories: mapResultsCategories(searchData.filters),
      items: mapItems(searchData.results)
    }
  } catch (err) {
    return err
  }
}

const getItemById = async (id) => {
  try {
    const item = await axios(`https://api.mercadolibre.com/items/${id}`)
      .then(({ data }) => data)

    return mapItemDetail(item)
  } catch (err) {
    return err
  }
}

const getItemDescriptionById = async (id) => {
  try {
    const { plain_text: description } = await axios(`https://api.mercadolibre.com/items/${id}/description`)
      .then(({ data }) => data)

    return description
  } catch (err) {
    return err
  }
}

const getCategoriesById = async (categorieId) => {
  try {
    const categories = await axios(`https://api.mercadolibre.com/categories/${categorieId}`)
      .then(({ data }) => data)

    return mapCategories(categories?.path_from_root || [])
  } catch (err) {
    return err
  }
}

module.exports = {
  getItemsByQuery,
  getItemById,
  getItemDescriptionById,
  getCategoriesById
}
