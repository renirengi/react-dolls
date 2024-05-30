import React from 'react'

export default function DollPage() {
  return (
    <div className='doll-page'>
      <section className='doll-page_header'>
      <div className='doll-page_header_title-container'>
          <h2>Clawdeen Wolf</h2>
        <p>Dawn of the Dance <span>(2010)</span></p>
      </div>
      <div className="doll-page_header_right"> I am a dolls rating</div>
    </section>
    <section className='doll-page_body'>
      <div className='doll-page_body_content'>
        <div className='doll-page_body_content_image-container'>
          <img src='/img/dawn-dance-clawdeen-wolf-w861pu69.jpg'></img>
        </div>
        <div className='doll-page_body_content_text-container'>
          <p><span className="note">Item number: </span>T6069</p>
          <p>Clawdeen’s is wearing a fabulous purple and green outfit to the dance. It goes perfectly with her party persona that boasts short neon green hair and purple lipstick. The dress is purple with a scaly animal pattern as well as a variety of gold & black zippers. She accentuates the dress with a neon green ribbon belt and a black belt with gold rings. Her mesh tights are neon yellow and lead to her shiny gold heels. Clawdeen’s accessories feature two shiny gold hoops in each ear, molded black gloves, and a neon green clutch with gold & black accents. Also included with the doll is an iCoffin phone, dance invitation, doll stand, and party photos.</p>
          <div className='doll-page_body_content_text-container_button-container'>
              <div className='button'>Clawdeen Wolf</div>         
              <div className='button'>Ghoul</div>
              <div className='button'>Doll</div>
              <div className='button'>2010</div>
              <div className='button'>reissue</div>
              <div className='button'>Comic Con</div>
           </div>
        </div>
        <div className='doll-page_body_content_slider'>I am a dolls slider</div>
      </div>
      

    </section>

    </div>
  )
}
