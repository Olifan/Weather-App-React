import React from "react";

export default function WeatherItem() {
    return(
        <>
        <div className="city">
            <span>Kyiv</span>
            <sup>UA</sup>
        </div>
        <div className="temp">
            13<sup>°C</sup>
        </div>
        <div className="weather">
            <img className="icon" src='' />
            <span>SUNNY</span>
        </div>
        </>
    )
}