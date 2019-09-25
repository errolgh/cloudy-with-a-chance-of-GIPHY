import React from 'react'
import SearchBar from '../components/SearchBar'
import CityName from '../components/CityName'
import ForecastContainer from '../containers/ForecastContainer'


class Home extends React.Component {
  render(){
    return(
      <React.Fragment>
        <SearchBar
          handleSubmitOfSearch={this.props.handleSubmitOfSearch}
          handleChangeSearchText={this.props.handleChangeSearchText}
          searchText={this.props.searchText}
        />
        <CityName
          currentCity={this.props.currentCity}
        />
        <ForecastContainer
          allDays={this.props.allDays}
          currentCity={this.props.currentCity}
          cardView={this.props.cardView}
          selectedDay={this.props.selectedDay}
        />
      </React.Fragment>
    )
  }
}

export default Home
