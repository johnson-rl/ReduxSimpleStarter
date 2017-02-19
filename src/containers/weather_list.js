import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const {lon, lat} = cityData.city.coord; // assigns lon and lat from coord to lon and lat constants
    // console.log('temps', temps, 'humidity', humidity, 'pressure', pressure)
    console.log(lon,lat)
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressure} color="red" units="hPa"/></td>
        <td><Chart data={humidity} color="green" units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  };
}

function mapStateToProps({ weather }) { // argument { weather } === state.weather in es6
  return { weather }; // {weather} === {weather: weather} in es6
}

export default connect(mapStateToProps)(WeatherList);
