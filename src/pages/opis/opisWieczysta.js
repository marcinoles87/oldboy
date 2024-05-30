import React from 'react'

import img1 from './img/dabski1.jpg'
import img2 from './img/dabski1.jpg'
import img3 from './img/dabski1.jpg'

function opisWisla() {
  return (
    <div className='opis-container'>
      <div className='opis-header'>
        
        <h1>Grębałowianka - Wiecztsta</h1> 
        
       
      </div>

      <div className='opis-info'>
          <p>
          7 kolejka I ligi oldboyów Kraków  <br></br>
Grębałowianka Kraków -Garbarnia Kraków 0:5 (0:2) < br></br>
Skład Gręby: Kokosza - Towarek, Ochlust, Rutka, Korcala, Wierzbinski, Strojek G, Karaś, Mucharski, Cecuga, Strojek R, Madejczyk, Kawula,  Zięba, Grzywa, Dominik. <br></br>
Trener Bernard Łach  <br></br>
Catering Marcin Stolarski 👌
3.06. o 17:30 mecz 8 kolejki z Hutnikiem Kraków zapraszamy 
Pozdrawiam Piotr Grzywa 😉👌⚽
          
          </p>

        <img src={img1} alt='gre-dab'></img>
        <img src={img2} alt='gre-dab'></img>
        <img src={img3} alt='gre-dab'></img>
        
       
      </div>
        
        </div>
  )
}

export default opisWisla