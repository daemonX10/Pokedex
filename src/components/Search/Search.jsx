import useDebounce from '../../hooks/useDebounce'
import './Search.css'
import  PropTypes from 'prop-types'

const Search = ( {updateSearchTerm} ) => {
  const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value.toLowerCase()) , 2000);
  
  const clearSearch = () => {
    document.getElementById('search-pokemon').value = ''
    updateSearchTerm('');
    debounceUpdateSearch();
  }

  return (
    <div className='search'>
    <input 
    id='search-pokemon'
    type="text" 
    placeholder='Pokemon Name or ID '
    onChange={debounceUpdateSearch} /> 
    <button onClick={clearSearch} >Clear</button>
    </div>

  )
}

Search.propTypes = {
  updateSearchTerm:PropTypes.func
}


export default Search