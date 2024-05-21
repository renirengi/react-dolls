import React from 'react'
import axios from 'axios'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import DollsBlock from '../components/DollsBlock'
import Skeleton from '../components/DollsBlock/Skeleton'
import { SearchContext } from '../App'
import Pagination from '../components/Pagination'
export default function Home() {
 const [dolls, setDolls] = React.useState([])
 const [isLoading, setIsLoading] = React.useState(true)

 const { searchValue } = React.useContext(SearchContext)
 

// ////////////////////////////////////////////////////
 const [sort, setSort] = React.useState({
    name: 'age (DESC)', sortProperty: 'year'
 })
 const[activeCategory, setActiveCategory] = React.useState('All')
 const [currentPage, setCurrentPage] =React.useState(1)
 const [countItems, setCountItems]= React.useState(1)
///////////////////////////////////////////////////////

  React.useEffect (()=>{
    setIsLoading(true)

   const category = activeCategory!=='All'? `type=${activeCategory}`: ''
   const sortBy = sort.sortProperty.replace('-', '')
   const order = sort.sortProperty.includes ('-') ? 'asc' : 'desc'
   const search = searchValue ? `&q=${searchValue}` : '';
   
    axios.get(`http://localhost:3000/dolls?_page=${currentPage}&_limit=6&${category}&_sort=${sortBy}&_order=${order}${search}`).
    then((res)=>{
      setDolls(res.data)
      setCountItems(res.headers["x-total-count"])
      setIsLoading(false)
    })
    window.scrollTo(0,0)
  },[activeCategory, currentPage, searchValue, sort])
  
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
          <Pagination count={countItems} onChangePage={(number)=>setCurrentPage(number)} currentPage={currentPage}></Pagination>
        </div>
    </>
  )
}
