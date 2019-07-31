import React from 'react'
import Day from '../containers/Day'

function DayContainer(props){
  // console.log(props)
  return (
    <div className="ui five column grid">
      <div className= "row">
        {
          props.allDays.map(day => {
            return <Day handleClick={props.handleClick} dayData={day}/>
          })
        }
      </div>
    </div>
  )
}

export default DayContainer
























//
