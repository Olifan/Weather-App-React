import React, {useState, useEffect} from "react";
import PropTypes from "prop-types"
import WeatherList from "./WeatherList";
import WeatherItem from "./WeatherItem";

const cities = []


function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return{
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddItem({onCreate}) {
  const input = useInputValue('')
  const [message, setMessage] = useState('')

  function addCity(){
    cities.push(input.value().toLowerCase());
    console.log(cities);
  }


  async function submitHandler(event){
    event.preventDefault()

    if(!input.value() || input.value() === ''){
      setMessage('Please search for a valid city 😩')
    }else if(cities.includes(input.value().toLowerCase())){
      setMessage(`You already know the weather for ${input.value()}
      ...otherwise be more specific by providing the country code as well 😉`)

      input.clear()
    }
    else {

      addCity()

      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value()}&appid=dc4a159c14374d585f7cdb4ed8afbf60&units=metric`)
      let data = await res.json()

      onCreate(
        data.name, 
        data.sys.country, 
        Math.round(data.main.temp), 
        `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`, 
        data.weather[0].description
        )

        input.clear()   
        setMessage('')
    }
  }

    return(
        <form id="searchForm" onSubmit={submitHandler}>
          <input 
          {...input.bind} 
          type="text" 
          name="search" 
          placeholder="Search for a city" 
          autofocus=""/>
          <button type="submit">SUBMIT</button>
          <span className="message">{message}</span>
        </form>
        
    )
}


AddItem.propTypes = {
  onCreate: PropTypes.func.isRequired
}


export default AddItem
