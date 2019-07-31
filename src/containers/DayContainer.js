import React from 'react'
import Day from '../containers/Day'


function DayContainer(props){

  const generateDays = () => {
    return props.allDays.map(day => {
    return <Day
    dayData={day}
    key={day.id}
    cardView={props.cardView}
    clickHandler={props.cardView}
    selectedDay={props.selectedDay}
    />
  })
}

  const generateCard = () => {
    return <Day
    dayData={props.selectedDay}
    key={props.selectedDay.id}
    cardView={props.cardView}
    clickHandler={props.cardView}
    selectedDay={props.selectedDay}
    />
  }

  const clearDay = () => {
    return generateDays()
  }

  return (
    <div className="ui five column grid">
      <div className= "row">
        {
          props.selectedDay.id ? generateCard() : generateDays()
        }
      </div>
    </div>
  )
}

export default DayContainer
























//
