import React, { Component } from 'react';
import { Link, Element, Events } from 'react-scroll';
import { Link as Linking } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Classes from './views/Classes';
import About from './views/About';
import Gallery from './views/Gallery';
import End from './views/Footer';
import Contact from './views/Contact';
import Login from './views/Login';
import Blog from './views/Blog';
import Post from './views/Post';
import httpClient from './httpClient.js';
import SignUp from './views/Signup.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentUser: httpClient.getCurrentUser()
    };
  }

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
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
        <Switch>
          <Route
            path="/blogs/new"
            render={props => {
              return <Post {...props} currentUser={this.state.currentUser} />;
            }}
          />

          <Route
            path="/signup"
            render={props => {
              return <SignUp {...props} currentUser={this.state.currentUser} />;
            }}
          />

          <Route
            path="/login"
            render={props => {
              return (
                <Login {...props} logsuccess={this.onLoginSuccess.bind(this)} />
              );
            }}
          />

          <Route
            path="/blogs"
            render={props => {
              return <Blog currentUser={this.state.currentUser} {...props} />;
            }}
          />

          <Route
            path="/"
            render={() => {
              return (
                <div>
                  <div className="Navbar">
                    <Navbar color="light" light expand="md">
                      <NavbarBrand id="navbrand" href="/">
                        Rachel Wang
                      </NavbarBrand>
                      <NavbarToggler onClick={this.toggle.bind(this)} />
                      <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                            <Link
                              activeClass="active"
                              className="nav"
                              to="home"
                              spy={true}
                              smooth={true}
                              duration={1000}
                            >
                              Home
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link
                              activeClass="active"
                              className="nav"
                              to="about"
                              spy={true}
                              smooth={true}
                              duration={1000}
                            >
                              About
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link
                              activeClass="active"
                              className="nav"
                              to="classes"
                              spy={true}
                              smooth={true}
                              duration={1000}
                            >
                              Classes
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link
                              activeClass="active"
                              className="nav"
                              to="gallery"
                              spy={true}
                              smooth={true}
                              duration={1000}
                            >
                              Gallery
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Link
                              activeClass="active"
                              className="nav"
                              to="contact"
                              spy={true}
                              smooth={true}
                              duration={1000}
                            >
                              Contact
                            </Link>
                          </NavItem>
                          <NavItem>
                            <Linking
                              className="nav"
                              to="/blogs"
                              target="_blank"
                            >
                              <span id="blog-link">Blog</span>
                            </Linking>
                          </NavItem>
                          {this.state.currentUser ? (
                            <div>
                              <NavItem>
                                <Link
                                  className="nav"
                                  to="#"
                                  onClick={this.logOut.bind(this)}
                                >
                                  Logout
                                </Link>
                              </NavItem>
                              <NavItem>
                                <Linking className="nav" to="/blogs/new">
                                  Post Blog
                                </Linking>
                              </NavItem>
                            </div>
                          ) : (
                            <div />
                          )}
                        </Nav>
                      </Collapse>
                    </Navbar>
                  </div>
                  <Element name="home">
                    <Home />
                  </Element>
                  <Element name="about">
                    <About />
                  </Element>
                  <div className="para2" />
                  <Element name="classes">
                    <Classes />
                  </Element>
                  <div className="para3" />
                  <Element name="gallery">
                    <Gallery />
                  </Element>
                  <div className="para4" />
                  <Element name="contact">
                    <Contact />
                  </Element>
                </div>
              );
            }}
          />
        </Switch>
        <footer>
          <End />
        </footer>
      </div>
    );
  }
}

export default App;
