import React, {useEffect} from 'react';
import './App.css';
import WeatherList from './weather/WeatherList';
import AddItem from './weather/AddItem';

function App() {

  const [items, setItems] = React.useState([
    // {city: 'London', country: 'UK', temp: 10, icon: '', description:'Sunny'}
  ])

  

  function addItem(city, country, temp, icon, description){
    setItems(items.concat([{
      city, country, temp, icon, description
    }]))

  }

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Simple Weather App</h1>
        </div>
        <AddItem onCreate={addItem}/>
      </div>

      <div className="container">
        <div className="content">
          <WeatherList items={items}/>
        </div>
      </div>
      
      <div className="container">
        <div className="footer">
          <p>Made with <span>❤</span> by Anton Olifan</p>
        </div>
      </div>
    </div>
  );
}

export default App;