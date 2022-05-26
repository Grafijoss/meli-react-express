const supertest = require('supertest')
const { app, server } = require('../../index')
const {
  mockItemsByQuery,
  mockItemDetailById,
  mockItemDescriptionById,
  mockCategoriesById
} = require('../__fixtures__/mocks')

const api = supertest(app)

jest.mock('../../controllers/controller')

describe('routes', () => {
  describe('/api/items', () => {
    const apiControllers = require('../../controllers/controller')
    apiControllers.getItemsByQuery.mockResolvedValue(mockItemsByQuery)
    test('items are returned as json', async () => {
      await api
        .get('/api/items')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('should return items and categories as empty arrays if id does not exist', async () => {
      const expected = {
        author: {
          name: 'Jose',
          lastname: 'Montenegro'
        },
        items: [],
        categories: []
      }

      const response = await api.get('/api/items')
      expect(response.body).toEqual(expected)
    })

    test('should return items and categories as populated arrays if id does exist', async () => {
      const response = await api.get('/api/items?search=Motorola')
      expect(response.body.author.name).toEqual('Jose')
      expect(response.body.categories).toHaveLength(2)
      expect(response.body.items).toHaveLength(3)
    })
  })
  describe('/items/:id', () => {
    const apiControllers = require('../../controllers/controller')
    apiControllers.getItemById.mockResolvedValue(mockItemDetailById)
    apiControllers.getItemDescriptionById.mockResolvedValue(mockItemDescriptionById)
    apiControllers.getCategoriesById.mockResolvedValue(mockCategoriesById)

    test('item are returned as json', async () => {
      await api
        .get('/api/items/12345')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('should return populated data if query does exist', async () => {
      const response = await api.get('/api/items/54321')

      expect(response.body.author.name).toEqual('Jose')
      expect(response.body.categories).toHaveLength(3)

      expect(response.body).toHaveProperty('item')
      expect(response.body.item).toHaveProperty('id')
      expect(response.body.item).toHaveProperty('title')
      expect(response.body.item).toHaveProperty('price')
      expect(response.body.item).toHaveProperty('picture')
      expect(response.body.item).toHaveProperty('condition', 'new')
      expect(response.body.item).toHaveProperty('free_shipping', true)
      expect(response.body.item).toHaveProperty('sold_quantity', 250)
      expect(response.body.item).toHaveProperty('categoryId', 'MLA82085')

      expect(response.body.item).toHaveProperty('description')
      expect(response.body).toHaveProperty('categories')
    })
  })
})

afterAll(() => {
  server.close()
})
