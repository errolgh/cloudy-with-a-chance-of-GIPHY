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
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.condition()}&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=10`)
    .then(res => res.json())
    .then(skyObj => {
      console.log(skyObj.data[Math.round(Math.random(skyObj.data.length))].images.downsized_large.url)

      let randomizer = skyObj.data[Math.round(Math.random(skyObj.data.length))].images.downsized_large.url

      this.setState({
        gif: randomizer
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
