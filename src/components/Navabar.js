import React from 'react'
import { Link } from 'react-router-dom'

function Navabar() {
  return (
    <div className='navbar-container'>
        <ul className='navbar-list'>
            <Link to={'/historia'} className='navbar-link'><li className='navbar-item'><p>Historia</p></li></Link>
            <Link to={'/kadra'} className='navbar-link'><li className='navbar-item'><p>Kadra</p></li></Link>
            <Link to={'/wyniki'}className='navbar-link' ><li className='navbar-item'><p>Wyniki</p></li></Link>
            <Link to={'/wydarzenia'}className='navbar-link' ><li className='navbar-item'><p>Wydarzenia</p></li></Link>
            <Link to={'/kontakt'} className='navbar-link'><li className='navbar-item'><p>Kontakt</p></li></Link>
            
        </ul>
    </div>
  )
}

export default Navabar