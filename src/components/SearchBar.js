import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form>
        <div className="search-element ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Enter A Zip Code"
              value={null}
              // onSubmit={handleChangeSearchText}
            />
          </div>
          <span>
            <button className="medium circular ui green button">
              Search
            </button>
          </span>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
