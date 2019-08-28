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
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.condition()}&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=15`)
    .then(res => res.json())
    .then(skyObj => {
      let gifArray = skyObj.data.map((gif) => {
        return gif.images.downsized_large.url
      })
      let chosenGif = gifArray[Math.round(Math.random()*skyObj.data.length)]
      this.setState({
        gif: chosenGif
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.dayData !== this.props.dayData){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.condition()}&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=15`)
    .then(res => res.json())
    .then(skyObj => {
      let gifArray = skyObj.data.map((gif) => {
        return gif.images.downsized_large.url
      })
      let chosenGif = gifArray[Math.round(Math.random()*skyObj.data.length)]
      this.setState({
        gif: chosenGif
      })
    })}
  }


  render(){
    return(
      <div className="ui column">
        <div className="ui card white" onClick={
          () => {
            this.props.selectedDay.id ? this.props.clickHandler({})
            : this.props.clickHandler(this.props.dayData)}
        }>
          <div className="day-of-week">
            {this.props.dayData.dayOfWeek.slice(0, 3)}
          </div>
          <div className="temp">
            {this.props.dayData.maxTemp}°F
          </div>
          <div className="image">
            <img
              src={this.state.gif || 'https://media.giphy.com/media/fMvvwdTWamlA4/giphy.gif'}
              alt={this.props.dayData.condition}
            />
          </div>
          <div onChange={this.handleChange} className="temp">
            {this.props.dayData.condition}
          </div>
        </div>
      </div>
    )
  }
}

export default Day
