
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3'

const API_TOKEN = import.meta.env.VITE_API_TOKEN



const headers = {

    Authorization : 'Bearer ' + API_TOKEN
}


 export const fetchData =  async (url, params ) => {

   try {

        const {data}  = await axios.get(BASE_URL + url,  {
            param : params,
            header : headers.Authorization,
    
        })

        return data
        
    } catch (error) {

        console.log('Error fetching data :',  error);
        return error
        
    }
}







