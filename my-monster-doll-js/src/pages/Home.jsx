import React from 'react'
import axios from 'axios'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import DollsBlock from '../components/DollsBlock'
import Skeleton from '../components/DollsBlock/Skeleton'
export default function Home() {
 const [dolls, setDolls] = React.useState([])
 const [isLoading, setIsLoading] = React.useState(true)

// ////////////////////////////////////////////////////
 const [sort, setSort] = React.useState({
    name: 'age (DESC)', sortProperty: 'year'
 })
 const[activeCategory, setActiveCategory] = React.useState('All')
  React.useEffect (()=>{
    setIsLoading(true)

   const category = activeCategory!=='All'? `type=${activeCategory}`: ''
   const sortBy = sort.sortProperty.replace('-', '')
   const order = sort.sortProperty.includes ('-') ? 'asc' : 'desc'
    axios.get(`http://localhost:3000/dolls?${category}&_sort=${sortBy}&_order=${order}`).
    then((res)=>{
      setDolls(res.data)
      setIsLoading(false)
    })
    window.scrollTo(0,0)
  },[activeCategory, sort])
  
  const dataDolls = dolls.map((obj)=> 
    <DollsBlock key={obj.id} {...obj}></DollsBlock>)
  
  return (
    <>
      <div className="container">
          <div className="content__top">
            <Categories value= {activeCategory} onClickCategory={(category)=>setActiveCategory(category)}></Categories>
            <Sort value={sort} onClickSort={(obj)=>setSort(obj)}></Sort>
          </div>
          <h2 className="content__title">All dolls</h2>
          <div className="content__items">
          {isLoading ? [...new Array(6)].map((_, index)=><Skeleton key={index}></Skeleton>) : dataDolls}
          </div>
        </div>
    </>
  )
}
