import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ForecastContainer from './containers/ForecastContainer'

function App() {
  const [allDays, setAlldays] = useState([])

  // useEffect(() => {
  //   fetch('url')
  //       .then(response => response.json())
  //       .then(obj => {
            
  //       });
  // });

  

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
