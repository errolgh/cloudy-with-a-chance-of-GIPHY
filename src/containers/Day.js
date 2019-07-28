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
    return(
      <div className="ui column">
        <div className="ui card">
          <div>
            {"Dow"}
          </div>
          <div>
            {this.props.dayData.maxTemp}°F
          </div>
          <div className="image">
            <img src={this.state.gif} alt={this.props.dayData.condition}/>
          </div>
          <div>
            {this.props.dayData.condition}
          </div>
        </div>
      </div>
    )
  }
}

export default Day
