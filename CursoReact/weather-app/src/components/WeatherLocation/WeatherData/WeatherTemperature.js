import React from 'react';
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
    LIGHTNING,
}from './../../../constants/weather'
import './styles.css'

const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [RAIN]: "day-rain",
    [LIGHTNING] : "day-lightning",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SNOW]: "snow",
    [WINDY]: "windy",

}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    const sizeIcon = "4x"
    if (icon)
         return  <WeatherIcons className = "wicon" name = {icon} size={sizeIcon}/>
    else    
        return <WeatherIcons className="wicon" name = {"day-sunny"} size={sizeIcon}/>
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperature">
        {getWeatherIcon(weatherState)}
        <span className= "temperature">
        {`${temperature}`}
        </span>
        <span className="temperatureType">
        { ` °C`}
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState :   PropTypes.string.isRequired,

}


export default WeatherTemperature;