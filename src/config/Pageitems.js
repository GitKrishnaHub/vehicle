import './Pagestyle.css'
import { Add, FilterAlt, Search } from '@mui/icons-material'
import React,{useState} from 'react'
import axios from 'axios'


export const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/user/search?q=${searchQuery}`);
      setSearchResults(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data. Please try again.');
      setSearchResults([]);
    }
  };
    return (
        <div className="searchbar">
            <input type="text" value={searchQuery} onChange={handleInputChange} name="search" id="search" placeholder='Search' />
            <span onClick={handleSearch}><Search /></span>
            {error && <div>{error}</div>}
        </div>
    )
}
export const FilterComponent = () => {
    return (
        <div className="Filter">
            <button type='button'><FilterAlt />Filters</button>
        </div>
    )
}
export const AddComponent = (props) => {
    return (
        <div className="Add">
            <button type='button' id='Add-btn' onClick={props.onclick}>{props.icon}{props.name}</button>
        </div>
    )
}
 
