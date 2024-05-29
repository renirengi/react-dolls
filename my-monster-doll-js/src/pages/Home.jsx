
import React from 'react'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategory, setFilters, setSort, setCurrentPage } from '../redux/slices/filterSlice';
import { selectDolls, fetchDolls} from '../redux/slices/dolls/dollsSlice';

import Categories from '../components/Categories'
import Sort, {sortList} from '../components/Sort'
import DollsBlock from '../components/DollsBlock'
import Skeleton from '../components/DollsBlock/Skeleton'
import Pagination from '../components/Pagination'


export default function Home() {
const dispatch = useDispatch()
const navigate = useNavigate()

 const isMounted = React.useRef(false);

const {activeCategory, sort, currentPage, searchValue} = useSelector(selectFilter)
const {items, status, itemsCount} = useSelector(selectDolls);


const onChangeCurrentPage= React.useCallback((num)=>{
    dispatch(setCurrentPage(num))
    isMounted.current= true
},[dispatch])


const onChangeCategory=React.useCallback((str)=>{
    dispatch(setCategory(str))
    isMounted.current= true
    onChangeCurrentPage(1)
  
},[dispatch])



const onChangeSort= React.useCallback((obj)=>{
    dispatch(setSort(obj))
    isMounted.current= true
}, [dispatch]) 

 const getDolls = async() => {
  const category = activeCategory!=='All'? `type=${activeCategory}`: ''
  const sortBy = sort.sortProperty.replace('-', '')
  const order = sort.sortProperty.includes ('-') ? 'asc' : 'desc'
  const search = searchValue ? `&q=${searchValue}` : ''; 

   dispatch(fetchDolls({
    category,
    sortBy,
    order,
    search,
    currentPage
   }))

  }
 

  React.useEffect (()=>{
    getDolls();
    window.scrollTo(0,0)
  },[activeCategory, currentPage, searchValue, sort])

  React.useEffect(()=> {
    
    const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        activeCategory,
        currentPage,
    });
    if(isMounted.current){
       navigate(`?${queryString}`)
    }
    
  },[activeCategory, currentPage, navigate, sort.sortProperty])


  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      
    }
  }, [dispatch]);
  
  const dataDolls = items.map((obj)=> 
    <DollsBlock key={obj.id} {...obj}></DollsBlock>)
  
  return (
    <>
      <div className="container">
          <div className="content__top">
            <Categories value= {activeCategory} onClickCategory={(category)=>onChangeCategory(category)}></Categories>
            <Sort value={sort} onClickSort={(obj)=>onChangeSort(obj)}></Sort>
          </div>
          <h2 className="content__title">All dolls</h2>
          {status==='error'? 
          (<div className='content_error-info'>
            <h2>We can not get dolls from the server!</h2>
            <p>Try logging in later</p>
            </div>) :
          (<div className="content__items">
          {status==='loading' ? [...new Array(6)].map((_, index)=><Skeleton key={index}></Skeleton>) : dataDolls}
          </div>)}
          <Pagination count={itemsCount} onChangePage={(number)=>onChangeCurrentPage(number)} currentPage={currentPage}></Pagination>
        </div>
    </>
  )
}
