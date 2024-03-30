import React from 'react'

import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header-container'>
        <h1>Grębałowianka Oldboje 2024</h1>
        <img src={logo} alt='logo_grebalowianka'></img>
    </div>
  )
}

export default Header