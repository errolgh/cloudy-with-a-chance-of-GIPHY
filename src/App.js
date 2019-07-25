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
      allDays: []
    }
  }

  componentDidMount(){
    fetch(``)
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
