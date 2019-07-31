import React from 'react'
import DayContainer from './DayContainer'
import SearchBar from '../components/SearchBar'
import CityName from '../components/CityName'

function ForecastContainer (props){
  return (
        <div>
          <SearchBar
          handleSubmitOfSearch= {props.handleSubmitOfSearch}
          handleChangeSearchText= {props.handleChangeSearchText}
          searchText={props.searchText}/>
          <CityName currentCity={props.currentCity}/>
          <DayContainer handleClick={props.handleClick} allDays={props.allDays}/>
        </div>
  )
}

export default ForecastContainer

// return (
//   <div>
//     <CityName/>
//     <DayContainer
    
//     />
//   </div>
// )
