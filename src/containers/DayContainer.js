import React from 'react'
import Day from '../containers/Day'

function DayContainer(props){
  console.log(props)
  return (
    <div>
      {
        props.allDays.map(day => {
          return <Day dayObj={day}/>
        })
      }
    </div>
  )
}

export default DayContainer
























//
