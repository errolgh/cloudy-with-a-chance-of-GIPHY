import React from 'react'
import Day from '../components/Day'

function ForecastContainer (){
  return (
        <div className="ui card">
          <Day/>
          <Day/>
          <Day/>
        </div>
  )
}

export default ForecastContainer
