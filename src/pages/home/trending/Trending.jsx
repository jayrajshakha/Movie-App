import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContetntWrapper'
import SwitchTab from '../../../components/switchTab/SwitchTab'

const Trending = () => {

  const onTabChange = (tab) => {}

  return (
      <div className="carouselSection">
        <ContentWrapper>
           <span className="carouselTitle">Trending</span>
           <SwitchTab 
           onTabChange = {onTabChange}
           data ={["Day", "Week"]} />
        </ContentWrapper>
      </div>
  )
}

export default Trending