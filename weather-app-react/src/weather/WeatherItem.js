import React from "react";
import PropTypes from "prop-types"


function WeatherItem({item}) {
    return(
        <div className="cards">
            <div className="city">
                <span>{item.city}</span>
                <sup>{item.country}</sup>
            </div>
            <div className="temp">
                {item.temp}<sup>°C</sup>
            </div>
            <div className="weather">
                <img className="icon" src={item.icon} />
                <span>{item.description}</span>
            </div>
        </div>
    )
}

WeatherItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default WeatherItem