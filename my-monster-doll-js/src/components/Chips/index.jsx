/* eslint-disable react/prop-types */
import React from 'react'
import s from './index.module.scss'

export default function Chips({doll, onClickChips}) {
  return (
    <>
      <div className={s.root}>
          <>{doll.character && doll.character.map((item, index)=>(<div  className='button' key={index}>{item}</div>))} </>        
            <>{doll.gender && doll.gender.map((item,index)=>(<div  key={index} className='button'>{item}</div>))}</> 
            <div onClick={()=>onClickChips(doll.type)}  className='button'>{doll.type}</div>
            <div  className='button'>{doll.year}</div>
            <>{doll.reissue && <div className='button'>{doll.reissue}</div>}</>
            <>{doll.exclusive && <div className='button'>{doll.exclusive}</div>}</>
           </div> 
    </>
  )
}
