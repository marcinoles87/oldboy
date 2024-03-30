import React from 'react'
import { Link } from 'react-router-dom'

function Navabar() {
  return (
    <div className='navbar-container'>
        <ul className='navbar-list'>
            <Link to={'/historia'} className='navbar-link-historia'><li className='navbar-item'><p>Historia</p></li></Link>
            <Link to={'/kadra'} className='navbar-link-kadra'><li className='navbar-item'>Kadra</li></Link>
            <Link to={'/wyniki'}className='navbar-link-wyniki' ><li className='navbar-item'>Wyniki</li></Link>
            <Link to={'/kontakt'} className='navbar-link-kontakt'><li className='navbar-item'>Kontakt</li></Link>
            
        </ul>
    </div>
  )
}

export default Navabar