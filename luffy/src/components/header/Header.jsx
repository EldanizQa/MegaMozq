import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Diiiiooo</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME}  />
        </div>
        <a href='#cotact' className='scroll__down'>Scroll Down</a>
      
      </div>
    </header>
  )
}

export default Header