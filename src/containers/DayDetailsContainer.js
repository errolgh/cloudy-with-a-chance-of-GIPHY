import React from 'react'


const DayDetailsContainer= (props)=>{
  let {day} = props
  


  return day ?
    <div className="ui grid">
      <div className= "row">
       HEY THANKS FOR TRYING
      </div>
    </div>:
    null
  
}

export default DayDetailsContainer