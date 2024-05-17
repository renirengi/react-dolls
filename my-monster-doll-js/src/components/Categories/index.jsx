import React from 'react'

export default function Categories() {
  const[activeCategory, setActiveCategory] = React.useState(0)

  const categories = ["All dolls", "Clawdeen Wolf", "Cleo de Nile", "Frankie Stein", "Draculaura", "Ghoulia Yelps", "Lagoona Blue"]
  return (
    <>
      <div className="categories">
              <ul>
                {categories.map((cat, index)=>(
                  <li key={index}
                  onClick={()=>setActiveCategory(index)}
                  className={index===activeCategory ? 'active' : ''}>{cat}</li>
                ))}
              </ul>
            </div>
    </>
  )
}
