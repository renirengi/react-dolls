import React from 'react'
import { useParams } from 'react-router-dom'
import { getDollsById } from '../services/dollsService';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/slices/filterSlice';
import Chips from '../components/Chips';



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

  const onChangeChips=React.useCallback((chips)=>{
    navigate('/', {key:chips})
    console.log('ok')
    dispatch(setCategory(chips))
},[dispatch])
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
      <div className="doll-page_header_right"> I am a dolls rating</div>
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
          <Chips doll = {doll} onClickChips={(chips)=>onChangeChips(chips)}></Chips>
        </div>
        <div className='doll-page_body_content_slider'>I am a dolls slider</div>
      </div>
      

    </section>

    </div>
  )
}
