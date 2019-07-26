import React from 'react'

class Day extends React.Component {
  render(){
    return(
      <div className="ui card">
        <div className="content">
          <div className="header">
           Monday
          </div>

          <div className="header">
            88
          </div>
        </div>
        <div className="image">
          <img alt="hey" src="https://onaircode.com/wp-content/uploads/2017/10/Daily-UI-Challenge-Weather-App.png" />
        </div>
        <div className="content">
          <div className="header"> weather condition</div>
        </div>
      </div>
    )
  }
}

export default Day
