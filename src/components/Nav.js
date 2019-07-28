import React from 'react'

export default class Nav extends React.Component {
  render(){
    return(
      <div className="ui small inverted menu blue">
        <div className="item">
          <i className="cloud icon"></i>
        </div>
        <span className="nav-title">
          Cloudy with a Chance of GIPHY
        </span>
        <div className="right menu">
          <div className="item">
            <div className="ui primary button">
              Save This Forecast
            </div>
          </div>
          <div className="item">
            <div className="ui vertical animated button" tabindex="0">
              <div className="hidden content">
                Profile
              </div>
              <div className="visible content">
              <i className="user icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
