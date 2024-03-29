import React from 'react'
import { Link } from 'react-router-dom'

function Navabar() {
  return (
    <div className='navbar-container'>
        <ul className='navbar-list'>
            <Link to={'/historia'} className='navbar-link'><li className='navbar-item'>Historia</li></Link>
            <Link to={'/kadra'} className='navbar-link'><li className='navbar-item'>Kadra</li></Link>
            <Link to={'/wyniki'}className='navbar-link' ><li className='navbar-item'>Wyniki</li></Link>
            <Link to={'/kontakt'} className='navbar-link'><li className='navbar-item'>Kontakt</li></Link>
            
        </ul>
    </div>
  )
}

export default Navabar