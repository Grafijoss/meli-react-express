import axios from 'axios'
import { act, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Detail from '../../App'
import getItemsByQueryProvider from './ __mocks__/getItemsByQueryProvider.json'

jest.mock('axios')

describe('Detail page', () => {
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
      <MemoryRouter initialEntries={['/items/456']}>
        <Detail />
      </MemoryRouter>
    )

    await act(async () => { await promise })

    expect(screen.getByTestId('detail-container')).toBeInTheDocument()

    const detailTitle = screen.getByTestId('detail-title')
    expect(detailTitle).toBeInTheDocument()
    expect(detailTitle).toHaveTextContent('Apple iPad (9ª Generación) 10.2 Wi-fi 64gb - Gris Espacial')

    const detailPrice = screen.getByTestId('detail-price')
    expect(detailPrice).toBeInTheDocument()
    expect(detailPrice).toHaveTextContent('70.090')

    const detailCondition = screen.getByTestId('detail-condition')
    expect(detailCondition).toBeInTheDocument()
    expect(detailCondition).toHaveTextContent('new')
  })
})
