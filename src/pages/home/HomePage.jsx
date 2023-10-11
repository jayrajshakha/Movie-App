
import React from 'react'
import './style.scss'
import HeroBanner from './heroBannerPage/HeroBanner'
import Trending from './trending/Trending'

const HomePage = () => {

  
  return (
    <div className='heroPage'>
        <HeroBanner />
        <Trending />

    </div>
  )
}

export default HomePage