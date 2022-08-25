import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className='header'>

    <div className='logo'>
        <img src={logo}></img>
    </div>
    <div className="main_routing">
        <span>Products</span>
        <span>Invest</span>
        <span>Community</span>
        <span>About</span>

    </div>
    <div >
        <span className='earlyaccess'>
        Early Access
        </span>
    </div>
    </div>
  )
}
