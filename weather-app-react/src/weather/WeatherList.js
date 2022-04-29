import React from "react";
import PropTypes from "prop-types"
import WeatherItem from "./WeatherItem";

function WeatherList(props) {
    return(
        <>
            {props.items.map(item => {
                return <WeatherItem item={item} key={item.city}/>
            })}
        </>
    )
}

WeatherList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WeatherList