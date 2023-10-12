
import React from 'react'
import './style.scss'
import HeroBanner from './heroBannerPage/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const HomePage = () => {

  
  return (
    <div className='heroPage'>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />

    </div>
  )
}

export default HomePage