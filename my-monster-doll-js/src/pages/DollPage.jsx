import React from 'react'
import { useParams } from 'react-router-dom'
import { getDollsById } from '../services/dollsService';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setCharacter, setExclusive, setGender, setSeries, setYear } from '../redux/slices/filterSlice';
import Chips from '../components/Chips';
import DollSlider from '../components/DollSlider';
import StarRating from '../components/StarRating';



export default function DollPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {id} =useParams();
  const [doll, setDoll] = React.useState({});

  React.useEffect(()=>{
    const loadData = async () => {
      try {
      const {data} = await getDollsById(id);
      setDoll(data);
    } catch(error) {
      alert('ошибка при получении кукол')

}
  };

  loadData();
  }, [id]);

  const onChangeChips=React.useCallback((str, chips)=>{
    navigate('/', {key:chips})
    if (str==='character') {
       dispatch(setCharacter(chips))
    }
    else if (str==='type') {
      dispatch(setCategory(chips))
    }
    else if (str==='year') {
      dispatch(setYear(chips))
    }
    else if (str==='series') {
        dispatch(setSeries(chips))
    }
    else if (str==='gender') {
          dispatch(setGender(chips))
    }
    else if (str==='exclusive') {
         dispatch(setExclusive(chips))
    }
},[dispatch, navigate])
  if(!doll) {
    return "Loading..."
  }
  return (
    <div className='doll-page container'>
      <section className='doll-page_header'>
      <div className='doll-page_header_title-container'>
    <>
      {doll.character && doll.character.map((item, index)=>(<h2 key={index}>{item}</h2>))} 
    </>  
        <p>{doll.series} <span>({doll.year})</span></p>
      </div>
      <div className="doll-page_header_right">
        {doll.rating && <StarRating dollRating={doll.rating}/>}</div>
    </section>
    <section className='doll-page_body'>
      <div className='doll-page_body_content'>
        <div className='doll-page_body_content_image-container'>
        {doll.galleryImagesLinks && <img
        src={`/img/${doll.galleryImagesLinks[0]}`}
        alt="Doll"
  />}
        </div>
        <div className='doll-page_body_content_text-container'>
          <p><span className="note">Item number: </span>{doll.modelNumber}</p>
          <p>{doll.description}</p>
          <Chips doll = {doll} onClickChips={(str,chips)=>onChangeChips(str,chips)}></Chips>
        </div>
        <DollSlider images={doll.galleryImagesLinks}/>
      </div>
      

    </section>

    </div>
  )
}
