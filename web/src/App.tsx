import React from 'react'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Results from './views/Results/Results'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'

function App () {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search')

  return (
    <>
      <Header searchValue={search} />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items' element={<Results search={search} />} />
          <Route path='/items/:id' element={<Detail />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
