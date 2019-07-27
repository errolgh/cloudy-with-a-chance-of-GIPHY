import React from 'react'

function SearchBar(){
  return (
    <div className="ui inverted segment">
      <div className="ui inverted massive form">
        <div className=" 12 wide field">
          <label>Search By Zipcode
            <input></input>
          </label>
          <input className="ui submit button inverted olive massive " type="submit" value="Submit" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
