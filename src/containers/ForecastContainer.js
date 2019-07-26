import React from 'react'
import City from '../components/City'

function ForecastContainer (){
  return (
        <div className="ui vertically divided padded grid"> 
          <City/><City/><City/>
        </div>
  )
}

export default ForecastContainer
