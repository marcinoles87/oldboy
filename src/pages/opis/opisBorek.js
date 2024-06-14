import React from 'react'

import img1 from './img/dabski1.jpg'
import img2 from './img/dabski1.jpg'
import img3 from '/web frontend/projekty React/oldboy/src/img/dabski1.jpg'

import iii3 from '../opis/img/dabski1.jpg'



function opisDabski() {
  return (
    <div className='opis-container'>
      <div className='opis-header'>
        
        <h1>Borek - Grębałowianka</h1> 
        
       
      </div>

      <div className='opis-info'>
          <p>3 kolejka I ligi oldboyów Kraków <br></br>

          Borek - Grębałowianka(1:0) <br></br>

         

          Pozdrawiam Piotr Grzywa 😉 👌⚽
          
          </p>

        <img src={iii3} alt='gre-dab'></img>
        <img src={img2} alt='gre-dab'></img>
        <img src={img3} alt='gre-dab'></img>
        
       
      </div>
        
        </div>
  )
}

export default opisDabski