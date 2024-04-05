import React from 'react'

import logo from '../img/logo.png'

function Header() {

  const toggleMode = () =>{
    const app = document.querySelector('.app-container')
    app.classList.toggle('dark')
  }
  return (
    <div className='header-container'>
        <h1>Grębałowianka Oldboje</h1>
        <img src={logo} alt='logo_grebalowianka'></img>
        <button className='toogle-mode' onClick={toggleMode}>white/black mode</button>
    </div>
  )
}

export default Header