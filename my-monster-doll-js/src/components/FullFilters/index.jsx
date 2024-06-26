/* eslint-disable react/prop-types */
import React from 'react'
import s from'./indwx.module.scss'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { resetAdditionalFilters } from '../../redux/slices/filterSlice';



export default function FullFilters({activeExclusive, activeCharacter, activeSeries, activeYear, activeGender, dataYears, dataSeries, dataCharacters, dataGenders, dataExclusive, onClickFilters}) {
    const dispatch = useDispatch()
    const onChangeSelect= (key,value) => {
    onClickFilters(key,value)
   }
   const onResetAll= ()=> {
    dispatch( resetAdditionalFilters())
   }
  return (
    <div className={s.root}> 
    <>
        <div>
        <p>Character</p>
        <Form.Select value ={activeCharacter} aria-label="character" onChange={()=>onChangeSelect('character',event.target.value)}>
        <option value=''>All</option>
        {dataCharacters.map((item, index)=>(<option key={index} value={item} >{item}</option>))}
        </Form.Select>
        </div>
        <div>
        <p>Series</p>
        <Form.Select value ={activeSeries} aria-label="series" onChange={()=>onChangeSelect('series',event.target.value)}>
        <option value=''>All</option>
        {dataSeries.map((item, index)=>(<option key={index} value={item} >{item}</option>))}
        </Form.Select>
        </div>
        <div>
        <p>Year</p>
        <Form.Select value ={activeYear} aria-label="year" onChange={()=>onChangeSelect('year',event.target.value)}>
        <option value=''>All </option>
        {dataYears.map((item, index)=>(<option key={index} value={item} >{item}</option>))}
        </Form.Select>
        </div>
        <div>
        <p>Gender</p>
        <Form.Select value ={activeGender} aria-label="gender" onChange={()=>onChangeSelect('gender',event.target.value)}>
        <option value=''>All </option>
        {dataGenders.map((item, index)=>(<option key={index} value={item} >{item}</option>))}
        </Form.Select>
        </div>
        <div>
        <p>Exclusive</p>
        <Form.Select value ={activeExclusive} aria-label="exclusive" onChange={()=>onChangeSelect('exclusive',event.target.value)}>
        <option value=''>All </option>
        {dataExclusive.map((item, index)=>(<option key={index} value={item} >{item}</option>))}
        </Form.Select>
        </div>
        <button className='button' onClick={()=>onResetAll()}>Reset all filters</button>
</>
    </div>
  )
}
