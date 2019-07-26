import React from 'react'
import Day from '../components/Day'
import CityName from '../components/City'

function ForecastContainer (){
  return (
        <div className="ui card">
          <CityName/>
          <Day/>
          <Day/>
          <Day/>
        </div>
  )
}

export default ForecastContainer
