 import axios from 'axios'
import Cookies from 'universal-cookie';

const FetchApiData = async (url) => {
   try{
    const {data} = await axios.get(url, {
      withCredentials: true,
    })
    return data 
   }catch(err){
    console.log(err.message)
   }
      
}

export default FetchApiData
