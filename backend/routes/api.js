const express = require('express')
const router = express.Router()

const {
  getItemsByQuery,
  getItemById,
  getItemDescriptionById,
  getCategoriesById
} = require('../controllers/controller')

router.get('/items', async (request, response) => {
  const { search } = request.query

  if (search) {
    const itemsByQuery = await getItemsByQuery(search)
    return response.send({
      author: {
        name: 'Jose',
        lastname: 'Montenegro'
      },
      ...itemsByQuery
    })
  }

  return response.send({
    author: {
      name: 'Jose',
      lastname: 'Montenegro'
    },
    items: [],
    categories: []
  })
})

router.get('/items/:id', async (request, response) => {
  const { id } = request.params

  const itemDetailById = await getItemById(id)
  const description = await getItemDescriptionById(id)
  const categories = await getCategoriesById(itemDetailById.item.categoryId)

  response.send({
    author: {
      name: 'Jose',
      lastname: 'Montenegro'
    },
    ...itemDetailById,
    description,
    categories
  })
})

module.exports = router
