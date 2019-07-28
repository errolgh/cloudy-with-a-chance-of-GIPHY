import React from 'react'

class Day extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        gif: null,
      }
  }

  condition = () => {
    return this.props.dayData.condition
  }

  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.condition()}&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=20`)
    .then(res => res.json())
    .then(skyObj => {

      let gifArray = skyObj.data.map((gif) => {
        return gif.images.downsized_large.url
      })

      this.setState({
        gif: gifArray[Math.floor(Math.random(skyObj.data.length))]
      })
    })
  }


  render(){

    let dt = new Date("December 25, 2019 23:15:00").getDay()

    return(
      <div className="ui column">
        <div className="ui card">
          <div className="day-of-week">
            {
              dt
            }
          </div>
          <div className="temp">
            {this.props.dayData.maxTemp}°F
          </div>
          <div className="image">
            <img src={this.state.gif} alt={this.props.dayData.condition}/>
          </div>
          <div className="temp">
            {this.props.dayData.condition}
          </div>
        </div>
      </div>
    )
  }
}

export default Day
