import './App.css';
import {NavLink, Route, Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import React from "react";
import MainPage from "./Pages/MainPage";
import QuadraticEquation from "./Pages/QuadraticEquation";
import TriangleArea from "./Pages/TriangleArea";
import Pythagoras from "./Pages/Pythagoras";


export const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <nav>
                <ul>
                    <li className="homeNavbar">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/QuadraticEquation"}>Quadratic Equation</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/TriangleArea"}>Triangle Area</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Pythagoras"}>Pythagoras</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/QuadraticEquation" component={QuadraticEquation}/>
                <Route path="/TriangleArea" component={TriangleArea}/>
                <Route path="/Pythagoras" component={Pythagoras}/>
            </Switch>
        </Router>
    );
}

export default App;
