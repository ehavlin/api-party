import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './OpenWeather.css'

import OpenWeatherCity from './OpenWeatherCity'

class OpenWeather extends Component {
    state = {
        cityName : '',
    }

    handleChange = (event) => {
        const cityName = event.currentTarget.value
        this.setState({ cityName })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.history.push(`/openweather/${this.state.cityName}`)
    }

    render() {
        return (
            <div className="OpenWeather">
                <img className="OpenWeather-logo" src="https://superrepo.org/static/images/icons/original/weather.openweathermap.png.pagespeed.ce.vEoqOU5NCa.png" alt="OpenWeather logo" />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value={this.state.cityName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Look up a city.</button>
                    </div>
                </form>
                <Route exact path='/openweather' render={() => <h3>Please enter a city name to search on Open Weather!</h3>} />
                <Route path='/openweather/:cityName' component={OpenWeatherCity} />
            </div>
        )
    }
}

export default OpenWeather