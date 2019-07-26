import React from 'react'
import City from '../components/City'

function ForecastContainer (props){
  return (
        <div className="ui vertically divided padded grid"> 
          <City
          allDays={props.allDays}
          currentCity={props.currentCity}
          />
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
