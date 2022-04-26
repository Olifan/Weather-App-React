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

  function submitHandler(event){
    event.preventDefault()

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value()}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
    })
    
  
    if(input.value().trim()){
      onCreate(input.value())
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
