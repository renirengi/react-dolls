/* eslint-disable react/prop-types */
import React from 'react'
import s from './index.module.scss'

export default function StarRating({dollRating, onClickStar}) {
    const starsArr = [1, 2, 3, 4, 5];

    const [rating, setRating] = React.useState(null);
    const [hover, setHover] = React.useState(null);



    return (
      <div className={s.root}>{
        starsArr.map((star,index )=>(
          <label key={index}>
      <input
        type="radio"
        name="rating"
        value={star}
        onChange={() => onClickStar(star)}
      />
      <span
        className={s.star}
        style={{
          color:
            index+1 <= (hover || dollRating) ? "#ffc107" : "#e4e5e9"
        }}
        onMouseEnter={() => setHover(index+1)}
        onMouseLeave={() => setHover(null)}
      >
        &#9733;
      </span>
    </label>
        ))
      }
       </div>
    );
}
