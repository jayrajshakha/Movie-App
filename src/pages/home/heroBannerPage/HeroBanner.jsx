
import React, { useState } from 'react'
import './style.scss'

import { useNavigate } from 'react-router-dom'

const HeroBanner = () => {

const [background , setBackground] = useState("")
const [query, setQuery] = useState("")

const navigate = useNavigate()

const searchQueryHanlers = (e) => {

  console.log(e.key);
  console.log(query);


  if(e.key === 'Enter' && query.length > 0) {
         navigate(`/search/${query}`)
  }
} 


  return (
    <div className="heroBanner">
       <div className="wraper">
         <div className="bannerContent">
          <span className="title">
             Wel Come
          </span>
          <span className="subTitle">
            Millions movies, TV shows and people to discover explore now  
          </span>
          <div className="serchInput">
            <input 
              onKeyUp={searchQueryHanlers}
              onChange={(e) =>  setQuery(e.target.value)}
              type="text" 
              placeholder='search for movies and TV shows...'
              />
              <button>Search</button>              
          </div>
         </div>
       </div>
    </div>
  )
}

export default HeroBanner