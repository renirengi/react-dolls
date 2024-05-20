/* eslint-disable react/prop-types */
import React from 'react'

export default function DollsBlock({ character, year, galleryImagesLinks, series, reissue, exclusive, price}) {
  return (
    <>
    <div className="dolls-block">
  <img
    className="dolls-block__image"
    src={`/img/${galleryImagesLinks[0]}`}
    alt="Pizza"
  />
  <div className="dolls-block__title-container">

  {character && character.map((item, index) => (<h4 key={index} className="dolls-block__title">{item}</h4>))}
  </div>
  
  <div className="dolls-block__options">
    <p>{series} <span>{year}</span></p>
    <ul>
      <>{reissue && <li>Reissue</li>}</>
      <>{exclusive && <li>{exclusive}</li>}</>
    </ul>
  </div>
  <div className="dolls-block__bottom">
    <div className="dolls-block__price">{price} $</div>
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
      <span>Add</span>
      <i>1</i>
    </div>
  </div>
  </div>
    </>
  )
}
