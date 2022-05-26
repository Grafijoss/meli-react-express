const mapResultsCategories = (filters = {}) => {
  const { values } = filters.find(filter => filter.id.toLowerCase() === 'category') || {}

  if (values?.length) {
    const mainCategory = values[0]
    const { path_from_root: categories } = mainCategory
    return categories.map(cat => cat.name)
  }

  return values || []
}

const mapItems = (results = []) => (

  results
    .filter((_, idx) => idx < 4)
    .map((result) => {
      const [amount, decimals] = result.price.toString().split('.')

      return ({
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: parseInt(amount, 10),
          decimals: parseInt(decimals, 10) || 0
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping?.free_shipping
      })
    })
)

const mapItemDetail = (item) => {
  const [amount, decimals] = item.price.toString().split('.')
  const { pictures } = item
  const maxSizeImage = pictures.length - 1
  const { url: pictureUrl } = pictures[maxSizeImage]

  return ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: parseInt(amount, 10),
      decimals: parseInt(decimals, 10) || 0
    },
    picture: pictureUrl,
    condition: item.condition,
    free_shipping: item.shipping?.free_shipping,
    sold_quantity: item.sold_quantity,
    categoryId: item.category_id
  })
}

const mapCategories = (categories) => categories.map(cat => cat.name)

module.exports = {
  mapItems,
  mapResultsCategories,
  mapItemDetail,
  mapCategories
}
