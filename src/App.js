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
      searchText: "90210",
    }
  }

  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchText},us&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => {
//creating weatherData for each city
  console.log(weatherArray)
      let monthArray = [
      "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
          ]
      let month = parseInt(weatherArray.list[0].dt_txt.split("-")[1] -1)
      let year = weatherArray.list[0].dt_txt.split("-")[0]
      let day = parseInt(weatherArray.list[0].dt_txt.split("-")[2])
      let time = weatherArray.list[8].dt_txt.split("-")[2].split(" ")[1]
      let jsReadableTime = `${monthArray[month]} ${day}, ${year} ${time}`;

      let dayOfWeekNum = new Date(jsReadableTime).getDay()
      let weekArray = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
      ]

      let currentDayOfWeek = weekArray[dayOfWeekNum]

      let dynamicWeekDayArray = [
        weekArray[dayOfWeekNum],
         weekArray[dayOfWeekNum+1],
          weekArray[dayOfWeekNum+2],
           weekArray[dayOfWeekNum+3],
            weekArray[dayOfWeekNum+4]
      ]

      let cityName = weatherArray.city.name

      let weatherObjects = [
       {id: 1, condition: weatherArray.list[0].weather[0].description, minTemp: Math.round((weatherArray.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[0].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[0].dt_txt, dayOfWeek: dynamicWeekDayArray[0]},

       {id: 2, condition: weatherArray.list[8].weather[0].description, minTemp: Math.round((weatherArray.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[8].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[8].dt_txt, dayOfWeek: dynamicWeekDayArray[1]},

       {id: 3, condition: weatherArray.list[16].weather[0].description, minTemp: Math.round((weatherArray.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[16].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[16].dt_txt, dayOfWeek: dynamicWeekDayArray[2]},

       {id: 4, condition: weatherArray.list[24].weather[0].description, minTemp: Math.round((weatherArray.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[24].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[24].dt_txt, dayOfWeek: dynamicWeekDayArray[3]},

       {id: 5, condition: weatherArray.list[32].weather[0].description, minTemp: Math.round((weatherArray.list[32].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[32].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[32].dt_txt, dayOfWeek: dynamicWeekDayArray[4]}
      ]

      this.setState({
        allDays: weatherObjects,
        currentCity: cityName,
      })
    })
  }

  handleChangeSearchText = (event) => {
    event.persist()
  }

  handleSubmitOfSearch = (event) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchText},us&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => console.log(weatherArray))
    this.setState({
      searchText: this.state.searchText
    })
  }


  render(){
    return (
      <div className="App">
        <Nav/>
        <SearchBar
          handleChangeSearchText={this.handleChangeSearchText}
          searchText={this.state.searchText}
        />
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
