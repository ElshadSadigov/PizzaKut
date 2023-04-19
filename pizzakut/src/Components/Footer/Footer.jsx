import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sosial sosialmedia">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      </div>
      <div className="footerLogo">
        <span>Pizza</span>
        <span>Kut</span>
        <span>.com</span>
      </div>
    </div>
  )
}

export default Footer
