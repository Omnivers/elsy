import React from "react";
import './App.css';
import "./styles/global.css"
import Box from "./components/Box.js"

// Variables
let tempMin=-20;
let tempMax=40;
let heartMin=80;
let heartMax=180;
let stepsMin=0;
let stepsMax=50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit=" L" />
          {/* Water */}
          <Box icon="directions_walk" color="black" value={3000} unit=" steps" />
          {/* Steps */}
          <Box icon="favorite" color="red" value={120} unit=" bpm" />
          {/* Heart */}
          <Box icon="wb_sunny" color="yellow" value={-10} unit=" °C"/>
          {/* Temperature */}
          
        </div>
      </div>
        
    );
  }
}

export default App;