import React from 'react'
import AdvertismentVideo from './Video/Advertisment.mp4'
import './Advertisement.css'

const Advertisement = () => {
  return (
    <div className='advertisement'>
      <video src={AdvertismentVideo} autoPlay loop muted></video>
    </div>
  )
}

export default Advertisement
