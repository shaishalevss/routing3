//import {Link} from "react-router-dom";
import * as React from "react";

class QuadraticEquation extends React.Component{

    state = {
        a: 0,
        b: 0,
        c: 0,
        x1: 0,
        x2: 0,
    }

    updateA = (e) => {
        // updates state
        this.setState({
            a: e.target.value
        }, () => {
            this.calc();
        })
    }

    updateB = (e) => {
        // updates state
        this.setState({
            b: e.target.value
        }, () => {
            this.calc();
        })
    }

    updateC = (e) => {
        // updates state
        this.setState({
            c: e.target.value
        }, () => {
            this.calc();
        })
    }

    calc = () => {
        let a = this.state.a;
        let b = this.state.b;
        let c = this.state.c;
        let insideSqrt = (b * b) - (4 * a * c);
        //check if whats inside the sqrt is positive or negative
        if (insideSqrt < 0) {
            this.setState({
                x1: "The equation values are not valid (negative value in the sqrt)",
                x2: "The equation values are not valid (negative value in the sqrt)",
            })
        } else {
            let topPlus = (-b) + Math.sqrt(insideSqrt);
            let topMinus = (-b) - Math.sqrt(insideSqrt);
            let bottom = 2 * this.state.a;
            this.setState({
                x1: topPlus / bottom,
                x2: topMinus / bottom,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Quadratic Equation</h1>
                <input type="number" placeholder="a" onChange={this.updateA}/>
                <input type="number" placeholder="b" onChange={this.updateB}/>
                <input type="number" placeholder="c" onChange={this.updateC}/>
                <br/>
                <h2>{this.state.a}x² + {this.state.b}x + {this.state.c} = 0</h2>
                <h3>X1 = {
                    this.state.x1
                }</h3>
                <h3>X2 = {
                    this.state.x2
                }</h3>
            </div>
        )}
}
export default QuadraticEquation;
