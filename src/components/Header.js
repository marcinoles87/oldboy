import React from 'react'

import logo from '../img/logo.png'

function Header() {
  return (
    <div className='header-container'>
        <h1>Witamy na stronie Grębałowianka Oldboje 2024</h1>
        <img src={logo} alt='logo_grebalowianka'></img>
    </div>
  )
}

export default Header