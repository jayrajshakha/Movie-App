import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'

const options = {
  method: 'GET',
  headers: {
    
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTVhYjdmMzc0ZTA3ZWM1YTAxNTZmMmZkMDE3YzU1MSIsInN1YiI6IjY1MjJiYjJmYzUwYWQyMDEwYjAyOTExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o2Qha3yF16Elwo072sX4o031qucfdlN9jDIK1CyAnnU'
  }
};

 export const fetchData = async (url,params ) => {


  try {

    const {data} = await axios.get(BASE_URL + url, {
      headers : options.headers,
      params : params

    });

     return data
    
  } catch (error) {

    console.log('error : ' + error.message);
    return error
    
  }

  
 }
