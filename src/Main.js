import React from "react";

export default function Main() {
    return (
        <main>
          <div className="weather-app-container">
            <div>
              <h1 className="weather-app-city" id="city">
               Limpopo 
              </h1>
              <p className="weather-app-details">
                <span id="time">Tuesday 20:30</span>,
                <span id="description"> drizzle</span>
                <br />
                Humidity: <strong id="humidity">70%</strong>, Wind:
                <strong id="wind-speed">4.45km/h</strong>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div id="icon"></div>
    
              <div className="weather-app-temperature" id="temperature">
                17
              </div>
              <div className="weather-app-unit">ºC</div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </main>
      );
    }
