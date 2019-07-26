import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ForecastContainer from './containers/ForecastContainer'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allDays: [],
      currentCity: null,
    }
  }


//hardcoded Moscow until we can make SearchBar and RESTClient functional...
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => {
//creating weatherData for each city
      let cityName = weatherArray.city.name
      let cityCode = weatherArray.city.id
      let cityObject = {name: cityName, code: cityCode}

      let weatherObject = [
       {day1: {condition: weatherArray.list[0].weather[0].description, minTemp: Math.round((weatherArray.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[0].main.temp_max - 273.15)*1.8 + 32)}},

       {day2: {condition: weatherArray.list[8].weather[0].description, minTemp: Math.round((weatherArray.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[8].main.temp_max - 273.15)*1.8 + 32)}},

       {day3: {condition: weatherArray.list[16].weather[0].description, minTemp: Math.round((weatherArray.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[16].main.temp_max - 273.15)*1.8 + 32)}},

       {day4: {condition: weatherArray.list[24].weather[0].description, minTemp: Math.round((weatherArray.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[24].main.temp_max - 273.15)*1.8 + 32)}},

       {day5: {condition: weatherArray.list[30].weather[0].description, minTemp: Math.round((weatherArray.list[30].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[30].main.temp_max - 273.15)*1.8 + 32)}}
      ]
      console.log(weatherArray)
      this.setState({
        allDays: weatherObject,
        currentCity: cityObject
      })
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <SearchBar/>
        <ForecastContainer
          allDays={this.state.allDays}
          currentCity={this.state.currentCity}
        />
      </div>
    );
  }

}

export default App;
