
import  { useEffect, useState } from 'react'
import './style.scss'
import Img from '../../../components/lazyloading/Img'
import ContentWrapper from '../../../components/contentWrapper/ContetntWrapper'


import { useNavigate } from 'react-router-dom'

import useFetch from '../../../Hooks/UseFetch'
import { useSelector } from 'react-redux'

const HeroBanner = () => {

  const {url} = useSelector(state => state.home)

const [background , setBackground] = useState("")
const [query, setQuery] = useState("")


const {data, loading} = useFetch('/movie/top_rated')


const navigate = useNavigate()

useEffect(()=>{
    
    const bg = "https://image.tmdb.org/t/p/original" + data?.results[Math.floor(Math.random() * 20)].backdrop_path
    console.log(bg);
    setBackground(bg)


},[data])

const searchQueryHanlers = (e) => {

  if(e.key === 'Enter' && query.length > 0) {
         navigate(`/search/${query}`)
  }
} 


  return (
    <div className="heroBanner">
    {     !loading && <div className='backdrop_img'>

          <Img src = {background}> </Img>

      </div>}

      <ContentWrapper>
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

      </ContentWrapper>
      
        
       </div>
  
  )
}

export default HeroBanner