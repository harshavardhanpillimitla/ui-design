import React from 'react'
import arrow from '../assets/arrow.png'

export default function Footer() {
  return (
        <div>

        <div className='flex-container'>
            <span className='logo'><img src={arrow}></img></span>
            <span className='banner-text'>Drive your money to <br/> work smarter than others</span>
            <span className='banner-text1'>A safe and secure invesment nedd guided aproach with real time <br/> analytics and risk analysis , we can help you to catch all at once.</span>
        </div>
        <div className='footer-banner'>
            <div className='signup_banner'>Signup Now & Get</div>
            <div className='flex-lower-banner-container'>
                <div className='grid-container-footer1'><span className='avert-no-1'>01</span><span className='advert-heading-1'>Early Access</span><span className='advert-content-1'>you'll be priorities from the pool of millions</span></div>
                <div className='grid-container-footer2'><span className='avert-no-2'>02</span><span className='advert-heading-2'>Zero Brokerage</span><span className='advert-content-2'>you'll be priorities from the pool of millions</span></div>
                <div className='grid-container-footer3'><span className='avert-no-3'>03</span><span className='advert-heading-3'>Zero Processing Charges</span><span className='advert-content-3'>you'll be priorities from the pool of millions</span></div>
            </div>

        </div>
        </div>
    
  )
}
