import React from 'react'
import { Link } from 'react-router-dom'

function Navabar() {
  return (
    <div className='navbar-container'>
        <ul className='navbar-list'>
            <Link to={'/historia'}><li className='navbar-item'><a href='#'>Historia</a></li></Link>
            <Link to={'/kadra'}><li className='navbar-item'><a href='#'>Kadra</a></li></Link>
            <Link to={'/wyniki'}><li className='navbar-item'><a href='#'>Wyniki</a></li></Link>
            <Link to={'/kontakt'}><li className='navbar-item'><a href='#'>Kontakt</a></li></Link>
            
        </ul>
    </div>
  )
}

export default Navabar