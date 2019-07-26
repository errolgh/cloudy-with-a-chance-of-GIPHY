import React from 'react'
import CityName from '../components/CityName'
import DayContainer from './DayContainer'

function ForecastContainer (){
  return (
        <div>
          <CityName/>
          <DayContainer/>
        </div>
  )
}

export default ForecastContainer
