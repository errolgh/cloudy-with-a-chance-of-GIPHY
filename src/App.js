import React from 'react';
import logo from './logo.svg';
import './App.css';
// import SearchBar from './components/SearchBar'
// import CityName from './components/CityName'
import ForecastContainer from './containers/ForecastContainer'
import DayDetailsContainer from './containers/DayDetailsContainer'
import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'


import Nav from './components/Nav'
import { tsThisType } from '@babel/types';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      allDays: [],
      currentCity: null,
      searchText: "90210",
      selectedDay: null
    }
  }

  handleClick=(event)=>{
    // event.persist()
    this.setState({
      selectedDay: event
    })
  }


  

  componentDidMount(){

    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchText},us&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherObject) => {
//creating weatherData for each city
  console.log(weatherObject)
      let monthArray = [
      "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
          ]
      let month = parseInt(weatherObject.list[0].dt_txt.split("-")[1] -1)
      let year = weatherObject.list[0].dt_txt.split("-")[0]
      let day = parseInt(weatherObject.list[0].dt_txt.split("-")[2])
      let time = weatherObject.list[8].dt_txt.split("-")[2].split(" ")[1]
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
      // console.log("December 25, 2019 23:15:00")
      // console.log(`${monthArray[month]} ${day}, ${year} ${time}`)

      let cityName = weatherObject.city.name

      let weatherObjects = [
       {id: 1, condition: weatherObject.list[0].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[0].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[0].dt_txt, dayOfWeek: dynamicWeekDayArray[0]},

       {id: 2, condition: weatherObject.list[8].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[8].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[8].dt_txt, dayOfWeek: dynamicWeekDayArray[1]},

       {id: 3, condition: weatherObject.list[16].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[16].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[16].dt_txt, dayOfWeek: dynamicWeekDayArray[2]},

       {id: 4, condition: weatherObject.list[24].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[24].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[24].dt_txt, dayOfWeek: dynamicWeekDayArray[3]},

       {id: 5, condition: weatherObject.list[32].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[32].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[32].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[32].dt_txt, dayOfWeek: dynamicWeekDayArray[4]}
      ]

      this.setState({
        allDays: weatherObjects,
        currentCity: cityName,
      })
    })
  }

  handleChangeSearchText = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSubmitOfSearch = (event) => {
    event.preventDefault()

    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.searchText},us&APPID=ad60b93cfff576dcab5b6302b5148cd7`)
    .then(res => res.json())
    .then((weatherObject) => {
//creating weatherData for each city
    if(weatherObject.cod == "200"){
      let monthArray = [
      "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
          ]
      let month = parseInt(weatherObject.list[0].dt_txt.split("-")[1] -1)
      let year = weatherObject.list[0].dt_txt.split("-")[0]
      let day = parseInt(weatherObject.list[0].dt_txt.split("-")[2])
      let time = weatherObject.list[8].dt_txt.split("-")[2].split(" ")[1]
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
      // console.log("December 25, 2019 23:15:00")
      // console.log(`${monthArray[month]} ${day}, ${year} ${time}`)

      let cityName = weatherObject.city.name

      let weatherObjects = [
        
       {id: 1, condition: weatherObject.list[0].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[0].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[0].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[0].dt_txt, dayOfWeek: dynamicWeekDayArray[0]},

       {id: 2, condition: weatherObject.list[8].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[8].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[8].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[8].dt_txt, dayOfWeek: dynamicWeekDayArray[1]},

       {id: 3, condition: weatherObject.list[16].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[16].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[16].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[16].dt_txt, dayOfWeek: dynamicWeekDayArray[2]},

       {id: 4, condition: weatherObject.list[24].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[24].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[24].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[24].dt_txt, dayOfWeek: dynamicWeekDayArray[3]},

       {id: 5, condition: weatherObject.list[32].weather[0].description, city: cityName, minTemp: Math.round((weatherObject.list[32].main.temp_min - 273.15)*1.8 + 32), maxTemp: Math.round((weatherObject.list[32].main.temp_max - 273.15)*1.8 + 32), date: weatherObject.list[32].dt_txt, dayOfWeek: dynamicWeekDayArray[4]}
      ]
     debugger
      console.log("hi")
      this.setState({
        allDays: weatherObjects,
        currentCity: cityName,
      })
    } else{
      alert("wrong zip")
    }})
  
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){
    return (
      
        <div className="App">
          <Nav/>
            
          <Switch>
          
          <Route exact  path='/forecast' render={()=><ForecastContainer
            currentCity={this.state.currentCity}
            handleSubmitOfSearch= {this.handleSubmitOfSearch}
            handleChangeSearchText= {this.handleChangeSearchText}
            searchText={this.state.searchText}
            allDays={this.state.allDays}
            handleClick={this.handleClick}
            
            
          />
          }/>

            <Route exact  path='/forecast/:id' render={(props)=>{

              ////figuring out why no props are being passed
            console.log(props)
             return <DayDetailsContainer alldays={this.state.allDays} day={this.state.selectedDay}/>}} />
          
             
          {/* <Route component={ForecastContainer}/> */}
        </Switch>

        </div>
        
      
    );
  }

}




export default App;
