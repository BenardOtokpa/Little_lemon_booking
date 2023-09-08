import React from 'react'
import NavBar from './NavBar'
import logo from '../assets/Lemon-logo.png'


const Header = () => {
  return (
    <div>
        <img src={logo} alt='' />
        <NavBar />
    </div>
  )
}

export default Header