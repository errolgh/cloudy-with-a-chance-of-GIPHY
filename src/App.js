import React from 'react';
// import logo from './logo.svg';
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
      currentZip: "90210"
    }
  }

  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchText},us&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => {
//creating custom weatherData for each city
  console.log("original weatherArray: ",weatherArray)
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

      // let currentDayOfWeek = weekArray[dayOfWeekNum]

      let dynamicWeekDayArray = [
        weekArray[dayOfWeekNum],
         weekArray[dayOfWeekNum+1],
          weekArray[dayOfWeekNum+2],
           weekArray[dayOfWeekNum+3],
            weekArray[dayOfWeekNum+4]
      ]

      let cityName = weatherArray.city.name

      let dayObjectsArray = [
       {id: 1, condition: weatherArray.list[0].weather[0].description, minTemp: Math.round((weatherArray.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[0].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[0].dt_txt, dayOfWeek: dynamicWeekDayArray[0], humidity: weatherArray.list[0].main.humidity},

       {id: 2, condition: weatherArray.list[8].weather[0].description, minTemp: Math.round((weatherArray.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[8].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[8].dt_txt, dayOfWeek: dynamicWeekDayArray[1], humidity: weatherArray.list[8].main.humidity},

       {id: 3, condition: weatherArray.list[16].weather[0].description, minTemp: Math.round((weatherArray.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[16].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[16].dt_txt, dayOfWeek: dynamicWeekDayArray[2], humidity: weatherArray.list[16].main.humidity},

       {id: 4, condition: weatherArray.list[24].weather[0].description, minTemp: Math.round((weatherArray.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[24].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[24].dt_txt, dayOfWeek: dynamicWeekDayArray[3], humidity: weatherArray.list[24].main.humidity},

       {id: 5, condition: weatherArray.list[32].weather[0].description, minTemp: Math.round((weatherArray.list[32].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[32].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[32].dt_txt, dayOfWeek: dynamicWeekDayArray[4], humidity: weatherArray.list[32].main.humidity}
      ]
console.log("modified day object: ", dayObjectsArray)
      this.setState({
        allDays: dayObjectsArray,
        currentCity: cityName,
      })
    })
  }

  handleChangeSearchText = (event) => {
    event.persist()
    this.setState({
      searchText: event.target.value
    })
  }

  handleSubmitOfSearch = (event) => {
    event.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchText},us&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherArray) => {
//creating custom weatherData for each city
  // console.log(weatherArray)
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

      // let currentDayOfWeek = weekArray[dayOfWeekNum]

      let dynamicWeekDayArray = [
        weekArray[dayOfWeekNum],
         weekArray[dayOfWeekNum+1],
          weekArray[dayOfWeekNum+2],
           weekArray[dayOfWeekNum+3],
            weekArray[dayOfWeekNum+4]
      ]

      let cityName = weatherArray.city.name

      let dayObjectsArray = [
       {id: 1, condition: weatherArray.list[0].weather[0].description, minTemp: Math.round((weatherArray.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[0].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[0].dt_txt, dayOfWeek: dynamicWeekDayArray[0], humidity: weatherArray.list[0].main.humidity},

       {id: 2, condition: weatherArray.list[8].weather[0].description, minTemp: Math.round((weatherArray.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[8].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[8].dt_txt, dayOfWeek: dynamicWeekDayArray[1], humidity: weatherArray.list[8].main.humidity},

       {id: 3, condition: weatherArray.list[16].weather[0].description, minTemp: Math.round((weatherArray.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[16].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[16].dt_txt, dayOfWeek: dynamicWeekDayArray[2], humidity: weatherArray.list[16].main.humidity},

       {id: 4, condition: weatherArray.list[24].weather[0].description, minTemp: Math.round((weatherArray.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[24].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[24].dt_txt, dayOfWeek: dynamicWeekDayArray[3], humidity: weatherArray.list[24].main.humidity},

       {id: 5, condition: weatherArray.list[32].weather[0].description, minTemp: Math.round((weatherArray.list[32].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherArray.list[32].main.temp_max - 273.15)*1.8 + 32), date: weatherArray.list[32].dt_txt, dayOfWeek: dynamicWeekDayArray[4], humidity: weatherArray.list[32].main.humidity}
      ]

      this.setState({
        allDays: dayObjectsArray,
        currentCity: cityName,
        currentZip: this.state.searchText
      })
    })
  }

  saveForecast = (event) => {
    console.log("saving forecast")
    console.log("sky condition: ", this.state.allDays[0].condition)
    console.log("date: ", this.state.allDays[0].date)
    console.log("dayOfWeek: ", this.state.allDays[0].dayOfWeek)
    console.log("humidity: ", this.state.allDays[0].humidity)
    console.log("minimum temperature: ", this.state.allDays[0].minTemp)
    console.log("maximum temperature: ", this.state.allDays[0].maxTemp)
    console.log("daysArray: ", this.state.allDays)
    console.log("city: ", this.state.currentCity)
    console.log(`${this.state.allDays[0].date} - ${this.state.allDays[4].date}`)
// debugger
    event.preventDefault()
    fetch('http://localhost:3000/forecasts',{
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        days: [
          {
            condition: this.state.allDays[0].condition,
            date: this.state.allDays[0].date,
            day_of_week: this.state.allDays[0].dayOfWeek,
            humidity: this.state.allDays[0].humidity,
            min_temp: this.state.allDays[0].minTemp,
            max_temp: this.state.allDays[0].maxTemp,
          },
          {
            condition: this.state.allDays[1].condition,
            date: this.state.allDays[1].date,
            day_of_week: this.state.allDays[1].dayOfWeek,
            humidity: this.state.allDays[1].humidity,
            min_temp: this.state.allDays[1].minTemp,
            max_temp: this.state.allDays[1].maxTemp,
          },
          {
            condition: this.state.allDays[2].condition,
            date: this.state.allDays[2].date,
            day_of_week: this.state.allDays[2].dayOfWeek,
            humidity: this.state.allDays[2].humidity,
            min_temp: this.state.allDays[2].minTemp,
            max_temp: this.state.allDays[2].maxTemp,
          },
          {
            condition: this.state.allDays[3].condition,
            date: this.state.allDays[3].date,
            day_of_week: this.state.allDays[3].dayOfWeek,
            humidity: this.state.allDays[3].humidity,
            min_temp: this.state.allDays[3].minTemp,
            max_temp: this.state.allDays[3].maxTemp,
          },
          {
            condition: this.state.allDays[4].condition,
            date: this.state.allDays[4].date,
            day_of_week: this.state.allDays[4].dayOfWeek,
            humidity: this.state.allDays[4].humidity,
            min_temp: this.state.allDays[4].minTemp,
            max_temp: this.state.allDays[4].maxTemp,
          },
        ],
        city: this.state.currentCity,
        date: `${this.state.allDays[0].date} - ${this.state.allDays[4].date}`
      })
    })//make a POST fetch call
    .then(res => res.json())
    .then(newForecast => {
      console.log("newForecast ", newForecast)
      // this.setState({
      //   taskList: [...this.state.taskList, newForecast]
      // })
    })
  }


  render(){
    return (
      <div className="App">
        <Nav
          saveForecast={this.saveForecast}
        />
        <SearchBar
          handleSubmitOfSearch={this.handleSubmitOfSearch}
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


/*

//when user submits new forcast
  onAddNewTask = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/tasks',{
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        text: this.state.formText,
        done: false
      })
    })//make a POST fetch call
    .then(res => res.json())
    .then(newForecast => {
      console.log(newForecast)
      this.setState({
        taskList: [...this.state.taskList, newForecast]
      })
    })
  }

*/
