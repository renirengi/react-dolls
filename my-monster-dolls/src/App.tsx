//import { useState } from 'react'
import './scss/app.scss'
import Categories from './components/Categories'
import Sort from './components/Sort'
import DollBlock from './components/DollBlock';
import Header from './components/Header'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div className="App">
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <DollBlock title='Laguna Blue' price={500}></DollBlock>
            <DollBlock></DollBlock>
            <DollBlock></DollBlock>
            <DollBlock></DollBlock>
            <DollBlock></DollBlock>

          </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default App
