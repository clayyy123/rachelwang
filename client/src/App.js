import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './App.css';
import {Router, Switch} from "react-router-dom"
import Home from "./views/Home"
import Classes from "./views/Classes"
import About from "./views/About"
import Gallery from "./views/Gallery"
import End from "./views/Footer"
import Contact from "./views/Contact"

class App extends Component {


  constructor(props) {
    super(props);
    this.state={
      isOpen: false
    }
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
     console.log("end", arguments);
    });

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="App">
        <div className="Navbar">
          <Navbar color="light" light expand="md">
            <NavbarBrand id="navbrand" href="/">Rachel Wang</NavbarBrand>
            <NavbarToggler onClick={this.toggle.bind(this)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link activeClass="active" className="nav" to="home" spy={true} smooth={true} duration={500} >Home</Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" className="nav" to="about" spy={true} smooth={true} duration={500} >About</Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" className="nav" to="classes" spy={true} smooth={true} duration={500} >Classes</Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" className="nav" to="gallery" spy={true} smooth={true} duration={500} >Gallery</Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" className="nav" to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
    
        </div>
        
        <Element name="home"><Home /></Element>
        
        <Element name="about"><About /></Element>
        <Home />
        <Element name="classes"><Classes /></Element>
        <Home />
        <Element name="gallery"><Gallery /></Element>
        <Home />
        <Element name="contact"><Contact /></Element>
        <footer>
          <End />
        </footer>
      </div>
    );
  }
}

export default App;
