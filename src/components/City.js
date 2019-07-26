import React from 'react'

import Day from '../components/Day'
class City extends React.Component {
    render(){
      return(
        <div className="ui segment inverted olive bot-army">
            <div className="ui five column grid">
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            </div>
        </div>
      )
    }
  }



export default City
