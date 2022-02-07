import React , {useState} from 'react'

const SearchBar = ({submitPage}) =>{
  const [term , setTerm] = useState('');

  const onSubmitPage = (e) =>{
    e.preventDefault();
    submitPage(term)
  }
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmitPage} className="ui form">
        <div className="field">
          <label>Search for A Video</label>
          <input  onChange={(e) => setTerm(e.target.value)} value={term} type="text" placeholder="Search ..."/>
        </div>
      </form>
    </div>
  )
}



export default SearchBar
