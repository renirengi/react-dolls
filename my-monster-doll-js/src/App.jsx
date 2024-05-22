import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
///import DollPage from './pages/DollPage'

export const SearchContext = React.createContext()
function App() {
const [searchValue, setSearchValue] = React.useState('')

  return (
    <>
    <div className="wrapper">
    <SearchContext.Provider value = {{searchValue, setSearchValue}} >
    <Header></Header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>

        </Routes>
       
      </div>
      </SearchContext.Provider>
    </div>
    </>
  )
}

export default App
