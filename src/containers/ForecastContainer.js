import React from 'react'
import CityName from '../components/CityName'
import DayContainer from './DayContainer'

function ForecastContainer (props){
  return (
        <div>
          <CityName/>
          <DayContainer
          allDays={props.allDays}
          currentCity={props.currentCity}
          />
        </div>
  )
}

export default ForecastContainer
