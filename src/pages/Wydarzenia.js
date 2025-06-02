import React from 'react'
import wydarzenia1 from '../img/wydarzenia1.jpg'
import wydarzenia2 from '../img/wydarzenia2.jpg'
import charytatywny2025 from '../img/charytatywny2025.jpg'
import { Link } from 'react-router-dom'

function Wydarzenia() {
  return (
    <div className='wydarzenia-container'>
      <h1>Wydarzenia</h1>
      
      <a href='https://www.facebook.com/Grebalowianka'>Grębałowianka oldboje od 2023 na stronie fb K.S. Grębałowianka</a>
      <a href='https://www.facebook.com/profile.php?id=100057690780345'>Grębałowianka oldboje w latach 2013-2023</a>
      <a href='https://www.facebook.com/profile.php?id=100064143066045'>Grębałowianka oldboje i mecze charytatywne</a>
      <Link to={'/opis/opisCharytatywny'}>Mecz charytatywny 8.06.2024</Link>

       <div className='wydarzenia-item'>
      <h3>Mecz charytatywny 7.06.2025</h3>
      <img src={charytatywny2025} alt='wydarzenia1'></img>
    </div>

    <div className='wydarzenia-item'>
      <h3>#70 lat KSG ! Wstęp wolny ! Zapraszamy !</h3>
      <img src={wydarzenia1} alt='wydarzenia1'></img>
    </div>

    <div className='wydarzenia-item'>
      <h3> #Turniej Charytatywny dla osób niepełnosprawnych </h3>
      <img src={wydarzenia2} alt='wydarzenia2'></img>
    </div>

  
      

    </div>
  )
}

export default Wydarzenia