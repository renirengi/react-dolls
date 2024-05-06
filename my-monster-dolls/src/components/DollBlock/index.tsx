import React from 'react'

export default function DollBlock({title, price}:{title?:string, price?:number}) {
  return (
    <>
      <div className="doll-block">
                <img
                  className="doll-block__image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyTRCbXUybzGy7Ey4F1mjedA524Ma6ocd_VxkhK_xpzg&s.jpg"
                  alt="Doll"
                />
                <h4 className="doll-block__title">{title}</h4>
                {/* <div className="doll-block__selector">
                  <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                  </ul>
                  <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>
                  </ul>
                </div> */}
                <div className="doll-block__bottom">
                  <div className="doll-block__price">от {price} $</div>
                  <div className="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      />
                    </svg>
                    <span>Add to cart</span>
                    <i>2</i>
                  </div>
                </div>
              </div>
    </>
  )
}
