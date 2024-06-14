import React from "react";
import Cards from "./components/Cards";
import WeatherForm from "./WeatherForm";
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-section">
          <h1>Card Matching Game</h1>
          <Cards />
        </div>
        <div className="right-section">
          <h1 style={{ marginLeft: '100px' }}>Weather Update</h1>
          <WeatherForm />
        </div>
      </div>
    </div>
  );  
}

export default App;