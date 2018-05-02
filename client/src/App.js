import React, { Component } from 'react';
import './App.css';
import {Router, Switch} from "react-router-dom"
import Navibar from "./views/Navbar"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar />
      </div>
    );
  }
}

export default App;
