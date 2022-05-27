import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

import App from './App'

describe('App', () => {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    }
  }

  test('full app rendering/navigating', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('buscador')).toBeInTheDocument()
  })

  test('detail page should render correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/items/12345']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loading-detail-page')).toBeInTheDocument()
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
  })

  test('results page should render correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/items']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('loading-results-page')).toBeInTheDocument()
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument()
  })
})
