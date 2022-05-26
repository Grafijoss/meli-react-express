import React from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Results from './views/Results/Results'

function App () {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')

  return (
    <>
      <Header searchValue={search} />
      <Layout>
        <Routes>
          <Route path='/items' element={<Results search={search} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
