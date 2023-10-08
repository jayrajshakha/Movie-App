import { useEffect } from "react"

import { fetchData } from "./utils/api"


const App = () => {

 

  useEffect(() => {
    
    apiTesting()
  
  }, [])


  const apiTesting = () => {
    fetchData('/movie/popular')
    .then(res => console.log(res, 'data'))
  }


 
  

  return (
    <div>
      <h1>Jay Rajshakha </h1>
    </div>
  )
}

export default App
