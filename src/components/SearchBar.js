import React from 'react'

function SearchBar(){
  return (
    <div>
      <div className="search-element ui search">
        <div className="ui icon input">
          <input className="prompt"type="text"placeholder="Enter A Zip Code"/>
        </div>
        <span>
          <button className="medium circular ui blue button">Search</button>
        </span>
      </div>
    </div>
  )
}

export default SearchBar
