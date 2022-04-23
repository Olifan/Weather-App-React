import logo from './logo.svg';
import './App.css';
import WeatherList from './weather/WeatherList';

function App() {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Simple Weather App</h1>
        </div>

        <form id="searchForm">
          <input type="text" name="search" placeholder="Search for a city" autofocus=""/>
          <button type="submit">SUBMIT</button>
          <span className="message"></span>
          </form>
      </div>

      <div className="container">
        <div className="content">
          <WeatherList/>
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
