import React from 'react'

import img1 from './img/opat1.jpg'
import img2 from './img/opat2.jpg'



function opisCra() {
  return (
    <div className='opis-container'>
      <div className='opis-header'>
        
        <h1>Opatkowianka - Grębałowianka</h1> 
       
       
      </div>

      <div className='opis-info'>
          <p>
          9 kolejka I ligi oldboyów Kraków <br></br>

Opatkowianka -Grębałowianka Kraków 2:2 (1:1) <br></br>
Bramka dla Gręby: Strojek R. asyta Oleś , Oleś asysta Storjek R.


Pozdrawiam Piotr Grzywa 😉👌⚽
          
          </p>

        <img src={img1} alt='gre-dab'></img>
        <img src={img2} alt='gre-dab'></img>
     
        
       
      </div>
        
        </div>
  )
}

export default opisCra