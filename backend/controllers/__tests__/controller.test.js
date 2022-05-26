const axios = require('axios')
const {
  mockItemsByQuery,
  mockItemById,
  mockItemDescriptionById,
  mockCategoriesById
} = require('../__fixtures__/mocks')

const {
  getItemsByQuery,
  getItemById,
  getItemDescriptionById,
  getCategoriesById
} = require('../controller')

jest.mock('axios')

describe('controllers', () => {
  test('getItemsByQuery should return the data populated correctly', async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockItemsByQuery }))

    const itemsByQuery = await getItemsByQuery()

    expect(itemsByQuery).toHaveProperty('categories', ['Celulares y Teléfonos', 'Celulares y Smartphones'])
    expect(itemsByQuery).toHaveProperty('items')
    expect(itemsByQuery.items.length).toEqual(mockItemsByQuery.results.length)
  })
  test('getItemById should return the data populated correctly', async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockItemById }))

    const itemsById = await getItemById()

    expect(itemsById).toHaveProperty('id')
    expect(itemsById).toHaveProperty('title')
    expect(itemsById).toHaveProperty('price')
    expect(itemsById).toHaveProperty('picture')
    expect(itemsById).toHaveProperty('condition', 'new')
    expect(itemsById).toHaveProperty('free_shipping', true)
    expect(itemsById).toHaveProperty('sold_quantity', 250)
    expect(itemsById).toHaveProperty('categoryId', 'MLA82085')
  })

  test('getItemDescriptionById should return the data populated correctly', async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockItemDescriptionById }))

    const itemDescriptionById = await getItemDescriptionById()

    expect(typeof itemDescriptionById).toEqual('string')
  })

  test('getCategoriesById should return the data populated correctly', async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockCategoriesById }))

    const expected = ['Computación', 'Tablets y Accesorios', 'Tablets']

    const categoriesById = await getCategoriesById('categortId')

    expect(categoriesById).toEqual(expected)
  })
})
