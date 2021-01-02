//import {Link} from "react-router-dom";
import * as React from "react";

class Pythagoras extends React.Component{

    state = {
        a: null,
        b: null,
        c: null
    }

    updateA = (e) => {
        // updates state
        this.setState({
            a: e.target.value
        });
    }

    updateB = (e) => {
        // updates state
        this.setState({
            b: e.target.value
        });
    }

    updateC = (e) => {
        // updates state
        this.setState({
            c: e.target.value
        })
    }



    calc = () =>{
        let a = this.state.a;
        let b = this.state.b;
        let c = this.state.c;

        if(this.state.a != null && this.state.b != null && this.state.c == null){
            this.setState({
                c: Math.sqrt((a*a) + (b*b)),
            })
        } else if(this.state.a != null && this.state.b == null && this.state.c != null) {
            this.setState({
                b: Math.sqrt((c*c) - (a*a)),
            })
        } else if(this.state.a == null && this.state.b != null && this.state.c != null) {
            this.setState({
                a: Math.sqrt((c*c)-(b*b)),
            })
        }
    }

    onlyTwo = () => {
        if(this.state.a != null && this.state.b != null && this.state.c == null){
            document.getElementById("cInput").disabled = true;
            return false;
        } else if(this.state.a != null && this.state.b == null && this.state.c != null) {
            document.getElementById("bInput").disabled = true;
            return false;
        } else if(this.state.a == null && this.state.b != null && this.state.c != null) {
            document.getElementById("aInput").disabled = true;
            return false;
        } else if (this.state.a == null && this.state.b == null && this.state.c == null){
            return true;
        } else if(this.state.a != null && this.state.b != null && this.state.c != null){
            return false;
        }else{
            return true;
        }
    }

    resetCalc = () => {
        document.getElementById("aInput").value = "";
        document.getElementById("bInput").value = "";
        document.getElementById("cInput").value = "";
        document.getElementById("aInput").disable = false;
        document.getElementById("bInput").disable = false;
        document.getElementById("cInput").disable = false;

        this.setState({
            a: null,
            b: null,
            c: null
        })
    }

    render() {
        return (
            <div>
                <h1>Pythagoras</h1>
                <input id="aInput" type="number" placeholder="a" onChange={this.updateA}/>
                <input id="bInput" type="number" placeholder="b" onChange={this.updateB}/>
                <input id="cInput" type="number" placeholder="c" onChange={this.updateC}/>
                <br/>
                <button disabled={this.onlyTwo()} onClick={this.calc}>Calculate</button>
                <button disabled={this.onlyTwo()} onClick={this.resetCalc}>Reset</button>
                <h2>{this.state.a}² + {this.state.b}² = {this.state.c}²</h2>
                <div>AAA</div>
            </div>
        )}
}
export default Pythagoras;