 import axios from 'axios'
import Cookies from 'universal-cookie';

const FetchApiData = async (url) => {
  try {
    // const cookies = new Cookies();
    // const token = cookies.get('token');
    const response = await axios.get(url, {
      withCredentials: true,
    });
    if (response.status === 200) {
      return response
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
  } catch (err) {
    console.error('Error during fetch:', err);
  }
}

export default FetchApiData
