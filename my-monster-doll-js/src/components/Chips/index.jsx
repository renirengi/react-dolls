/* eslint-disable react/prop-types */
import React from 'react'

export default function Chips({doll, onClickChips}) {
  return (
    <>
      <div className='doll-page_body_content_text-container_button-container'>
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
