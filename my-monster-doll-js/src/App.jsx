import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import DollPage from './pages/DollPage'
function App() {
 

  return (
    <>
    <div className="wrapper">
    <Header></Header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>

        </Routes>
       
      </div>
    </div>
    </>
  )
}

export default App
