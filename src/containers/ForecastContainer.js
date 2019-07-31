import React from 'react'
import DayContainer from './DayContainer'

function ForecastContainer (props){
  return (
        <div>
          <DayContainer
            allDays={props.allDays}
            cardView={props.cardView}
            selectedDay={props.selectedDay}
          />
        </div>
  )
}

export default ForecastContainer
