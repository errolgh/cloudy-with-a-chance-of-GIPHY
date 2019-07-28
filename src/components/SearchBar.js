import React from 'react'

function SearchBar(){
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"type="text"placeholder="Enter A Zip Code"/>
      </div>
      <span>
        <button class="medium circular ui blue button">Search</button>
      </span>
    </div>
  )
}

export default SearchBar
