import React from 'react'
import axios from 'axios'

import './scss/app.scss'
import dolls from './assets/dolls.json'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import DollsBlock from './components/DollsBlock'
import Skeleton from './components/DollsBlock/Skeleton'
function App() {
  const [dolls, setDolls] = React.useState([])
 const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect (()=>{
    //setIsLoading(true)
    axios.get(' http://localhost:3000/dolls').
    then((res)=>{
      setDolls(res.data)
      setIsLoading(false)
    })
    
  },[dolls, isLoading])
  
  const dataDolls = dolls.map((obj)=> 
    <DollsBlock key={obj.id} {...obj}></DollsBlock>)
  

  return (
    <>
    <div className="wrapper">
    <Header></Header>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories></Categories>
            <Sort></Sort>
          </div>
          <h2 className="content__title">All dolls</h2>
          <div className="content__items">
          {isLoading ? [...new Array(6)].map((_, index)=><Skeleton key={index}></Skeleton>) : dataDolls}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
