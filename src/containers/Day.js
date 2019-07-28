import React from 'react'

class Day extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=cloudy&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=1`)
    .then(res => res.json())
    .then(skyObj => console.log("from day component ", skyObj))
  }


  render(){
    return(
      <div className="ui column">
        <div className="ui card">
          <div>
            {"Dow"}
          </div>
          <div>
            {this.props.dayObj.maxTemp}
          </div>
          <div>
            {"SkyCondition"}
          </div>
          <div>
            {this.props.dayObj.condition}
          </div>
        </div>
      </div>
    )
  }
}

export default Day
