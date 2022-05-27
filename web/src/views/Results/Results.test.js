import axios from 'axios'
import { act, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Results from './Results'
import getItemsByQueryProvider from './getItemsByQueryProvider.mock.json'

jest.mock('axios')

describe('Results page', () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }
  test('Should render correctly with data', async () => {
    axios.mockResolvedValue({ data: getItemsByQueryProvider })
    const promise = Promise.resolve()
    render(
      <MemoryRouter initialEntries={['/items']}>
        <Results search='algo que buscar' />
      </MemoryRouter>
    )

    await act(async () => { await promise })

    const resultContainer = screen.getByTestId('results-container')
    expect(resultContainer).toBeInTheDocument()

    const childs = resultContainer.childNodes
    expect(childs.length).toEqual(getItemsByQueryProvider.items.length)

    expect(childs[0]).toHaveTextContent('59.899')
    expect(childs[0]).toHaveTextContent(getItemsByQueryProvider.items[0].title)
    expect(childs[0]).toHaveTextContent(getItemsByQueryProvider.items[0].condition)

    expect(childs[1]).toHaveTextContent('22.000')
    expect(childs[1]).toHaveTextContent(getItemsByQueryProvider.items[1].title)
    expect(childs[1]).toHaveTextContent(getItemsByQueryProvider.items[1].condition)

    expect(childs[2]).toHaveTextContent('29.499')
    expect(childs[2]).toHaveTextContent(getItemsByQueryProvider.items[2].title)
    expect(childs[2]).toHaveTextContent(getItemsByQueryProvider.items[2].condition)

    expect(childs[3]).toHaveTextContent('15.000')
    expect(childs[3]).toHaveTextContent(getItemsByQueryProvider.items[3].title)
    expect(childs[3]).toHaveTextContent(getItemsByQueryProvider.items[3].condition)
  })
})
