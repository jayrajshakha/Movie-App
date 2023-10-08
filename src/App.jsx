import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getApiConfig } from "./store/HomeSlice"
import { fetchData } from "./utils/api"
import { BrowserRouter, Routes ,Route  } from 'react-router-dom'

// component and pages are imported here 

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import PageNotFound from "./pages/404Page/PageNotFound"
import Detail from "./pages/detailsPage/Detail"
import Explore from "./pages/expolerPage/Explore"
import HomePage from "./pages/home/HomePage"
import SerchResult from './pages/searchResultsPage/SerchResult'
 
const App = () => {


  const dispatch = useDispatch()

  const url = useSelector(state => state.home.url)


  useEffect(() => {
    
    apiTesting()
  
  }, [])


  const apiTesting = () => {
    fetchData('/movie/popular')
    .then(res => dispatch(getApiConfig(res.results
      )))
  }
console.log(url);


  return (
        <BrowserRouter>
        <Header />
          <Routes>
            
             <Route path="/"  element={<HomePage />}  />
             <Route path="/:mediaType:id"  element={<Detail/>}  />
             <Route path="/search/:query"  element={< SerchResult/>}  />
             <Route path="/explore/:mediaType"  element={<Explore/>}  />
             <Route path="/explore/:mediaType"  element={<Explore/>}  />
             <Route path="*"  element={<PageNotFound/>}  />

          </Routes>
         <Footer />
        </BrowserRouter>
  )
}

export default App
