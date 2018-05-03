import React, { Component } from 'react';
import './App.css';
import {Router, Switch} from "react-router-dom"
import Navibar from "./views/Navbar"
import Home from "./views/Home"
import Classes from "./views/Classes"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar />

        <Home />
        <Classes />
      </div>
    );
  }
}

export default App;
