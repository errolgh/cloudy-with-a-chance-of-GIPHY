import React from 'react'
import SearchBar from '../components/SearchBar'
import CityName from '../components/CityName'
import ForecastContainer from '../containers/ForecastContainer'


class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <SearchBar/>
        <CityName/>
        <ForecastContainer/>
      </React.Fragment>
    )
  }
}

export default Home
