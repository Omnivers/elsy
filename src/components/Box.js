import React from "react";
import App from "../App";


class Box extends React.Component{
    render(){
        return(
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize:100 ,color:this.props.color}}>
                    {this.props.icon}</span>
                    <p>{this.props.value === 0 ? (<input type="range" min={this.props.min} max={this.props.max} onChange={this.props.onChange}></input>): this.props.value}{this.props.unit}</p>
                    <p><input type="range" min={this.props.min} max={this.props.max} onChange={this.props.onChange}></input></p>
            </div>
        )
    }
}

export default Box;