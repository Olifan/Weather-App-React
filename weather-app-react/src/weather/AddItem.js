import React, {useState, useEffect} from "react";
import PropTypes from "prop-types"



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
  // const [data, setData] = useState()

  async function submitHandler(event){
    event.preventDefault()

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value()}&appid=dc4a159c14374d585f7cdb4ed8afbf60&units=metric`)
    let data = await res.json()
      console.log(data);
      console.log(data.name, data.sys.country)
    
    if(input.value() !== ''){
      onCreate(
        data.name, 
        data.sys.country, 
        Math.round(data.main.temp), 
        `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0]["icon"]}.svg`, 
        data.weather[0].description
        )

        input.clear()       
      
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
          <span className="message"></span>
        </form>
        
    )
}


AddItem.propTypes = {
  onCreate: PropTypes.func.isRequired
}


export default AddItem
