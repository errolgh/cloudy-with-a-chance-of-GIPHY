import React from 'react'

export default class Nav extends React.Component {
  render(){
    return(
      <div className="ui small inverted menu blue">
        <div className="item">
          <div className="ui vertical animated button blue" tabIndex="0">
            <div className="hidden content">
              ^_^
            </div>
            <div className="visible content">
              <i className="large cloud icon"></i>
            </div>
          </div>
        </div>
        <span className="nav-title">
          Cloudy with a Chance of GIPHY
        </span>
        <div className="right menu">
          <div className="item">
            <div className="ui vertical animated button blue" tabIndex="0">
              <div className="hidden content">
                Save
              </div>
              <div className="visible content">
                <i className="save icon"></i>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="ui vertical animated button blue" tabIndex="0">
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
