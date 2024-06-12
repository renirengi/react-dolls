/* eslint-disable react/prop-types */
import React from 'react'
import s from './index.module.scss'
import Carousel from 'react-bootstrap/Carousel';
export default function DollSlider({images}) {
 const [index, setIndex] = React.useState(0);


 const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <div className={s.slider}>
   
    <Carousel
    data-bs-theme="dark"
    slide={false}
    activeIndex={index}
    
    touch={true}
     onSelect={handleSelect}>
    {images && images.map((image,index)=>(<Carousel.Item key={index}><div className={s.container}><img src={`/img/${image}`} alt='Image'></img></div></Carousel.Item>))}
    </Carousel>
   
    </div>
      
    </>
  )
}
