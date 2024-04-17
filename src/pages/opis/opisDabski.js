import React from 'react'

import img1 from './img/dabski1.jpg'
import img2 from './img/dabski1.jpg'
import img3 from './img/dabski1.jpg'

function opisDabski() {
  return (
    <div className='opis-container'>
      <div className='opis-header'>
        
        <h1>Grębałowianka - Dąbski</h1> 
        <p>Opis meczu</p>
       
      </div>

      <div className='opis-info'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure commodi ad repellat amet et quos earum dignissimos explicabo! Voluptatibus quia animi molestiae dolorem perferendis impedit tenetur eaque, nesciunt cum?</p>

        <img src={img1} alt='gre-dab'></img>
        <img src={img2} alt='gre-dab'></img>
        <img src={img3} alt='gre-dab'></img>
        
       
      </div>
        
        </div>
  )
}

export default opisDabski