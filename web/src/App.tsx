import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Results from './views/Results/Results'

function App () {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/items' element={<Results />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
