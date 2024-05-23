import React from 'react'
import axios from 'axios'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategory, setFilters, setSort, setCurrentPage } from '../redux/slices/filterSlice';

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import DollsBlock from '../components/DollsBlock'
import Skeleton from '../components/DollsBlock/Skeleton'
import { SearchContext } from '../App'
import Pagination from '../components/Pagination'


export default function Home() {
const dispatch = useDispatch()
const navigate = useNavigate()
 const [dolls, setDolls] = React.useState([])
 const [isLoading, setIsLoading] = React.useState(true)

 const { searchValue } = React.useContext(SearchContext)
 

const {activeCategory, sort, currentPage} = useSelector(selectFilter)
// ////////////////////////////////////////////////////
 const [countItems, setCountItems]= React.useState(1)
///////////////////////////////////////////////////////

////use later
// const onChangeCategory=React.useCallback((str)=>{
//     dispatch(setCategory(str))
// },[dispatch])

const onChangeCategory= (str)=> {
    dispatch(setCategory(str))
}

// ////use later
// const onChangeSort= React.useCallback((obj)=>{
//     dispatch(setSort(obj))
// }, [dispatch]) 

const onChangeSort= (obj)=> {
    dispatch(setSort(obj))
}

// ////use later
// const onChangeCurrentPage= React.useCallback((num)=>{
//     dispatch(setCurrentPage(num))
// },[dispatch])

const onChangeCurrentPage= (num)=> {
    dispatch(setCurrentPage(num))
}

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

  React.useEffect(()=> {
    const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        activeCategory,
        currentPage,
    });
    navigate(`?${queryString}`)
  },[activeCategory, currentPage, navigate, sort.sortProperty])
  
  const dataDolls = dolls.map((obj)=> 
    <DollsBlock key={obj.id} {...obj}></DollsBlock>)
  
  return (
    <>
      <div className="container">
          <div className="content__top">
            <Categories value= {activeCategory} onClickCategory={(category)=>onChangeCategory(category)}></Categories>
            <Sort value={sort} onClickSort={(obj)=>onChangeSort(obj)}></Sort>
          </div>
          <h2 className="content__title">All dolls</h2>
          <div className="content__items">
          {isLoading ? [...new Array(6)].map((_, index)=><Skeleton key={index}></Skeleton>) : dataDolls}
          </div>
          <Pagination count={countItems} onChangePage={(number)=>onChangeCurrentPage(number)} currentPage={currentPage}></Pagination>
        </div>
    </>
  )
}
