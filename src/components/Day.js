import React from 'react'

class Day extends React.Component {
  constructor(props){
    super(props)
    this.state={
      gif: null
    }
  }

  condition = ()=>{
    return this.props.dayData.condition
  }
  
  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.condition()}y&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=1`)
    .then(res => res.json())
    .then(skyObj => {
      // debugger
      this.setState({
        gif: skyObj.data[0].images.downsized_medium.url
      })
    })
  }

  

  render(){
    return(
      <div className="ui card">
        <div className="content">
          <div className="header">
           {this.props.dayData.condition}
          </div>

          <div className="header">
            {this.props.dayData.maxTemp}°F
          </div>
        </div>
        <div className="image">
          <img alt="hey" src={this.state.gif} />
        </div>
        {/* <div className="content">
          <div className="header"> weather condition</div>
        </div> */}
      </div>
    )
  }
}

export default Day

// condition:
// "clear sky"
// maxTemp:
// 67
// minTemp:
// 67
