import React from "react";
import './App.css';
import "./styles/global.css"
import Box from "./components/Box.js"

// Variables
const tempMin=-20;
const tempMax=40;
const heartMin=80;
const heartMax=180;
const stepsMin=0;
const stepsMax=50000;
let num;

class App extends React.Component {
  constructor(){
    super()
    this.state={
      water:1.5,
      heart:120,
      temperature:-10,
      steps:3000
    }
  } 
  onHeartChange =(e)=>{
    this.setState({
      heart: e.target.value
    }) 
    this.calculateWater()
  }
  onStepsChange =(e)=>{
    this.setState({
      steps: e.target.value
    }) 
    this.calculateWater()
  }
  onTempChange =(e)=>{
    this.setState({
      temperature: e.target.value
    }) 
    this.calculateWater()
  }
  calculateWater =()=>{
    if (this.state.temperature>20) {
      num=this.state.temperature-20
      this.setState({
        water:this.state.water+(0.02*num)
      })
    }
    else if(this.state.heart>120){
      num=this.state.heart-120
      this.setState({
        water:this.state.water+(0.0008*num)
      })
    }
    else if(this.state.steps>10000){
      num=this.state.steps-10000
      this.setState({
        water:this.state.water+(0.00002*num)
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">

        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit=" L" />
          {/* Water */}
          <Box icon="directions_walk" color="black" min={stepsMin} max={stepsMax} value={this.state.steps} unit=" steps" onChange={this.onStepsChange} />
          {/* Steps */}
          <Box icon="favorite" color="red" min={heartMin} max={heartMax} value={this.state.heart} unit=" bpm" onChange={this.onHeartChange} />
          {/* Heart */}
          <Box icon="wb_sunny" color="yellow" min={tempMin} max={tempMax} value={this.state.temperature}  unit=" °C" onChange={this.onTempChange}/>
          {/* Temperature */}
          
        </div>
      </div>
        
    );
  }
}

export default App;