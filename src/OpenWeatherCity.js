import React, { Component } from 'react'

class OpenWeatherCity extends Component {
    state = {
        city: {
            main: {
                temp: '',
                pressure: '',
                humidity: '',
            },
            name: '',
            wind: {
                speed: '',
            }
        }
    }

    constructor(props) {
        super(props)

        this.fetchUserData(this.props)
    }

    fetchUserData = (props) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=<your API key>&q=${props.match.params.cityName}`)
            .then(response => response.json())
            .then(city => this.setState({ city }))
    }

    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
            this.fetchUserData(nextProps)
        }
    }

    render() {
        const { city } =this.state

        return (
            <div className="openweather-city">
                <h2>{city.name}</h2>
                <h3>Temperature: {city.main.temp} kelvin</h3>
                <h3>Pressure: {city.main.pressure} hPa</h3>
                <h3>humidity: {city.main.humidity} %</h3>
                <h3>Wind Speed: {city.wind.speed} meter/sec</h3>
            </div>
        )
    }
}

export default OpenWeatherCity