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

    expect(itemsById).toHaveProperty('item')
    expect(itemsById.item).toHaveProperty('id')
    expect(itemsById.item).toHaveProperty('title')
    expect(itemsById.item).toHaveProperty('price')
    expect(itemsById.item).toHaveProperty('picture')
    expect(itemsById.item).toHaveProperty('condition', 'new')
    expect(itemsById.item).toHaveProperty('free_shipping', true)
    expect(itemsById.item).toHaveProperty('sold_quantity', 250)
    expect(itemsById.item).toHaveProperty('categoryId', 'MLA82085')
  })

  test('getItemDescriptionById should return the data populated correctly', async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockItemDescriptionById }))

    const itemDescriptionById = await getItemDescriptionById()

    expect(typeof itemDescriptionById).toEqual('string')
  })

  test('getCategoriesById should return the data populated correctly', async () => {
    axios.mockImplementation(() => Promise.resolve({ data: mockCategoriesById }))

    const expected = ['Computación', 'Tablets y Accesorios', 'Tablets']

    const categoriesById = await getCategoriesById()

    expect(categoriesById).toEqual(expected)
  })
})
