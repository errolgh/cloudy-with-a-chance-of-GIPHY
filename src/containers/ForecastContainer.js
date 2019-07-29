import React from 'react'
import DayContainer from './DayContainer'

function ForecastContainer (props){
  return (
        <div>
          <DayContainer allDays={props.allDays}/>
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
