import React from 'react'

class Day extends React.Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  componentDidMount(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=cloudy&api_key=Ki8ew01YlH0AR1uWQTY2fytPe070tbIg&limit=1`)
    .then(res => res.json())
    .then(skyObj => console.log("from day component ", skyObj))
  }


  render(){
    return(
      <div className="ui">
      {"nah kid"}
      </div>
    )
  }
}

export default Day
