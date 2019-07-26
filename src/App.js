import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ForecastContainer from './containers/ForecastContainer'
import Day from './components/Day'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allDays: [],
      currentCity: null
    }
  }


//hardcoded Moscow until we can make SearchBar and RESTClient functional...
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => {
      console.log(weatherArray.city)
      console.log(weatherArray)
      console.log(weatherArray.list[0]) // 3pm today
      console.log(weatherArray.list[8]) // 3pm tomorrow
      console.log(weatherArray.list[16]) // 3pm 2 days from today
      console.log(weatherArray.list[24]) // 3pm 3 days from today
      console.log(weatherArray.list[30]) // 3pm 4 days from today
      this.setState({
        allDays: weatherArray,
        currentCity: weatherArray.city
      })
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <SearchBar/>
        <ForecastContainer/>
      </div>
    );
  }

}

export default App;
