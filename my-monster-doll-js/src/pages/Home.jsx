
import React from 'react'
import qs from 'qs'
import {useNavigate, Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategory, setFilters, setSort, setCurrentPage, setCharacter, setSeries, setYear, setGender, setExclusive } from '../redux/slices/filterSlice';
import { selectDolls, fetchDolls} from '../redux/slices/dolls/dollsSlice';
import {getAvailable} from '../services/dollsService'
import Categories from '../components/Categories'
import Sort, {sortList} from '../components/Sort'
import DollsBlock from '../components/DollsBlock'
import Skeleton from '../components/DollsBlock/Skeleton'
import Pagination from '../components/Pagination'
import FullFilters from '../components/FullFilters';


export default function Home() {
const dispatch = useDispatch()
const navigate = useNavigate()

//////////////////////////////////////////////////////////
const [dataYears, setDataYears] = React.useState([]);
const [dataSeries, setDataSeries] = React.useState([]);
const [dataCharacters, setDataCharacters] = React.useState([]);
const [dataGenders, setDataGenders] = React.useState([]);
const [dataExclusive, setDataExclusive] = React.useState([]);

const [openFilters, setOpenFilters] = React.useState(false)

///////////////////////////////////////////////////////

const isMounted = React.useRef(false);

const {activeCategory, activeCharacter, activeSeries, activeYear, activeGender, activeExclusive, sort, currentPage, searchValue} = useSelector(selectFilter)
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


React.useEffect(()=>{
  const loadData = async () => {
    try {
    const {data} = await getAvailable();
    setDataYears(data.reduce((arr, item)=> {
      if (!arr.includes(item.year)) arr.push(item.year)
         return arr
       },[]))

    setDataSeries(data.reduce((arr, item)=> {
          if (!arr.includes(item.series)) arr.push(item.series)
             return arr
           },[]))

    setDataExclusive(data.reduce((arr, item)=> {
              if (item.exclusive && !arr.includes(item.exclusive)) arr.push(item.exclusive)
                 return arr
               },[]))
       
    setDataCharacters(data.reduce((arr, item)=>{
          item.character.map((ch)=>{
              if (!arr.includes(ch)) arr.push(ch)
                  
          })
      return arr
      },[]))

      setDataGenders(data.reduce((arr, item)=>{
          item.gender.map((gen)=>{
              if (!arr.includes(gen)) arr.push(gen)
                  
          })
      return arr
      },[]))

  } catch(error) {
    alert('ошибка при получении фильтров')

}
};

loadData();
}, []);

const onChangeSelect= React.useCallback((key, value)=>{
  if (key==='character'){
    dispatch(setCharacter(value))
  } else if (key==='series'){
    dispatch(setSeries(value))
  }
  else if (key==='year'){
    dispatch(setYear(value))
  }
  else if (key==='gender'){
    dispatch(setGender(value))
  }
  else if (key==='exclusive'){
    console.log(value)
    dispatch(setExclusive(value))
  }
    isMounted.current= true
},[dispatch])

//////////////////////////////////////////////////////////////////////////

 const getDolls = async() => {
  const category = activeCategory!=='All'? `type=${activeCategory}`: '';
  const sortBy = sort.sortProperty.replace('-', '');
  const order = sort.sortProperty.includes ('-') ? 'asc' : 'desc';
  const search = searchValue ? `&q=${searchValue}` : ''; 
  const character = activeCharacter ? `&character_like=${activeCharacter}` : '';
  const series = activeSeries ? `&series=${activeSeries}` : '';
  const year = activeYear ? `&year=${activeYear}` : '';
  const gender = activeGender ? `&gender=${activeGender}` : '';
  const exclusive = activeExclusive ? `&exclusive=${activeExclusive}` : '';

   dispatch(fetchDolls({
    exclusive,
    gender,
    year,
    series,
    category,
    sortBy,
    order,
    search,
    currentPage,
    character
   }))

  }
 

  React.useEffect (()=>{
    getDolls();
    window.scrollTo(0,0)
  },[activeCategory, currentPage, searchValue, sort, activeCharacter, activeCharacter, activeSeries, activeYear, activeGender, activeExclusive])

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
    <Link to={`doll/${obj.id}`} key={obj.id}><DollsBlock  {...obj}></DollsBlock></Link>)
  
  return (
    <>
      <div className="container">
          <div className="content__top">
            <Categories value= {activeCategory} onClickCategory={(category)=>onChangeCategory(category)}></Categories>
            <div onClick={()=>setOpenFilters(!openFilters)}>Open full filters</div>
            <Sort value={sort} onClickSort={(obj)=>onChangeSort(obj)}></Sort>
          </div>
          {openFilters && <FullFilters onClickFilters = {(key, value)=>onChangeSelect(key, value)}
          activeExclusive ={activeExclusive}
          activeGender={activeGender}
          activeSeries={activeSeries}
          activeCharacter={activeCharacter}
          activeYear={activeYear}
          dataYears={dataYears}
          dataSeries = {dataSeries}
          dataCharacters = {dataCharacters}
          dataGenders = {dataGenders}
          dataExclusive = {dataExclusive}
          ></FullFilters>} 
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
