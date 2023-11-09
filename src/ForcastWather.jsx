import React from 'react'
import './style2.css'

export const ForcastWather = () => {

  return (
    <>
    
    <div className="container" id="wrapper">
        <h1>FORCAST WEATHER</h1>
    <form className="weather__search">
        <div style={{margin:20}}>
        <input type="text" placeholder="Search for a city..." className="weather__searchform" />
            <br/>
        <input type="submit" value="Search" className="weather__searchbutton" />
        </div>
    </form>
    <div className="container-fluid" id="current-weather">
        
      <div className="row">
        {/* Right panel */}
        <div className="col-md-4 col-sm-5">
          <h5>
            <spam id="cityName" />, <spam id="cityCode" />
          </h5>
          <h6 id="localDate" />
          <h5 id="localTime" />
          <a id="refreshButton" href="#">
            <i className="fa fa-refresh fa-fw" aria-hidden="true" /> Refresh
          </a>
        </div>
        {/* Center panel */}
        <div
          className="col-md-5 col-sm-7"
          style={{ margin: "10px auto", padding: 0 }}
        >
          <div className="row">
            <i className="wi" id="main-icon" style={{ fontSize: 85 }} />
            <div>
              <spam id="mainTemperature" />
              <p id="tempDescription" />
            </div>
            <p style={{ fontSize: "1.5rem" }}>
              <a href="#" className="active" id="celcius">
                °C
              </a>{" "}
              |{" "}
              <a href="#" id="farenheit">
                °F
              </a>
            </p>
          </div>
        </div>
        {/* Left panel */}
        <div
          className="col-xs-12 col-sm-12 col-md-3 row"
          style={{ textAlign: "right" }}
        >
          <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>
              Humidity: <spam id="humidity" />%
            </h6>
          </div>
          <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>
              Wind: <spam id="wind" /> m/s
            </h6>
          </div>
          <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>
              High: <spam id="mainTempHot" />°
            </h6>
          </div>
          <div className="col-md-12 col-sm-3 col-xs-3 side-weather-info">
            <h6>
              Low: <spam id="mainTempLow" />°
            </h6>
          </div>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div className="modal fade" id="protocol-modal" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Due to weather api restrictions, data can only be shown via HTTP
              request.
            </p>
            <p>Sorry for the inconvenience.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* 4 days forecast */}
    <div className="container-fluid">
      <div className="row" style={{ padding: 2 }}>
        {/* Day 1 */}
        <div className="col-md-3 col-sm-6 day-weather-box">
          <div className="col-sm-12 day-weather-inner-box">
            <div className="col-sm-8 forecast-main">
              <p id="forecast-day-1-name" />
              <div className="row">
                <h5 id="forecast-day-1-main">°</h5>
                <i className="wi forecast-icon" id="forecast-day-1-icon" />
              </div>
            </div>
            <div className="col-sm-4 forecast-min-low">
              <p>
                <spam className="high-temperature" id="forecast-day-1-ht" />
              </p>
              <p>
                <spam className="low-temperature" id="forecast-day-1-lt" />
              </p>
            </div>
          </div>
        </div>
        {/* Day 2 */}
        <div className="col-md-3 col-sm-6 day-weather-box">
          <div className="col-sm-12 day-weather-inner-box">
            <div className="col-sm-8 forecast-main">
              <p id="forecast-day-2-name" />
              <div className="row">
                <h5 id="forecast-day-2-main">°</h5>
                <i className="wi forecast-icon" id="forecast-day-2-icon" />
              </div>
            </div>
            <div className="col-sm-4 forecast-min-low">
              <p>
                <spam className="high-temperature" id="forecast-day-2-ht" />
              </p>
              <p>
                <spam className="low-temperature" id="forecast-day-2-lt" />
              </p>
            </div>
          </div>
        </div>
        {/* Day 3 */}
        <div className="col-md-3 col-sm-6 day-weather-box">
          <div className="col-sm-12 day-weather-inner-box">
            <div className="col-sm-8 forecast-main">
              <p id="forecast-day-3-name" />
              <div className="row">
                <h5 id="forecast-day-3-main">°</h5>
                <i className="wi forecast-icon" id="forecast-day-3-icon" />
              </div>
            </div>
            <div className="col-sm-4 forecast-min-low">
              <p>
                <spam className="high-temperature" id="forecast-day-3-ht" />
              </p>
              <p>
                <spam className="low-temperature" id="forecast-day-3-lt" />
              </p>
            </div>
          </div>
        </div>
        {/* Day 4 */}
        <div className="col-md-3 col-sm-6 day-weather-box">
          <div className="col-sm-12 day-weather-inner-box">
            <div className="col-sm-8 forecast-main">
              <p id="forecast-day-4-name" />
              <div className="row">
                <h5 id="forecast-day-4-main">°</h5>
                <i className="wi forecast-icon" id="forecast-day-4-icon" />
              </div>
            </div>
            <div className="col-sm-4 forecast-min-low">
              <p>
                <spam className="high-temperature" id="forecast-day-4-ht" />
              </p>
              <p>
                <spam className="low-temperature" id="forecast-day-4-lt" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  

  )
}
