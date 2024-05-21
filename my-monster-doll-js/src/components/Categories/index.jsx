/* eslint-disable react/prop-types */
import React from 'react'

export default function Categories({value, onClickCategory}) {

  const categories = ["All", "Doll", "Multipack", "Doll with Playset", "Budget"]
  return (
    <>
      <div className="categories">
              <ul>
                {categories.map((cat, index)=>(
                  <li key={index}
                  onClick={()=>onClickCategory(cat)}
                  className={cat===value ? 'active' : ''}>{cat}</li>
                ))}
              </ul>
            </div>
    </>
  )
}
