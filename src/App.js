import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import ForecastContainer from './containers/ForecastContainer'
import CityName from './components/CityName'
import Nav from './components/Nav'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allDays: [],
      currentCity: null,
      searchZipCode: "20005",
    }
  }


//hardcoded Moscow until we can make SearchBar and RESTClient functional...
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchZipCode}&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => {
//creating weatherData for each city

      console.log("December 25, 2019 23:15:00")
      console.log("")

      let cityName = weatherArray.city.name

      let weatherObjects = [
       {condition: weatherArray.list[0].weather[0].description, minTemp: Math.round((weatherArray.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[0].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[0].dt_txt},

       {condition: weatherArray.list[8].weather[0].description, minTemp: Math.round((weatherArray.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[8].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[8].dt_txt},

       {condition: weatherArray.list[16].weather[0].description, minTemp: Math.round((weatherArray.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[16].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[16].dt_txt},

       {condition: weatherArray.list[24].weather[0].description, minTemp: Math.round((weatherArray.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[24].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[24].dt_txt},

       {condition: weatherArray.list[32].weather[0].description, minTemp: Math.round((weatherArray.list[32].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[32].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[32].dt_txt}
      ]
      // console.log("original weatherArray: ", weatherArray)
      // console.log("weatherObject: ", weatherObjects)
      this.setState({
        allDays: weatherObjects,
        currentCity: cityName,
      })
    })
  }

  render(){
    return (
      <div className="App">
      <Nav/>
      <SearchBar/>
        <CityName currentCity={this.state.currentCity}/>
        <ForecastContainer
          allDays={this.state.allDays}
          currentCity={this.state.currentCity}
        />
      </div>
    );
  }

}

export default App;
