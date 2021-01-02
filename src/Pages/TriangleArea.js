//import {Link} from "react-router-dom";
import * as React from "react";

class TriangleArea extends React.Component{

    state = {
        height: 0,
        weight: 0,
    }

    updateHeight = (e) => {
        // updates state
        this.setState({
            height: e.target.value
        })
    }

    updateWeight = (e) => {
        // updates state
        this.setState({
            weight: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Triangle Area</h1>
                <input type="number" placeholder="height" onChange={this.updateHeight}/>
                <input type="number" placeholder="length" onChange={this.updateWeight}/>
                Area: <h2>{this.state.height*this.state.weight}</h2>
            </div>
        )}
}
export default TriangleArea;
