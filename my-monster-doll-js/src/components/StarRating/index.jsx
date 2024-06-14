import React from 'react'
import s from './index.module.scss'

export default function StarRating({dollRating}) {
    const starsArr = [1, 2, 3, 4, 5];

    const [rating, setRating] = React.useState(0);
    
    const showHoverEffect = (e) => {
      const id = e.target.id;
      if (id <= rating) return;
      for (let i = rating + 1; i <= id; i++) {
        const ele = document.getElementById(i);
        ele.style.fill = "gold";
      }
    };
  
    const removeHoverEffect = (e) => {
      const id = parseInt(e.target.id);
      if (id <= rating) return;
  
      for (let i = rating + 1; i <= id; i++) {
        const ele = document.getElementById(i);
        ele.style.fill = "none";
      }
    };
  
    const giveRating = (e) => {
      const id = parseInt(e.target.id);
      if (id > rating) {
        for (let i = rating + 1; i <= id; i++) {
          const ele = document.getElementById(i);
          ele.style.fill = "gold";
        }
      } else {
        for (let i = id + 1; i <= rating; i++) {
          const ele = document.getElementById(i);
          ele.style.fill = "none";
        }
      }
      setRating(id);
    };
  
    return (
      <div style={{ display: "flex", width: "30%"}}>
        {starsArr.map((id) => (
          <div key={id}>
            <svg
              width="1.5cm"
              height="1.5cm"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="200 0 500 500"
            >
              <polygon
                fill="none"
                id={id}
                stroke="gold"
                onClick={giveRating}
                onMouseOver={showHoverEffect}
                onMouseLeave={removeHoverEffect}
                strokeWidth="10"
                points="350,75  379,161 469,161 397,215
                  423,301 350,250 277,301 303,215
                  231,161 321,161"
              />
            </svg>
          </div>
        ))}
      </div>
    );
}
