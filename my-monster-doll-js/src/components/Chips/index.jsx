/* eslint-disable react/prop-types */
import React from 'react'
import s from './index.module.scss'

export default function Chips({doll, onClickChips}) {
  return (
    <>
      <div className={s.root}>
          <>{doll.character && doll.character.map((item, index)=>(<div onClick={()=>onClickChips("character", item)} className='button' key={index}>{item}</div>))} </>        
            <>{doll.gender && doll.gender.map((item,index)=>(<div  key={index} className='button'>{item}</div>))}</> 
            <div onClick={()=>onClickChips("type", doll.type)} className='button'>{doll.type}</div>
            <div onClick={()=>onClickChips("year", doll.year)}  className='button'>{doll.year}</div>
            <div onClick={()=>onClickChips("series", doll.series)}  className='button'>{doll.series}</div>
            <>{doll.reissue && <div className='button' disabled>Reissue</div>}</>
            <>{doll.exclusive && <div onClick={()=>onClickChips("series", doll.exclusive)} className='button'>{doll.exclusive}</div>}</>
           </div> 
    </>
  )
}
